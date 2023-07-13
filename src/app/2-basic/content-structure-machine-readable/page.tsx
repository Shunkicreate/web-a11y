import ShowCode from "@/components/showCode";

const Page = () => {

  return (
    <div>
      <h1>コンテンツ構造のマシンリーダビリティ</h1>
      <h2>コンテンツ構造のマシンリーダビリティ</h2>
      <p>コンテンツそれ単体のみならず、コンテンツとコンテンツの間の関係性も情報である。このコンテンツとコンテンツの間の関係性＝構造にもアクセスできる必要がある。</p>
      <p>コンテンツ構造には下記のようなものがある。</p>
      <ul>
        <li>
          表は各セルに行と列の2つの集合との関係性を示す。
        </li>
        <li>
          見出しやキャプションは構造の名前を示したり説明を提供したりする。
        </li>
      </ul>
      <h3>見出しとデータテーブルの例</h3>
      <p>図2-4-1は業務アプリケーションにおける従業員一覧の構造を図解したものである。見出しによってこれらのコンテンツが従業員一覧であることが示され、従業員が持つ情報は行でグルーピングされている。この構造によって、「<time dateTime="1985-1-1">1985/1/1</time>」という情報が生年月日であり、社員番号「000104」が持つ情報であることが示される。</p>
      <p>この表では、見出しの文字が太かったり、列ごとの水平方向の線があったり、構造を正しく理解するための視覚的な手がかりがあるが、それだけだとスクリーンリーダーを利用しているユーザーには社員番号「000104」の生年月日を把握できないだろう。</p>
      <table>
        <caption>図2-4-1  従業員一覧</caption>
        <thead>
          <tr>
            <th>社員番号</th>
            <th>姓</th>
            <th>名</th>
            <th>姓(カタカナ)</th>
            <th>名(カタカナ)</th>
            <th>生年月日</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>000111</td>
            <td>草野</td>
            <td>栄一郎</td>
            <td>クサノ</td>
            <td>エイイチロウ</td>
            <td><time dateTime="1971-3-1">1971/3/1</time></td>
          </tr>
          <tr>
            <td>000110</td>
            <td>岩下</td>
            <td>香澄</td>
            <td>イワシタ</td>
            <td>カスミ</td>
            <td><time dateTime="1985-1-1">1985/1/1</time></td>
          </tr>
          <tr>
            <td>000109</td>
            <td>島袋</td>
            <td>月代</td>
            <td>シマブクロ</td>
            <td>ツキヨ</td>
            <td><time dateTime="1980-1-1">1980/1/1</time></td>
          </tr>
          <tr>
            <td>000108</td>
            <td>永山</td>
            <td>侑太郎</td>
            <td>ナガヤマ</td>
            <td>ユウタロウ</td>
            <td><time dateTime="1984-4-4">1984/4/4</time></td>
          </tr>
          <tr>
            <td>000107</td>
            <td>上原</td>
            <td>玲子</td>
            <td>ウエハラ</td>
            <td>レイコ</td>
            <td><time dateTime="1985-5-5">1985/5/5</time></td>
          </tr>
        </tbody>
      </table>

      <p>HTMLには、構造をマシンリーダブルにするセマンティクスが存在する。HTMLを正しく用いることで構造をマシンリーダブルにし、アクセシブルにすることができる。</p>
    </div>
  );
};

export default Page;