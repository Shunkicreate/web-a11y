import ShowCode from "@/components/showCode";
const Page = () => {
	const ButtonExample = `
<button>
    <img src="/imgs/add.svg" alt="追加"/>
</button>
`;
	const BadButtonExample = `
<div className="Button">
    <svg className="Icon -add" >
        <g opacity="0.64" clip-path="url(#clip0_1211_2)">
            <circle cx="32" cy="32" r="30.5" fill="white" stroke="black" stroke-width="3"/>
            <rect x="30" y="17" width="4" height="30" fill="black"/>
            <rect x="17" y="34" width="4" height="30" transform="rotate(-90 17 34)" fill="black"/>
        </g>    
    </svg>
</div>
`;
	const CheckboxExample = `
<label htmlFor="checkbox">
    <input type="checkbox" checked id="checkbox" />
    同意する
</label>
`;
	const TabExample = `
<div role="tablist">
    <button role="tab" aria-selected="true" id="search-tab">検索して追加</button>
    <button role="tab" aria-selected="false" id="file-tab">ファイルから追加</button>
</div>
<div role="tabpanel" aria-labelledby="seach-tab" aria-hidden="false">
(省略)
</div>
<div role="tabpanel" aria-labelledby="file-tab" aria-hidden="true">
(省略)
</div>
`;

	return (
		<div>
			<h1>基礎となるマシンリーダブルを理解する</h1>
			<h2>何も読み上げられないし、操作できないボタン -「名前」と「役割」</h2>
			<p>ウェブアプリケーションにおけるUIの担保のために「名前」と「役割」というものが重要である。</p>
			<ul>
				<li>
					名前があることで対象を識別したり目的を理解したり出来る。例えばボタン、ナビゲーション、フォームなどである。
				</li>
				<li>役割があることでユーザは対象の振る舞い（ボタンであれば押せるなど）を期待することができる。</li>
			</ul>
			<h3>読み上げられる実装</h3>
			<ShowCode code={ButtonExample}></ShowCode>
			<p>
				ボタンにはbutton要素があり、スクリーンリーダはそこから、役割がボタンであることを読み取る。また、img要素にalt属性があり、代替テキストから追加することが分かる。そのため、スクリーンリーダは「追加、ボタン」と読み、アクセスできるようになる。
			</p>
			<h3>読み上げられない実装</h3>
			<ShowCode code={BadButtonExample} />
			<p>
				div要素は特別な意味がないため、セマンティックが読み取られない。また、svgにはテキスト情報がなく、コンテンツが読み取られない。どちらも意味がありそうなclass属性を持っているが、機能しない。
			</p>
			<h2>選択したか分からないチェックボックス - 「状態」</h2>
			<p>
				ゼロからHTMLの見た目を作成する方がHTMLの標準のチェックボックスの見た目を変更するよりも効率的かも知らない。しかし、それではセマンティクスが含まれておらず、アクセシビリティが担保されない。以下に標準的なチェックボックスを示す。
			</p>
			<ShowCode code={CheckboxExample} />
			<p>
				<code>type=&quot;checkbox&quot;</code>
				はチェックボックスの役割を持っており、label要素によって同意するのコンテンツと関連付けられ、同意するという名前を持つ。
			</p>
			<p>
				また、チェックボックスがチェックされていると、真偽値を持つ、checked属性が真になり、チェックされている状態であることが分かる。これはスクリーンリーダで読み上げたときに、ラベルの「同意する」、状態の「チェックされている」、役割の「チェックボックス」が読み上げられる。現在の状態が分からなければ目的の操作が出来ないため、「状態」が必要になる。
			</p>
			<h2>HTMLのセマンティクスと、それを補完するWAI-ARIA</h2>
			<p>
				アクセシビリティにとってセマンティクス(「名前」、「役割」、「状態」)を実装することが大事である。ただ、HTMLは標準でセマンティクスを持っている。それをネイティブセマンティックという。
			</p>
			<h3>HTMLのセマンティクスを補完するWAI-ARIA</h3>
			<p>
				HTMLのセマンティクスを補完する機能としてWAI-ARIAがある。これは主に役割を補完する「WAI-ARIAロール」と、状態やプロパティを補完する「WAI-ARIAステートおよびプロパティ」がある。MDNの記事はこちら&nbsp;
				<a href='https://developer.mozilla.org/ja/docs/Learn/Accessibility/WAI-ARIA_basics#wai-aria_%E3%81%AE%E5%B0%8E%E5%85%A5'>
					WAI-ARIA の導入
				</a>
				&nbsp;<a href='https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles'>WAI-ARIAロール</a>
				<br />
				例えばタブUIはHTMLだけではタブUIであること、タブが選択されていること、タブのコンテンツが隠されているかどうかなどのセマンティクスを表現できない。しかしWAI-ARIAはこれを解決出来る。
			</p>
			<ShowCode code={TabExample} />
			<p>
				この例では、タブUIを構成する役割(role=&quot;tab&quot;
				role=&quot;tablist&quot;)と、タブが選択されているか(aria-selected)、タブパネルが隠されているかどうか(aria-hidden)という状態を補完している。何らかの理由でHTMLの要素が変更できない場合でも、WAI-ARIAの属性を用いることでセマンティクスを補完できる。ただし、特別な理由が無ければ適切なHTMLの要素を用いてセマンティクスを実現することが望ましい。
			</p>
			<h3>WAI-ARIAよりもHTMLネイティブセマンティクスが優れている理由</h3>
			<p>
				WAI-ARIAはHTMLのセマンティクスのみを補完するため、振る舞いまでは再現してくれない。例えば、div要素にrole=&quot;button&quot;を付与してもキーボードで操作できるようにはならない。また、href属性を持つa要素であればコンテキストメニューにURLをコピーしたり、新しいタブで開いたりするメニューが追加される。また、そもそも、WAI-ARIAを理解できるユーザーエージェントや、支援技術が限られているため、WAI-ARIAよりもHTMLネイティブセマンティクスを使うべきである。
			</p>
            <h2>HTMLとWAI-ARIAとAOM</h2>
            <p>
                これまで説明してきた名前、役割、状態などのセマンティクスはOSが用意しているアクセシビリティAPIを介してアプリケーションとやり取りする。WindowsだとMicrosoft Active Accessibility、Windows Automation APIなどがあり、macOSだとNSAccessibilityである。Voice Overなどの支援技術はAOMを読み取り、操作することでアプリケーションを操作する。ブラウザは自身が持つ検索バーや戻るボタンなどのインターフェースだけではなく、Webページの著者が作成したコンテンツもAOMに変換してアクセシビリティAPIを通じて公開している。それによってユーザは支援技術を利用してWebページにアクセスできる。
            </p>
			<h3>WebコンテンツからAOMを作成する</h3>
			<p>
				ブラウザは画面上に表示するインターフェースを生成するために、HTMLからDOM(Document Object Model)を生成する。そしてCSSからCSSオブジェクトモデルを生成し、2つのオブジェクトモデルを組み合わせる。そこからレンダリングツリーを作成してレイアウト計算を行い、最終的に画面に描画する。WAI-ARIAを含んだHTMLとCSSをもとにAOMは生成される。優先順位は次のようになる。
				<div>WAI-ARIA &gt; CSS &gt; HTML</div>
				つまり、HTMLのプロパティはCSSに上書きされて、さらにWAI-ARIAに上書きされる。CSSによるロールの変更濃霧はブラウザによって異なる場合があるが、WAI-ARIAが優先されることはおおむね度のブラウザでも同じ。ただし、HTMLではrole属性とaria-*属性の組み合わせもある程度定められているため、WAI-ARIAを使用するときは気を付けないといけない。
            </p>
		</div>
	);
};

export default Page;

