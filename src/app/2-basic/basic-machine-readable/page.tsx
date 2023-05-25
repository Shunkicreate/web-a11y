import ShowCode from "@/components/showCode";
const Page = () => {
	const sourceCode1 = `
<button>
    <img src="/imgs/add.svg" alt="追加"/>
</button>
        `;
	const sourceCode2 = `
<div className="Button>
    <img src="/imgs/add.svg" alt="追加"/>
    <svg className="Icon -add" >
        <g opacity="0.64" clip-path="url(#clip0_1211_2)">
            <circle cx="32" cy="32" r="30.5" fill="white" stroke="black" stroke-width="3"/>
            <rect x="30" y="17" width="4" height="30" fill="black"/>
            <rect x="17" y="34" width="4" height="30" transform="rotate(-90 17 34)" fill="black"/>
        </g>    
    </svg>
</div>
        `;
	const sourceCode3 = `
<label htmlFor="checkbox">
    <input type="checkbox" checked id="checkbox" />
    同意する
</label>
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
			<ShowCode code={sourceCode1} ></ShowCode>
			<p>
				ボタンにはbutton要素があり、スクリーンリーダはそこから、役割がボタンであることを読み取る。また、img要素にalt属性があり、代替テキストから追加することが分かる。そのため、スクリーンリーダは「追加、ボタン」と読み、アクセスできるようになる。
			</p>
			<h3>読み上げられない実装</h3>
			<ShowCode code={sourceCode2} />
			<p>
				div要素は特別な意味がないため、セマンティックが読み取られない。また、svgにはテキスト情報がなく、コンテンツが読み取られない。どちらも意味がありそうなclass属性を持っているが、機能しない。
			</p>
			<h2>選択したか分からないチェックボックス - 「状態」</h2>
			<p>
				ゼロからHTMLの見た目を作成する方がHTMLの標準のチェックボックスの見た目を変更するよりも効率的かも知らない。しかし、それではセマンティクスが含まれておらず、アクセシビリティが担保されない。以下に標準的なチェックボックスを示す。
			</p>
			<ShowCode code={sourceCode3} />
            <p>
                <code>type=&quot;checkbox&quot;</code>はチェックボックスの役割を持っており、label要素によって同意するのコンテンツと関連付けられ、同意するという名前を持つ。
            </p>
            <p>
                また、チェックボックスがチェックされていると、真偽値を持つ、checked属性が真になり、チェックされている状態であることが分かる。これはスクリーンリーダで読み上げたときに、ラベルの「同意する」、状態の「チェックされている」、役割の「チェックボックス」が読み上げられる。現在の状態が分からなければ目的の操作が出来ないため、「状態」が必要になる。
            </p>
		</div>
	);
};

export default Page;

