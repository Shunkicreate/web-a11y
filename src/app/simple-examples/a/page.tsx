'use client'
import { useRouter } from 'next/navigation';

const Index = () => {
	const router = useRouter();

	const containerStyle = {
		marginTop: '40px',
		padding: '10px 30px 20px 30px',
		border: '1px solid black',
	}
	const divButtonStyle = {
		width: 'fit-content',
		borderBottom: '1px solid black',
		fontSize: '1rem',
	};

	return (
		<>
			<h2>aタグによるリンクの実装</h2>
			<p>aタグ、buttonタグ、divタグによる操作性の違いを確認してみてください。</p>

			<div style={containerStyle}>
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


			<div style={containerStyle}>
				<h4>buttonタグで実装されたリンク</h4>
				<button onClick={() => router.push("https://developer.mozilla.org/ja/docs/Web/HTML/Element/a")}>Buttonタグのリンク</button>
			</div>
			<p>buttonタグでは、キーボード操作でフォーカスを当てて、Enterで画面遷移を行うことは可能ですが、それ以外のaタグに見られる特徴は見られません。</p>

			<div style={containerStyle}>
				<h4>divタグで実装されたリンク</h4>
				<div style={divButtonStyle} onClick={() => router.push("https://developer.mozilla.org/ja/docs/Web/HTML/Element/a")}>Divタグのリンク</div>
			</div>
			<p>divタグでは、あげた特徴はどれも使用不可。押せば画面遷移のみ起こる。</p>
		</>
	);
};

export default Index;
