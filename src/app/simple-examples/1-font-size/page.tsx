import style from "@/components/simpleSample.module.css"

const Index = () => (
	<>
		<h2>文字サイズの変更と見た目</h2>
		<p>デフォルト文字サイズを変更して、remとpxの違いを体感してみてください。</p>
		<p>pxで指定してしまうと、ユーザがフォントサイズを変更しても、元の大きさのままになってしまいます。</p>
		<p>Chromeの文字サイズの変更は、chrome://settings/appearanceで行えます。セキュリティの都合上リンクにできなかったため、リンクを直接貼り付けてみてください。</p>

		<div className={style.container}>
			<h4>remで指定された文字</h4>
			<p style={{ fontSize: '1rem' }}>これは1remで指定された文字です。</p>
		</div>

		<div className={style.container}>
			<h4>pxで指定された文字</h4>
			<p style={{ fontSize: '16px' }}>これは16pxで指定された文字です。</p>
		</div>
	</>
);

export default Index;
