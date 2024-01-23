"use client";
import ShowCode from "@/components/showCode";
import { useEffect, useRef, useState } from "react";
import "./style.css";

const Page = () => {
	const simpleToolTip = (
		<div>
			<a href='/5-complicated-ui/4-simple-tool-tip' title='これがツールチップだよ'>
				このページへのリンクだよー
			</a>
		</div>
	);
	const ToolTipSample = () => {
		const [isToolTipVisible, setIsToolTipVisible] = useState(false);
		return (
			<span className='withToolTip'>
				<a href='' onMouseEnter={() => setIsToolTipVisible(true)} onMouseLeave={() => setIsToolTipVisible(false)}>
					このページへのリンク
				</a>
				{isToolTipVisible && <span className='ToolTip'>これがツールチップだよ</span>}
			</span>
		);
	};

	const ScreenAndKeybordToolTip = () => {
		// ツールチップの表示状態を保持するstate
		const [isTooltipVisible, setTooltipVisible] = useState(false);
		// setTimeoutの戻り値を保持するためのRefObject
		const timeoutId = useRef<NodeJS.Timeout | null>();

		// 1秒後にisToolTipVisibleを切り替えるメソッド
		const changeVisibility = (visible: boolean, immidiate: boolean = false) => {
			if (timeoutId.current) {
				// 事前に予定されているフラグ切り替えをキャンセル
				clearTimeout(timeoutId.current);
				timeoutId.current = null;
			}
			if (immidiate) {
				setTooltipVisible(visible);
			} else {
				timeoutId.current = setTimeout(() => {
					setTooltipVisible(visible);
				}, 500);
			}
		};

		useEffect(() => {
			// ツールチップが表示されている場合のみ
			if (isTooltipVisible) {
				// Escキーが押下された場合には、ツールチップを非表示にする
				const escKeyHandler = (e: KeyboardEvent) => {
					if (e.key === "Escape") {
						changeVisibility(false, true);
					}
				};
				// 関係のない場所にフォーカスしていても処理されるよう、windowに対してaddEventListenerする
				window.addEventListener("keydown", escKeyHandler);
				// isTooltipVisibleの値が変わったりコンポーネントがアンマウントされる場合にはremoveEventListenerする
				return () => window.removeEventListener("keydown", escKeyHandler);
			}
		}, [isTooltipVisible]);

		return (
			<span className='withTooltipSolved'>
				<a
					href='/5-complicated-ui/4-simple-tool-tip'
					// mouseenter, mouseleaveから1秒後に表示・非表示を切り替える
					onMouseEnter={() => changeVisibility(true)}
					onMouseLeave={() => changeVisibility(false)}
					// フォーカスのイベント時にはすぐに表示・非表示を切り替える
					onFocus={() => changeVisibility(true, true)}
					onBlur={() => changeVisibility(false, true)}
				>
					このページへのリンク
				</a>
				{isTooltipVisible && (
					<span
						className='tooltipSolved'
						// ツールチップ側でもmouseenter, mouseleaveから1秒後に表示・非表示を切り替える
						onMouseEnter={() => changeVisibility(true)}
						onMouseLeave={() => changeVisibility(false)}
					>
						これがツールチップだよ
					</span>
				)}
			</span>
		);
	};

	const HelpIcon = () => {
		// ツールチップの表示状態を保持するstate
		const [isTooltipVisible, setTooltipVisible] = useState(false);
		// setTimeoutの戻り値を保持するためのRefObject
		const timeoutId = useRef<NodeJS.Timeout | null>();

		// 1秒後にisToolTipVisibleを切り替えるメソッド
		const changeVisibility = (visible: boolean, immidiate: boolean = false) => {
			if (timeoutId.current) {
				// 事前に予定されているフラグ切り替えをキャンセル
				clearTimeout(timeoutId.current);
				timeoutId.current = null;
			}
			if (immidiate) {
				setTooltipVisible(visible);
			} else {
				timeoutId.current = setTimeout(() => {
					setTooltipVisible(visible);
				}, 1000);
			}
		};

		useEffect(() => {
			if (isTooltipVisible) {
				// ツールチップ外のクリックで、ツールチップを即時に閉じる
				const close = () => {
					changeVisibility(false, true);
				};
				// Escキー押下でもツールチップを閉じる
				const escKeyHandler = (e: KeyboardEvent) => {
					if (e.key === "Escape") {
						changeVisibility(false, true);
					}
				};
				window.addEventListener("click", close);
				window.addEventListener("keydown", escKeyHandler);
				return () => {
					window.removeEventListener("click", close);
					window.removeEventListener("keydown", escKeyHandler);
				};
			}
		}, [isTooltipVisible]);

		return (
			<>
				{/* windowにaddEventListenerしたclickイベントが発火しないよう、伝播を止めておく */}
				<a href='https://gihyo.jp/'>技術評論社のWebサイト</a>
				<span className='withHelpIconTooltip' onClick={(e) => e.stopPropagation()}>
					<button
						type='button'
						className='button'
						onMouseEnter={() => changeVisibility(true)}
						onMouseLeave={() => changeVisibility(false)}
						onClick={(e) => {
							changeVisibility(!isTooltipVisible, true);
						}}
						aria-label='ヘルプ'
						aria-haspopup='true'
						aria-expanded={isTooltipVisible}
						aria-controls='HelpIconTooltip'
					>
						<div className='icon'>icon</div>
					</button>
					{isTooltipVisible && (
						<span
							id='HelpIconTooltip'
							className='HelpIconTooltip'
							onMouseEnter={() => changeVisibility(true)}
							onMouseLeave={() => changeVisibility(false)}
							tabIndex={-1}
						>
							この本を出版している会社のWebサイト
						</span>
					)}
				</span>
			</>
		);
	};

	const ariaDescribedBy = (
		<div>
			<label htmlFor='username-input'>ユーザ名</label>
			<span className='tooltip' id='tooltip' role='tooltip'>
				半角英数字で入力
			</span>
			<input type='text' id='username-input' aria-describedby='tooltip' />
		</div>
	);

	return (
		<div>
			<h1>シンプルなツールチップ</h1>
			<p>
				ここでいうツールチップとは、特定の場所にマウスオーバーすることによってマウスポインタ付近に表示されるものを指す。
			</p>
			<h2>シンプルなツールチップの例と問題点</h2>
			<p>最も簡単なツールチップはtitle属性を使用するものである。title属性は以下のように記述する。</p>
			<ShowCode code={simpleToolTip} />
			<p>
				しかし、これにはいくつかの問題点がある。ツールチップが表示されるタイミングを制御したり、見た目を変えたり、多機能化できない。簡単にReactで実装した例を見てみる。
			</p>
			<ShowCode code={ToolTipSample()} />
			<p>この例では以下のような問題点がある。</p>
			<ul>
				<li>画面拡大時にツールチップを読めない</li>
				<li>キーボード操作ではツールチップを読めない</li>
				<li>スマートフォンやタブレットではツールチップに気づかない</li>
				<li>スクリーンリーダではツールチップに気が付かない</li>
			</ul>
			<p>それでは本節では一つ一つの問題点を解決していく。</p>
			<h2>画面拡大、キーボード操作での課題と改善</h2>
			<h3>【課題】画面を拡大しているユーザがツールチップを読めない</h3>
			<p>
				ツールチップが一部のみ表示されている場合、ユーザはそのツールチップを読むためにツールチップに対してカーソルを合わせようとする。しかし、それではツールチップが消えるため、ツールチップを読むことができない。そうならないために、ツールチップを表示するときにはカーソルがツールチップに乗っていてもツールチップを消さないようにする必要がある。
			</p>
			<h3>【課題】キーボード操作でツールチップを読めない</h3>
			<p>
				通常、ツールチップはマウスオーバーによって表示するため、キーボード操作ではツールチップを表示することができない。そのため、ツールチップを表示するためのキーボード操作を用意する必要がある。それを実装するために、フォーカスが当たったときにツールチップを表示するようにする。
			</p>
			<h3>【課題】画面拡大時にツールチップの下に隠れてしまったコンテンツを読めない</h3>
			<p>
				ツールチップは他の要素の上に被さるように表示されるため、読みたいコンテンツの上にツールチップが表示されてしまうことがある。そこで、エスケープキーを押すことでツールチップを消すことができるようにする。ただし、ツールチップを消すときにフォーカスツールチップに対して当たっているとは限らない。そこで、今回の実装例では、windowに対してaddEventListenerを使って、キーの押下を監視している。
			</p>
			<p>これまでの課題を解決するために、以下のような実装を行った。</p>
			<ShowCode code={ScreenAndKeybordToolTip()} />
			<h2>スマートフォン、スクリーンリーダでの課題と解決</h2>
			<p>
				ここまでのツールチップではマウスオーバーによるツールチップの表示がなされていたため、スマートフォンやタブレットユーザのほとんどが利用できません。このようにマウスオーバーやキーボードによるフォーカスを前提にしている場合、様々な課題が生まれる。
			</p>
			<ul>
				<li>スマートフォンやタブレットのユーザがツールチップに気づかない</li>
				<li>スクリーンリーダのユーザがツールチップに気づかない、読めない</li>

				<li>正確なマウス操作が出来ない場合、上手くツールチップを表示できない</li>
				<li>マウスオーバーで画面全体が埋まってしまったり、意図せずマウスオーバーが外れてツールチップを消してしまう</li>
				<li>
					滞留コントロール、音声コントロール、スイッチコントロールにおいて、「カーソル移動→クリック」がセットになったアクションを実行するため、予測しないツールチップが選択され、意図と違いものをクリックしてしまう
				</li>
			</ul>
			<p>
				そもそもマウスオーバーという操作方法に依存すべきではない。そのため、以下ではマウスオーバーに依存しない解決策を考える。
			</p>
			<h3>ツールチップを使用しない</h3>
			<p>
				アクセシビリティを念頭に置いて画面設計するのであれば、ツールチップは避けるべきである。HTMLの仕様書では、title属性についてアクセシビリティの問題を指摘し、title属性に依存することは推奨されないとされている。他にも、ツールチップが自明なことを表示している場合、そのツールチップは不用である。テキストではなく、アイコンだけ表示しているボタンでアイコンの意味をツールチップで表示するケースでは、ツールチップが無くても意味が伝わるアイコンにすることを検討する。それが出来なければ、注釈などを常に表示することを検討する。
			</p>
			<h3>補助的なコンテンツと位置づける</h3>
			<p>
				ツールチップを補助的なコンテンツとしてアプリケーションのUX改善のためのものと割り切るのも1つの手段である。そのコンテンツにフォーカスするための他の手段があればアクセシビリティ的には問題ない。例えば、リンクにマウスオーバーしたときにプレビューが表示されるデザインがあるとする。その時、リンクにキーボードでフォーカスを当てると同様の動作が出来れば問題ない。また、遷移先の画面と現在のページを自由に行き来できればさらに問題の度合いは低下する。
			</p>
			<h3>aria-descrivedby属性を利用する</h3>
			<p>
				入力フィールドを対象にしたツールチップであれば、ユーザが自然にツールチップの存在に気づくことが出来ます。また、aria-describedby属性を利用することで、スクリーンリーダでもツールチップに対してフォーカスを当てられます。
			</p>
			<ShowCode code={ariaDescribedBy} />
			<h3>ツールチップ専用のボタンコンポーネントを利用する</h3>
			<p>コンポーネントを作ることで、以下のようなことが出来るようになります。</p>
			<ul>
				<li>ツールチップが出てきそうなアイコンを利用してユーザにツールチップの存在を仄めかせられる</li>
				<li>クリックのアクションにツールチップのオンオフ機能を持たせられる</li>
				<li></li>
			</ul>
			<ShowCode code={HelpIcon()} />
		</div>
	);
};

export default Page;

