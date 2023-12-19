'use client'
import Link from "next/link";
import { useState } from "react";
import style from "@/components/simpleSample.module.css"

const Index = () => {
	const [divOrangeIsSelected, setIsDivOrangeSelected] = useState<boolean>(false);
	const [divAppleIsSelected, setIsDivAppleSelected] = useState<boolean>(false);

	const divCheckBoxContainerStyle = {
		display: 'flex',
		width: 'fit-content'
	}

	return (
		<>
			<h2>inputタグによる入力フォームの実装</h2>

			<h3>ラジオボタンの実装</h3>
			<p>inputタグとdivタグによるラジオボタンの操作性の違いを確認してみてください。</p>

			<div className={style.container}>
				<h4>inputタグで実装されたチェックボックス</h4>
				<form action="" >
					<label>
						<input type="checkBox" />
						みかんジュース
					</label>
					<br />
					<label>
						<input type="checkBox" />
						りんごジュース
					</label>
				</form>
			</div>
			<p>inputタグでは、TabキーとSpaceキーで操作が行えます。ぜひ操作してみてください。</p>
			<p>また、選択の有無は目が見えなくとも<Link href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC">スクリーンリーダー</Link>で読み上げられます。</p>

			<div className={style.container}>
				<h4>divタグで実装されたチェックボックス</h4>
				<div>
					<div
						style={divCheckBoxContainerStyle}
						onClick={() => setIsDivOrangeSelected(cur => !cur)}>
						<div className={`${style.divCheckBox} ${divOrangeIsSelected ? style.selected : ''}`} />						<div>みかんジュース</div>
					</div>
					<div
						style={divCheckBoxContainerStyle}
						onClick={() => setIsDivAppleSelected(cur => !cur)}
					>
						<div className={`${style.divCheckBox} ${divAppleIsSelected ? style.selected : ''}`} />
						<div>りんごジュース</div>
					</div>
				</div>
			</div>
			<p>divタグでは、選択はできるものの、キーボード操作は行えず、選択の有無も視覚的な色の違いでしか認識できません。</p>
		</>
	);
};

export default Index;
