import ShowCode from "@/components/showCode"

const Index = () => {
    const labelExpressPlaceHolder = `
    <input style="width: 300px"type="text" placeholder="ここにテキストを入力してください">
`;
const labelafterlaceHolder = `
<div>
    <label for="userform">ユーザ名</label> 
    <br/>
    <input type="text" id="username">
    <br/>
    <span id="description">(半角英数字で入力)</span>
</div>`;

    return(
        <div>
        <h1>ラベルと説明</h1>
        {/* キーボードのa11yとは */}
        <h2>ラベルと説明はユーザーがフォームをコントロールする際に重要</h2>
        <h4>ラベル</h4>
        <ul>
            <li>
                <p>ラベルはユーザーが認識できる文言</p> 
                <p>ラベルによってフォームの目的がわkるはユーザーが認識できる文言</p> 
            </li>
        </ul>
        <h4>説明</h4>
        <ul>
            <li>
                <p>フォームの入力規則やフォームのラベルで説明できない点を説明する</p>
            </li>
        </ul>
        {/* キーボードの辛さとは */}
        <h2  style={{marginTop: 40}}>悪い事例一覧</h2>
        <p>プレスホルダーでラベルを表している</p>
        <ShowCode code={labelExpressPlaceHolder}></ShowCode>
        <h3>問題点</h3>
        <ul>
            <li>
                <h3>プレスホルダーの色薄く視認しずらい</h3> 
                <p>原因:  プレスホルダーは色が薄い色が使われる</p> 
            </li>
            <li>
                <h3>プレスホルダーとフォームコントローラーの値の区別がつかない</h3> 
                <p>薄い色を濃い色に変えて上の問題を解決しようとした時に入力値と勘違いされてしまう</p> 
            </li>
            <li>
                <h3>フォームコントローラーに値を入力したときにプレスホルダーの値が見えなくなってしまう</h3> 
                <p>入力するべき値がわからなくなる</p> 
            </li>
        </ul>
        <h3>問題点</h3>
        <ul>
            <li>
                <h3>プレスホルダーの色薄く視認しずらい</h3> 
                <p>原因:  プレスホルダーは色が薄い色が使われる</p> 
            </li>
            <li>
                <h3>プレスホルダーとフォームコントローラーの値の区別がつかない</h3> 
                <p>薄い色を濃い色に変えて上の問題を解決しようとした時に入力値と勘違いされてしまう</p> 
            </li>
            <li>
                <h3>フォームコントローラーに値を入力したときにプレスホルダーの値が見えなくなってしまう</h3> 
                <p>入力するべき値がわからなくなる</p> 
            </li>
        </ul>
        <h2  style={{marginTop: 80}}>説明がフォームの後に配置されている</h2>
        <ShowCode code={labelafterlaceHolder}></ShowCode>
        <h3>問題点</h3>
        <ul>
            <li>
                <h3>説明の存在に気づかず入力し始める</h3> 
            </li>
        </ul>
        {/* よくある事例 */}



        <h2  style={{marginTop: 40}}>フォームコントロールにラベルと説明が関連付けられてない</h2>
        <p>スクリーンリーダーはフォームコントロールに関連付けられた情報を読み上げる</p>
        {/* 事例1 */}

        <h2 style={{marginTop: 40}}>入力必須の説明をしていない</h2>
        <label htmlFor="username">ユーザ名<span style={{color: 'red'}}>*</span></label>
        <br/>
        <input type="text" id="username" name="username" required></input>
        <h3>問題点</h3>
        <ul>
            <li>
                <h3>米印の意味を理解していないユーザーがいる</h3> 
                <p>原因:  プレスホルダーは色が薄い色が使われる</p> 
            </li>
        </ul>
      
        {/* まとめ */}
        <h2>まとめ</h2>
        <h3>キーボードで操作することを前提に考える</h3>
        <p>create by naruogram</p>
    </div>
    )
}

export default Index