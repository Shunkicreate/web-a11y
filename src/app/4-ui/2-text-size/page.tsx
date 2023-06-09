import Link from "next/link";

const Page = () => {
	return (
		<div>
			<h1>テキストのサイズ</h1>
			<p>
				テキストのサイズに関するアクセシビリティを考えるとき、大きさが可変なことはとても重要である。
				Webページの文字列を変える方法は以下のようなものがある。
			</p>
			<ul>
				<li>ブラウザのズーム機能</li>
				<li>ブラウザやOSの文字サイズ変更機能</li>
				<li>ピンチアウト、ピンチイン</li>
				<li>支援技術の画面拡大機能</li>
				<li>Webページ独自の文字サイズ変更機能</li>
			</ul>
			<p>よくある事例からこれらの方法を見てみる</p>
			<h2>タッチデバイスでピンチアウトによる画面の拡大を禁止している</h2>
			<p>
				メタタグに<code>user-scalable=no</code>や<code>maximum-scale=1.0</code>を指定すると、Android
				Chromeではピンチアウトによる画面の拡大が出来なくなる。
			</p>
			<h3>改善策 -ピンチアウトによる画面の拡大を禁止しない-</h3>
			<p>
				タッチデバイスでピンチアウトによる画面の拡大を禁止しないようにすることで、文字が小さすぎて読めないなどの問題を解決できる。
			</p>
			<h2>画面をズームすると、位置を固定した要素が画面を覆ってしまう</h2>
			<Link href={"/4-ui/2-text-size/position-fixed"}>例はこちら</Link>
			<h3>改善策 -位置を固定した要素はズームしたときの表示方法を検討する-</h3>
			位置を固定した要素はズームしたときの表示方法を検討する必要がある。解決方法は以下がある。
			<ul>
				<li>メディアクエリを用いてスタイルを切り替える</li>
				<li>
					%を使ってスタイルを使って調整する（<Link href={"/4-ui/2-text-size/zoom-contents-size"}>例はこちら</Link>）
				</li>
			</ul>
			<h2>ブラウザの文字サイズ変更機能が反映されない</h2>
			ブラウザの文字サイズ変更機能を利用しても、文字の大きさを<code>px</code>や、<code>pt</code>
			などの絶対単位で指定していると、文字サイズ変更機能の設定が文字の大きさに反映されない。
			<br />
			Internet
			Archiveの調査によると、ブラウザの文字サイズ変更機能を利用しているユーザは全ユーザの約3%とされている。文字サイズを変更できないとユーザが文字の読みにくさを改善できなくなる。
			<br />
			なお、ブラウザの文字サイズ変更機能とブラウザのズーム機能を混同しないようにする。フォントサイズに絶対単位を指定すると、ブラウザの文字サイズの変更機能では文字が拡大できなくなるが、ブラウザのズーム機能では文字が拡大できる。
			<h3>改善策 -フォントサイズは相対単位で指定する-</h3>
			<p>
				<Link href={"/4-ui/2-text-size/font-size"}>例はこちら</Link>
			</p>
			<h2>チェックポイント</h2>
			<p>
				WCAG 2.1では、達成基準1.4.4に
				<Link href={"https://www.w3.org/TR/WCAG21/#resize-text"}>「テキストのサイズの変更」</Link>
				があり、Webページのコンテンツ、機能を損なうことなく、支援技術なしで文字サイズを200%まで拡大できることを求めている。なお、文字を拡大する方法を複数提供することは必須ではない。いずれかの方法で文字が拡大できれば、達成基準を満たすことになる。
			</p>
			<ul>
				<li>ヒューリスティックなチェック（デザイン時）</li>
				<ul>
					<li>ブラウザのズーム機能で200%まで拡大したときの表示方法を検討する</li>
					<li>ブラウザの文字サイズ変更機能で文字の大きさを2倍にしたときの表示方法を検討する</li>
				</ul>
				<li>ヒューリスティックなチェック（実装時）</li>
				<ul>
					<li>
						viewpostに<code>user-scalable=no</code>や<code>maximum-scale=1.0</code>を指定しない
					</li>
					<li>フォントサイズや、フォントサイズに応じて変化するサイズには相対位置を指定する</li>
					<li>ブラウザのズーム機能で200%まで拡大したとき、文字が見切れたり、重なったりしていないか確認する</li>
					<li>
						ブラウザの文字サイズ変更機能で文字の大きさを2倍にしたときに、文字が見切れたり、重なったりしていないか確認する
					</li>
				</ul>
				<li>自動チェック</li>
				<ul>
					<li>
						<Link href={"https://www.deque.com/axe/"}>axe</Link>
					</li>
				</ul>
			</ul>
		</div>
	);
};
export default Page;
