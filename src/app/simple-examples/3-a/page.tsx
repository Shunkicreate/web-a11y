'use client'
import { useRouter } from 'next/navigation';
import style from "@/components/simpleSample.module.css"

const Index = () => {
	const router = useRouter();

	return (
		<>
			<h2>aタグによるリンクの実装</h2>
			<p>aタグ、buttonタグ、divタグによる操作性の違いを確認してみてください。</p>

			<div className={style.container}>
				<h4>aタグで実装されたリンク</h4>
				<a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/a">aタグのリンク</a>
			</div>
			<p>aタグでは、以下のような操作が行えます。</p>
			<ul>
				<li>右クリックを押した際のコンテキストメニューがリンク仕様になり、「新しいタブで開く」などが用意されている</li>
				<li>キーボード操作(Tabキー)でフォーカスが当たる</li>
				<li>マウスのホイールクリックでリンクが別タブで開ける</li>
				<li>マウスでホバーすると左下にリンク先が表示される</li>
			</ul>

			<div className={style.container}>
				<h4>buttonタグで実装されたリンク</h4>
				<button onClick={() => router.push("https://developer.mozilla.org/ja/docs/Web/HTML/Element/a")}>Buttonタグのリンク</button>
			</div>
			<p>buttonタグでは、キーボード操作でフォーカスを当てて、Enterで画面遷移を行うことは可能ですが、それ以外のaタグに見られる特徴は見られません。</p>

			<div className={style.container}>
				<h4>divタグで実装されたリンク</h4>
				<div className={style.divLink} onClick={() => router.push("https://developer.mozilla.org/ja/docs/Web/HTML/Element/a")}>Divタグのリンク</div>
			</div>
			<p>divタグでは、あげた特徴はどれも使用不可。押せば画面遷移のみ起こる。</p>
		</>
	);
};

export default Index;
