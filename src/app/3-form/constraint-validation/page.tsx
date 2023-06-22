const Page = () => {    
	return (
		<div>
			<h1>制約と検証とエラー</h1>
            <p>
                本節では、ユーザー入力の制約検証とエラー通知方法について説明します。
                エラーはアクセシブルである必要があり、ユーザーにエラー発生を知らせ、
                エラー箇所への到達を確実にし、エラーメッセージとの関係を明確にします。
                また修正方法を理解しやすくする必要があります。
                エラーが起きないフォーム設計や多様な入力値の許容も重要です。
                ユーザーが自分の入力を検証できる仕組みを作り、操作ミスを回避できるようにすることが必要です。
            </p>
            {/* よくある課題1 */}
            <h2>よくある事例を課題を知る</h2>
            <h4>事例1. エラーの発生箇所とエラーメッセージの関係がわかりづらい</h4>
            <p>
                エラー発生箇所とエラーメッセージの関係が分かりにくい場合がある。
                例えば、メッセージと発生箇所が離れていると、特に画面拡大時に両方を同時に確認できず、
                エラー箇所の特定が難しくなる。
            </p>
            <h4>解決策</h4>
            <ul>
                <li>HTML標準の制約検証を利用する</li>
                <li>独自のエラーをわかりやすくエラーする</li>
                <li>独自のエラーをマークアップする</li>
            </ul>
            {/* よくある課題2 */}
            <h4>事例2. 多様なユーザーへエラーを通知する方法を検討していない</h4>
            <p>
            エラー通知方法が多様なユーザーに対応していないと、エラー発生や箇所の理解が困難になることがあります。
            単にエラーを表示するだけでは、スクリーンリーダーや画面拡大を利用するユーザーに適切な通知ができません。
            エラーメッセージが読み上げられなかったり、画面外にあるため見落とす可能性があります。
            </p>
            <h4>解決策</h4>
            <ul>
                <li>エラーが発生したこととエラーの発生箇所をわかりやすく通知する</li>
                <li>送信時にフォームコントロールへフォーカスする</li>
                <li>送信時にエラーサマリーを表示する</li>
                <li>入力時にリアルタイムで検証する</li>
            </ul>
            {/* よくある課題3 */}
            <h4>事例3. エラーの修正方法がわかりにくい</h4>
            <p>
            エラー修正方法がわかりにくい場合、ユーザーはエラーの対処が困難です。
            典型的なパターンは難解なエラー（専門用語や理解できないエラーコード）、
            冗長なエラー（不必要な言葉が含まれ、有益な情報が埋もれる）、
            あいまいなエラー（制限値やフォーマットが明示されていない）です。
            これらのエラーメッセージはユーザーにとって理解しにくく、修正方法がわからないことがあります。
            </p>
            <h4>解決策</h4>
            <ul>
                <li>エラーの修正方法を理解しやすくする</li>
                <li>エラーの修正候補を提案する</li>
            </ul>
            {/* よくある課題4 */}
            <h4>事例4. 必要以上に入力を制約している</h4>
            <p>
            フォーム制約は重要ですが、過剰な制限はユーザー負荷を増やし、入力ミスが発生しやすくなります。
            文字種の制限（全角・半角）やフォーマット制限（電話番号や郵便番号のハイフン有無）は、
            ユーザーが入力に時間がかかる原因となり、効率性を低下させることがあります。
            適切な制約設定が望ましいです。
            </p>
            <h4>解決策</h4>
            <ul>
                <li>入力の制約を最小限にする</li>
            </ul>
            {/* よくある課題5 */}
            <h4>事例5. ユーザー自身が操作を検証する手段がない</h4>
            <p>
            ユーザーが操作を検証できない場合、ミスを回避することが難しくなります。
            例として、決済や削除操作で確認機会が与えられない場合や、意図しない操作で取り消し手段がない場合があります。
            これらの状況はユーザーにとって問題を引き起こす可能性があります。
            </p>
            <h4>解決策</h4>
            <ul>
                <li>ユーザー自身が操作を検証できるようにする</li>
            </ul>
            {/* チェック方法 */}
            <h2>チェック方法</h2>
            <h4>ヒューリスティックなチェック（デザイン時）</h4>

            <ul>
				<li>
					<p>エラーと、エラーの発生箇所を関連付ける</p>
                </li>
                    <p>
                    HTML標準の制約検証を利用することを検討する・エラーをテキストで表現し、エラーの発生箇所の近くに配置する
                    </p>
                <li>
                    <p>エラーの発生を知らせ、エラーの発生箇所に到達させる</p>
                </li>
                    <p>
                    ・画面を視認しているユーザーに、エラーの発生を知らせ、エラーの発生箇所に到達させる方法を検討する<br></br>
                    ・スクリーンリーダーを利用しているユーザーに、エラーの発生を知らせ、エラーの発生箇所に到達させる方法を検討する  
                    </p>
                <li>
                    <p>エラーの修正方法をわかりやすくする</p>
                </li>
                    <p>
                    ・エラーの修正方法が理解しやすいエラーメッセージにする<br></br>
                    ・エラーの修正候補が提示できるときに修正候補を提示する
                    </p>
                <li>
                    <p>入力の制約を必要最小限にする</p>
                </li>
                <li>
                    <p>重要な処理（送金処理・削除処理など）は、以下のいずれかの手段で操作のミスを回避できるようにする</p>
                </li>
                    <p>
                        ・フォームの送信前に、ユーザーが送信内容を確認できる手段を用意する<br></br>
                        ・フォームの送信後に、ユーザーが送信内容を取り消す手段を用意する
                    </p>
			</ul>

            <h4>ヒューリスティックなチェック（実装時）</h4>
            <ul>
				<li>
					<p>
                        エラーを適切にマークアップする
                    </p>
                </li>
                <p>
                ・エラーが発生したフォームコントロール<br></br>
                ・グループにariainvalid="true"を付ける<br></br>
                ・エラーメッセージをフォームコントロールに関連付ける（エラーメッセージをlabel要素に含めるか、ariadescribedby属性で関連付ける）<br></br>
                ・エラーメッセージをグループに関連付ける（エラーメッセージをlegend要素に含めるか、ariadescribedby属性で関連付ける）
                </p>
                <li>
					<p>
                        エラーを通知する
                    </p>
                </li>
                <p>
                ・送信時にエラーが発生するときに発生した箇所やエラーサマリーにフォーカスを移動させる <br></br>
                ・入力時にエラーが発生するときはarialive属性を利用する
                </p>
            </ul>
		</div>
	);
};

export default Page;
