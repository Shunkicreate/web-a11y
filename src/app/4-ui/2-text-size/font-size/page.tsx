import Link from "next/link";

const Page = () => {
	return (
		<>
			<p style={{ fontSize: "16px" }}>ブラウザのデフォルトの標準フォントサイズは16pxです</p>
			<button style={{ fontSize: "1rem", minWidth: "20rem", height: "2rem" }}>
				フォントサイズに応じてボタンの大きさを変化させましょう
			</button>
			<p style={{ fontSize: "2rem" }}>フォントサイズ2rem</p>
			<p style={{ fontSize: "2em" }}>フォントサイズ2em</p>
			<p style={{ fontSize: "200%" }}>フォントサイズ200%</p>
			<p style={{ fontSize: "32px" }}>フォントサイズ32px</p>
			<p style={{ fontSize: "24pt" }}>フォントサイズ24pt</p>
			<p>
				cssの単位に関しては
				<Link href='https://developer.mozilla.org/ja/docs/Learn/CSS/Building_blocks/Values_and_units'>こちら</Link>
			</p>
		</>
	);
};

export default Page;

