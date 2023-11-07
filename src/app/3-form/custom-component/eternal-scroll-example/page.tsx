

const Page = () => {
  return (
    <div>
      <form method="post">
        <h1>お支払いフォーム</h1>
        <p>必須のフィールドには <strong><span aria-label="required">*</span></strong> が付いています。</p>
        <section>
          <h2>連絡先情報</h2>
          <fieldset>
            <legend>肩書</legend>
            <ul>
              <li>
                <label htmlFor="title_1">
                  <input type="radio" id="title_1" name="title" value="A"/>
                    エース
                </label>
              </li>
              <li>
                <label htmlFor="title_2">
                  <input type="radio" id="title_2" name="title" value="K" />
                    キング
                </label>
              </li>
              <li>
                <label htmlFor="title_3">
                  <input type="radio" id="title_3" name="title" value="Q"/>
                    クイーン
                </label>
              </li>
            </ul>
          </fieldset>
          <p>
            <label htmlFor="name">
              <span>氏名: </span>
              <strong><span aria-label="required">*</span></strong>
            </label>
            <input type="text" id="name" name="username"/>
          </p>
          <p>
            <label htmlFor="mail">
              <span>メールアドレス: </span>
              <strong><span aria-label="required">*</span></strong>
            </label>
            <input type="email" id="mail" name="usermail"/>
          </p>
          <p>
            <label htmlFor="pwd">
              <span>パスワード: </span>
              <strong><span aria-label="required">*</span></strong>
            </label>
            <input type="password" id="pwd" name="password"/>
          </p>
        </section>
        <section>
          <h2>お支払い情報</h2>
          <p>
            <label htmlFor="card">
              <span>カードの種類:</span>
            </label>
            <select id="card" name="usercard">
              <option value="visa">Visa</option>
              <option value="mc">Mastercard</option>
              <option value="amex">American Express</option>
            </select>
          </p>
          <p>
            <label htmlFor="number">
              <span>カード番号:</span>
              <strong><span aria-label="required">*</span></strong>
            </label>
            <input type="tel" id="number" name="cardnumber"/>
          </p>
          <p>
            <label htmlFor="expiration">
              <span>有効期限:</span>
              <strong><span aria-label="required">*</span></strong>
            </label>
            <input type="text" id="expiration" placeholder="MM/YY" pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"/>
          </p>
        </section>
        <section>
          <p> <button type="submit">お支払いを検証</button> </p>
        </section>
      </form>
    </div>
  );

}
export default Page;

