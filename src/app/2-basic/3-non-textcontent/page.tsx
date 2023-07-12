import React from "react";

const AgreeCheckbox: React.FC = () => {
	return (
		<div>
			<h1>2.3非テキストコンテンツのマシンリーダビリティ</h1>
			<h2>マシンリーダブルとは</h2>
			<p>
				マシンリーダブル（機械可読）であることはアクセシビリティの根幹である。マシンリーダビリティを担保するのはテキストデータとセマンティクスである。
			</p>
			<p>
				テキストデータ以外のデータも画像認識の技術の向上により可能にはなってきているが、正確では無いのでテキストデータが最適と言える。
			</p>
			<br></br>
			<p>
				webアプリケーションを構成するのはテキストデータだけではなく、グラフやチャート、図版や入力のためのUIも非テキストコンテンツである。
				こうしたものに代替テキストを付与することでアプリケーション全体をマシンリーダブルかつアクセシブルにすることが可能である。
			</p>
			<br></br>
			<h2>よくある事例</h2>
			<div>
				<h3>事例１:代替テキストが付与されていない画像</h3>
				<div>
					<h4>悪い例1 代替テキストがないimg要素</h4>
					<div>
						<img src='/image/pic1.svg' />
					</div>

					<p>コード</p>
					<p>&lt;img src=&quot;/image/pic1.svg&quot;/&gt;</p>
					<br></br>
					<p>
						img要素にはalt属性により代替テキストを付与できる。alt属性はスクリーンリーダユーザのためだけでなく次のような利点もある。
					</p>
					<ul>
						<li>・画像検索エンジンがコンテンツを理解する助けになる。</li>
						<li>・画像のリソースの取得に失敗した場合のフォールバックとして機能する。</li>
					</ul>
					<br></br>
					<h4>改善例:画像に代替テキストを付与する</h4>
					<p>
						img要素にはalt属性により代替テキストを付与する。装飾の画像の場合でも、値が空のalt属性をつけることによって装飾であることを伝えられる。
					</p>
					<br></br>
					<p>コード</p>
					<p>&lt;img src=&quot;/image/pic1.svg&quot; alt=&quot;猫&quot;/&gt;</p>
					<br></br>
				</div>
				<div>
					<h4>悪い例2 代替テキストがないsvg要素</h4>
					<div>
						<svg>
							<path d='M0,0 L320,0 320,160 0,160' fill='#3F51B5'></path>
						</svg>
					</div>
					<br></br>
					<p>コード</p>
					<p>
						&lt;svg&gt;<br></br>&lt;path d=&quot;M0,0 L320,0 320,160 0,160&quot;
						fill=&quot;#3F51B5&quot;&gt;&lt;/path&gt;<br></br>&lt;/svg&gt;
					</p>
					<br></br>
					<p>HTML内にsvg要素で画像を表示する際も画像の代替テキストを提供する必要がある。</p>
					<br></br>
					<h4>改善例:svg要素にtitle要素を用いて代替テキストを付与する</h4>
					<p>
						svg要素は現状ブラウザによってアクセシビリティオブジェクトモデルのRole」プロパティの値が変わるため、role=imgを用いてRoleプロパティをimgに固定する。
					</p>
					<br></br>
					<p>コード</p>
					<p>
						&lt;svg role=&quot;img&quot;&gt;<br></br>
						&lt;title&gt;検索&lt;/title&gt;<br></br>
						&lt;path d=&quot;M0,0 L320,0 320,160 0,160&quot; fill=&quot;#3F51B5&quot;&gt;&lt;/path&gt;<br></br>
						&lt;/svg&gt;
					</p>
					<br></br>
					<p>または、直接aria-label属性を用いても良い。</p>
					<br></br>
					<p>コード</p>
					<p>
						&lt;svg role=&quot;img&quot; aria-label=&quot;検索&quot;&gt;<br></br>
						&lt;path d=&quot;M0,0 L320,0 320,160 0,160&quot; fill=&quot;#3F51B5&quot;&gt;&lt;/path&gt;<br></br>
						&lt;/svg&gt;
					</p>
					<br></br>
				</div>
			</div>
			<div>
				<h3>事例２:アクセシブルな名前のないUI</h3>
				<p>
					アクセシブルな名前、つまりアクセシビリティオブジェクトモデルのNameプロパティがないUIは、操作した時に何が起こるか、何を入力するべきかが視覚情報からしかわからない。たとえば代替テキストのないアイコンのみのを使用したボタンは、スクリーンリーダにはボタンであることしか伝わらず、何の操作をすれば良いかがわからない。
				</p>
				<br></br>
				<div>
					<h4>悪い例1 アクセシブルな名前がないボタン</h4>
					<button type='button'>
						<svg width={100} height={40}></svg>
					</button>
					<p>コード</p>
					<br></br>
					<div>
						<p>
							&lt;button type=&quot;button&quot;&gt;<br></br>
							&lt;svg width={100} height={40}&gt;&lt;/svg&gt;<br></br>
							&lt;/button&gt;
						</p>
						<br></br>
					</div>
					<h4>改善例</h4>
					<button type='button'>
						<svg width={100} height={40}></svg>
						追加
					</button>
					<p>コード</p>
					<br></br>
					<p>
						&lt;button type=&quot;button&quot;&gt;<br></br>
						&lt;svg width={100} height={40}&gt;&lt;/svg&gt;<br></br>
						追加<br></br>
						&lt;/button&gt;
					</p>
					<br></br>
					<p>
						最も簡単な方法は、UIとなる要素にテキストを内包させることである。テキストを追加することで、アイコンのみより動作の意味が明確になる。また他言語への翻訳を考えると、最もアクセシブルな方法である。
						<br></br>
						他にも次のような改善例がある。
					</p>
					<br></br>
					<p>コード1 img要素を用いたとき</p>
					<p>
						&lt;button type=&quot;button&quot;&gt;<br></br>
						&lt;img src=&quot;./image/button.svg&quot; alt=&quot;追加&quot;&gt;&lt;/svg&gt;<br></br>
						&lt;/button&gt;
					</p>
					<br></br>
					<p>コード2 svg要素とWAI-AREAを用いたとき</p>
					<p>
						&lt;button type=&quot;button&quot;&gt;<br></br>
						&lt;svg role=&quot;img&quot; aria-label=&quot;追加&quot; width={100} height={40}&gt;&lt;/svg&gt;<br></br>
						&lt;/button&gt;
					</p>
					<br></br>
				</div>
				<div>
					<h4>悪い例2 アクセシブルな名前がない入力欄</h4>
					<div>
						<label>
							<input type='text' />
						</label>
					</div>
					<p>コード</p>
					<br></br>
					<p>
						&lt;label&gt;<br></br>
						&lt;input type=&apos;text&apos;/&gt;<br></br>
						&lt;/label&gt;
					</p>
					<br></br>
					<p>何を入力するべきところなのかが判別できない。</p>
					<br></br>
					<h4>改善例 テキストを内包できない要素にlabel要素を用いてテキストと関連付けする</h4>
					<div>
						<label>
							検索
							<input type='text' />
						</label>
					</div>
					<br></br>
					<p>コード</p>
					<br></br>
					<p>
						&lt;label&gt;<br></br>
						検索<br></br>
						&lt;input type=&apos;text&apos;/&gt;<br></br>
						&lt;/label&gt;
					</p>
				</div>
			</div>
		</div>
	);
};

export default AgreeCheckbox;
