import ShowCode from "@/components/showCode";
const Page = () => {
  const text1 = '石炭をば早はや積み果てつ。中等室の卓つくゑのほとりはいと静にて、熾熱燈しねつとうの光の晴れがましきも徒いたづらなり。今宵は夜毎にこゝに集ひ来る骨牌カルタ仲間も「ホテル」に宿りて、舟に残れるは余一人ひとりのみなれば。'

  const text2 = '五年前いつとせまへの事なりしが、平生ひごろの望足りて、洋行の官命を蒙かうむり、このセイゴンの港まで来こし頃は、目に見るもの、耳に聞くもの、一つとして新あらたならぬはなく、筆に任せて書き記しるしつる紀行文日ごとに幾千言をかなしけむ、当時の新聞に載せられて、世の人にもてはやされしかど、今日けふになりておもへば、穉をさなき思想、身の程ほど知らぬ放言、さらぬも尋常よのつねの動植金石、さては風俗などをさへ珍しげにしるしゝを、心ある人はいかにか見けむ。こたびは途に上りしとき、日記にきものせむとて買ひし冊子さつしもまだ白紙のまゝなるは、独逸ドイツにて物学びせし間まに、一種の「ニル、アドミラリイ」の気象をや養ひ得たりけむ、あらず、これには別に故あり。'

  const text3 = 'げに東ひんがしに還かへる今の我は、西に航せし昔の我ならず、学問こそ猶なほ心に飽き足らぬところも多かれ、浮世のうきふしをも知りたり、人の心の頼みがたきは言ふも更なり、われとわが心さへ変り易きをも悟り得たり。きのふの是はけふの非なるわが瞬間の感触を、筆に写して誰たれにか見せむ。これや日記の成らぬ縁故なる、あらず、これには別に故あり。'

  const longLineSpacing = (
    <div>
      <p style={{ lineHeight: 3 }}>{text1}</p>
      <p style={{ lineHeight: 3 }}>{text2}</p>
      <p style={{ lineHeight: 3 }}>{text3}</p>
    </div>
  );
  const shortLineSpacing = (
    <div style={{ backgroundColor: "#eee", padding: "16px" }}>
      <p style={{ lineHeight: 1, margin: 0 }}>{text1}</p>
      <p style={{ lineHeight: 1, margin: 0 }}>{text2}</p>
      <p style={{ lineHeight: 1, margin: 0 }}>{text3}</p>
    </div>
  );
  const goodLineSpacing = (
    <div style={{ backgroundColor: "#eee", padding: "16px", maxWidth: '80ch' }}>
      <p style={{ lineHeight: 1.5, margin: 0, marginTop: '2rem' }}>{text1}</p>
      <p style={{ lineHeight: 1.5, margin: 0, marginTop: '2rem' }}>{text2}</p>
      <p style={{ lineHeight: 1.5, margin: 0, marginTop: '2rem' }}>{text3}</p>
    </div>
  );
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
      <h1>テキストのレイアウト</h1>


      <h2>テキストのレイアウトでアクセシブルにする</h2>
      <h3>適切なレイアウトにすることによる効果</h3>
      <p>アクセシビリティにおいてテキストレイアウトは重要な役割を持ちます。適切なレイアウトにすることで、以下の３つの効果が期待できます。</p>
      <ul>
        <li>テキストを読む速度が速くなる</li>
        <li>テキストの読み間違いがなくなる</li>
        <li>テキストを理解しやすくなる</li>
      </ul>
      <h3>テキストレイアウトのアクセシビリティにおける観点</h3>
      <p>テキストレイアウトのアクセシビリティとして、主に以下の2点を考慮することができます。</p>
      <ul>
        <li>テキストレイアウトをデフォルトで読みやすくする
          <ul>
            <li>多くのユーザがテキストを読みやすくなる</li>
          </ul>
        </li>
        <li>テキストレイアウトをユーザが見やすく上書きできるようにする
          <ul>
            <li>ユーザに合ったレイアウトに変更することで視認性が向上する</li>
            <li>より多くのユーザがテキストを読みやすくなる</li>
          </ul>
        </li>
      </ul>
      <h3>テキストレイアウトに関する達成基準</h3>
      <p>WCAG2.1にはテキストのレイアウトに関する達成基準として以下の2つが設定されています。</p>
      <ul>
        <li>達成基準1.4.8「視覚的掲示」
          <ul>
            <li>コンテンツ制作者がテキストのレイアウトを読みやすくする</li>
            <li>レベルAAA</li>
          </ul>
        </li>
        <li>達成基準1.4.12「テキストの間隔」
          <ul>
            <li>ユーザがテキストの間隔を上書きして可読性を改善できる</li>
            <li>レベルAA</li>
          </ul>
        </li>
      </ul>


      <h2>様々な事例と適切な設定方法</h2>
      <h3>行を適切な長さに抑える</h3>
      <h4>悪い例１；行の間隔が狭すぎる</h4>
      <p>行が長すぎると、今自分が読んでいる位置を把握したり、次の行へ読み進めることが難しくなります。また、行を読むごとに画面を左右に大きくスクロールしなければならず、閲覧に負担がかかります。</p>
      {/* <ShowCode code={longLineSpacing}></ShowCode> */}
      <div style={{ backgroundColor: "#eee", padding: "16px" }}>
        <p style={{ lineHeight: 4 }}>{text1}</p>
        <p style={{ lineHeight: 4 }}>{text2}</p>
        <p style={{ lineHeight: 4 }}>{text3}</p>
      </div>

      <h4>悪い例２：行・段落の間隔が狭すぎる</h4>
      <p>行の間隔が狭すぎると、今読んでいる行に別の行が被って見えてしまったり、同じ行を何度も世みっすめてしまったりします。また、段落の間隔が行の間隔に比べて狭いと、段落ごとのまとまりを認識しずらくなります。これによって、段落の先頭だけを読んで文章の概要を把握しずらくなったり、話題が切り替わるタイミングを誤解したりする可能性があります。
      </p>
      {/* <ShowCode code={shortLineSpacing}></ShowCode> */}

      <div style={{ backgroundColor: "#eee", padding: "16px" }}>
        <p style={{ lineHeight: 1, margin: 0 }}>{text1}</p>
        <p style={{ lineHeight: 1, margin: 0 }}>{text2}</p>
        <p style={{ lineHeight: 1, margin: 0 }}>{text3}</p>
      </div>


      <h4>行の長さを適切にする</h4>
      <p>行は適切な箇所で折り返すようにし、一行を短くしましょう。WCAG2.1の達成基準1.4.8「視覚的掲示」では、幅が80字を超えない(全角の場合は40字付近)ことを求めています。chなどの相対単位を用いることで、文字サイズに追従して行の幅が変更されます。</p>
      {/* <ShowCode code={goodLineSpacing}></ShowCode> */}

      <div style={{ backgroundColor: "#efe", padding: "16px", maxWidth: '80ch' }}>
        <p style={{ lineHeight: 1.5, margin: 0 }}>{text1}</p>
        <p style={{ lineHeight: 1.5, margin: 0, marginTop: '2rem' }}>{text2}</p>
        <p style={{ lineHeight: 1.5, margin: 0, marginTop: '2rem' }}>{text3}</p>
      </div>


      <h3>両端揃えを使わない</h3>
      <div style={{ backgroundColor: "#eee", padding: "16px" }}>
        <p style={{ lineHeight: 1.5, margin: 0, textAlign: "justify" }}>{text1}</p>
      </div>

      <h3>文字の間隔はCSSを使って調整する</h3>
      <div style={{ backgroundColor: "#eee", padding: "16px" }}>
        <span>技　術　評　論　社</span>
      </div>
      <div style={{ backgroundColor: "#efe", padding: "16px" }}>
        <span style={{ letterSpacing: "1rem" }}>技術評論社</span>
      </div>

      <h3>テキストブロックのサイズを可変にする</h3>

      <h3>文字画像は最低限の使用にとどめる</h3>


      <h3>チェックポイント</h3>

    </div>
  );
};

export default Page;

