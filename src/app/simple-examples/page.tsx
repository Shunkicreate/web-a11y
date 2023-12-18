import Link from "next/link";

const Index = () => {
	return (
		<>
			<h1>アクセシビリティを実感してみる</h1>
			<p>これは、<Link href="">今日から始めるアクセシビリティ~少しの気遣いでより使いやすいアプリへ~</Link>の記事と対応したシンプルなアクセシビリティお試しサンプルです。実際に触ってみて、アクセシビリティの面白さを実感してみてください。</p>
			<ul>
				<li><Link href="simple-examples/font-size">文字サイズの変更と見た目</Link></li>
				<li><Link href="simple-examples/button">buttonタグによるボタンの実装</Link></li>
				<li><Link href="simple-examples/a">aタグによるリンクの実装</Link></li>
			</ul>
		</>
	);
};

export default Index;
