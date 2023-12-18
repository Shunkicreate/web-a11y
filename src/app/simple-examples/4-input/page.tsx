'use client'
import Link from "next/link";
import { useState } from "react";
const Index = () => {
	const [divOrangeIsChecked, setIsDivOrangeChecked] = useState<boolean>(false);
	const [divAppleIsChecked, setIsDivAppleChecked] = useState<boolean>(false);

	const containerStyle = {
		marginTop: '40px',
		padding: '10px 30px 20px 30px',
		border: '1px solid black',
	}

	const divCheckBoxContainerStyle = {
		display: 'flex',
		width: 'fit-content'
	}
	const divCheckBoxStyle = (isChecked: boolean) => ({
		border: '1px solid black',
		backgroundColor: `${isChecked ? 'blue' : 'white'}`,
		width: '0.8rem',
		height: '0.8rem',
		margin: '0.3rem',
		borderRadius: '0.2rem'
	});
	const orangeDivCheckBoxStyle = {
		...divCheckBoxStyle(divOrangeIsChecked)
	};
	const appleDivCheckBoxStyle = {
		...divCheckBoxStyle(divAppleIsChecked)
	};

	return (
		<>
			<h2>inputタグによる入力フォームの実装</h2>

			<h3>ラジオボタンの実装</h3>
			<p>inputタグとdivタグによるラジオボタンの操作性の違いを確認してみてください。</p>

			<div style={containerStyle}>
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

			<div style={containerStyle}>
				<h4>divタグで実装されたチェックボックス</h4>
				<div>
					<div
						style={divCheckBoxContainerStyle}
						onClick={() => setIsDivOrangeChecked(cur => !cur)}>
						<div style={orangeDivCheckBoxStyle} />
						<div>みかんジュース</div>
					</div>
					<div
						style={divCheckBoxContainerStyle}
						onClick={() => setIsDivAppleChecked(cur => !cur)}
					>
						<div style={appleDivCheckBoxStyle} />
						<div>りんごジュース</div>
					</div>
				</div>
			</div>
			<p>divタグでは、選択はできるものの、キーボード操作は行えず、選択の有無も視覚的な色の違いでしか認識できません。</p>
		</>
	);
};

export default Index;
