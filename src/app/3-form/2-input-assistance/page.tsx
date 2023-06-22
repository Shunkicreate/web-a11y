"use client";
import ShowCode from "@/components/showCode";
import { renderToString } from "react-dom/server";
const Page = () => {
	const OneFormControl = `
<form action="">
	<div>
		<label htmlFor="name">名前: <br>
			<input type="text" id="name" name="name" autoComplete="name" />
		</label>
	</div>
	<div>
		<label htmlFor="email">e-mail: <br>
			<input type="email" id="email" name="email" autoComplete="email" />
		</label>
	</div>
	<div>
		<label htmlFor="tel">電話番号: <br>
			<input type="text" id="tel" name="tel" autoComplete="tel" />
		</label>
	</div>
	<div>
		<label htmlFor="ccnumber">クレジットカード番号: <br>
			<input type="text" id="ccnumber" name="ccnumber" autoComplete="cc-number" />
		</label>
	</div>
	</form>
	`;
	const BadAutoFormInput = `
<form>
	<div>
		<label>クレジットカード名義: 
			<input type="text" name="credit-name" />
		</label>
	</div>
	<div>
		<label>クレジットカード番号: 
			<input type="text" name="credit-number" />
		</label>
	</div>
</form>
	`;
	const GoodAutoFormInput = `
<form>
	<div>
		<label htmlFor="name">名前: <br>
			<input type="text" id="name" name="name" autoComplete="name" />
		</label>
	</div>
	<div>
		<label htmlFor="email">メールアドレス: <br>
			<input type="email" id="email" name="email" autoComplete="email"/>
		</label>
	</div>
	<div>
		<label htmlFor="username">ユーザー名またはアカウント名: <br>
			<input type="text" id="username" name="username" autoComplete="username"/>
		</label>
	</div>
	<div>
		<label htmlFor="new-password">新しいパスワード: <br>
			<input type="password" id="new-password" name="new-password" autoComplete="new-password"/>
		</label>
	</div>
	<div>
		<label htmlFor="current-password">ユーザーの現在のパスワード: <br>
			<input type="password" id="current-password" name="current-password" autoComplete="current-password"/>
		</label>
	</div>
	<div>
		<label htmlFor="one-time-code">ユーザー自身を確認するために使われるワンタイムコード: <br>
			<input type="text" id="one-time-code" name="one-time-code" autoComplete="one-time-code"/>
		</label>
	</div>
	<div>
		<label htmlFor="organization-title">職名や組織内の肩書: <br>
			<input type="text" id="organization-title" name="organization-title" autoComplete="organization-title"/>
		</label>
	</div>
	<div>
		<label htmlFor="organization">企業または団体の名前: <br>
			<input type="text" id="organization" name="organization" autoComplete="organization"/>
		</label>
	</div>
	<div>
		<label htmlFor="street-address">住所: <br>
			<input type="text" id="street-address" name="street-address" autoComplete="street-address"/>
		</label>
	</div>
	<div>
		<label htmlFor="address-level1">住所がある都道府県: <br>
			<input type="text" id="address-level1" name="address-level1" autoComplete="address-level1"/>
		</label>
	</div>
	<div>
		<label htmlFor="address-level2">市町村や、住所のあるその他の地域: <br>
			<input type="text" id="address-level2" name="address-level2" autoComplete="address-level2"/>
		</label>
	</div>
	<div>
		<label htmlFor="address-level3">3段階の行政レベルがある住所において、3番目の行政レベル: <br>
			<input type="text" id="address-level3" name="address-level3" autoComplete="address-level3"/>
		</label>
	</div>
	<div>
		<label htmlFor="address-level4">住所が4段階まである場合のもっとも細かい行政レベル: <br>
			<input type="text" id="address-level4" name="address-level4" autoComplete="address-level4"/>
		</label>
	</div>
	<div>
		<label htmlFor="country">国コード: <br>
			<input type="text" id="country" name="country" autoComplete="country"/>
		</label>
	</div>
	<div>
		<label htmlFor="country-name">国名: <br>
			<input type="text" id="country-name" name="country-name" autoComplete="country-name"/>
		</label>
	</div>
	<div>
		<label htmlFor="postal-code">郵便番号: <br>
			<input type="text" id="postal-code" name="postal-code" autoComplete="postal-code"/>
		</label>
	</div>
	<div>
		<label htmlFor="cc-name">クレジットカード名義: <br>
			<input type="text" id="cc-name" name="cc-name" autoComplete="cc-name"/>
		</label>
	</div>
	<div>
		<label htmlFor="cc-number">クレジットカード番号: <br>
			<input type="text" id="cc-number" name="cc-number" autoComplete="cc-number"/>
		</label>
	</div>
	<div>
		<label htmlFor="cc-exp">支払手段の有効期限: <br>
			<input type="text" id="cc-exp" name="cc-exp" autoComplete="cc-exp"/>
		</label>
	</div>
	<div>
		<label htmlFor="bday">生年月日: <br>
			<input type="text" id="bday" name="bday" autoComplete="bday"/>
		</label>
	</div>
	<div>
		<label htmlFor="sex">性別: <br>
			<input type="text" id="sex" name="sex" autoComplete="sex"/>
		</label>
	</div>
	<div>
		<label htmlFor="tel">国番号を含む、完全な電話番号: <br>
			<input type="tel" id="tel" name="tel" autoComplete="tel"/>
		</label>
	</div>
	<div>
		<label htmlFor="url">URL: <br>
			<input type="url" id="url" name="url"/>
		</label>
	</div>
	<div>
		<label htmlFor="photo">フォームの他のフィールドの文脈における人物、企業、連絡先情報を表す画像のURL:
			<input type="text" id="photo" name="photo" autoComplete="photo"/>
		</label>
	</div>
</form>
	`;
	const BadFormControl = `
	<label>
		商品の色（青・緑・黄・赤のいずれかを入力してください）
		<input type="text" />
	</label>
`;
	const FormType = `
		<form>
			<div>
				<label htmlFor="button">button:
				<input type="button" id="button" style="width:3rem;"/>
				</label>
			</div>
			<div>
				<label htmlFor="checkbox">checkbox:
				<input type="checkbox" id="checkbox"/>
				</label>
			</div>
			<div>
				<label htmlFor="date">date:
				<input type="date" id="date"/>
				</label>
			</div>
			<div>
				<label htmlFor="datetime-local">datetime-local:
				<input type="datetime-local" id="datetime-local"/>
				</label>
			</div>
			<div>
				<label htmlFor="email">email:
				<input type="email" id="email"/>
				</label>
			</div>
			<div>
				<label htmlFor="file">file:
				<input type="file" id="file"/>
				</label>
			</div>
			<div>
				<label htmlFor="hidden">hidden:
				<input type="hidden" id="hidden"/>
				</label>
			</div>
			<div>
				<label htmlFor="image">image:
				<input type="image" id="image"/>
				</label>
			</div>
			<div>
				<label htmlFor="month">month:
				<input type="month" id="month"/>
				</label>
			</div>
			<div>
				<label htmlFor="number">number:
				<input type="number" id="number"/>
				</label>
			</div>
			<div>
				<label htmlFor="password">password:
				<input type="password" id="password"/>
				</label>
			</div>
			<div>
				<label htmlFor="radio">radio:
				<input type="radio" id="radio"/>
				</label>
			</div>
			<div>
				<label htmlFor="range">range:
				<input type="range" id="range"/>
				</label>
			</div>
			<div>
				<label htmlFor="reset">reset:
				<input type="reset" id="reset"/>
				</label>
			</div>
			<div>
				<label htmlFor="submit">submit:
				<input type="submit" id="submit"/>
				</label>
			</div>
			<div>
				<label htmlFor="text">text:
				<input type="text" id="text"/>
				</label>
			</div>
			<div>
				<label htmlFor="time">time:
				<input type="time" id="time"/>
				</label>
			</div>
			<div>
				<label htmlFor="url">url:
				<input type="url" id="url"/>
				</label>
			</div>
			<div>
				<label htmlFor="week">week:
				<input type="week" id="week"/>
				</label>
			</div>
		</form>
	`;

	const inputType = `
		<div>
			<form>
				<div>
					<label htmlFor='inputTypeDecimal'>decimal</label>
					<br />
					<input type='text' id='inputTypeDecimal' />
				</div>
				<div>
					<label htmlFor='inputTypeEmail'>email</label>
					<br />
					<input type='email' id='inputTypeEmail' />
				</div>
				<div>
					<label htmlFor='inputTypeNumeric'>numeric</label>
					<br />
					<input type='text' id='inputTypeNumeric' />
				</div>
				<div>
					<label htmlFor='inputTypeSearch'>search</label>
					<br />
					<input type='search' id='inputTypeSearch' />
				</div>
				<div>
					<label htmlFor='inputTypeTel'>tel</label>
					<br />
					<input type='tel' id='inputTypeTel' />
				</div>
				<div>
					<label htmlFor='inputTypeUrl'>url</label>
					<br />
					<input type='url' id='inputTypeUrl' />
				</div>
			</form>
		</div>
	`;

	const inputMode = `
		<div>
			<form>
				<div>
					<label htmlFor='inputModeDecimal'>decimal</label>
					<br />
					<input type='text' id='inputModeDecimal' inputMode='decimal' />
				</div>
				<div>
					<label htmlFor='inputModeEmail'>email</label>
					<br />
					<input type='email' id='inputModeEmail' inputMode='email' />
				</div>
				<div>
					<label htmlFor='inputModeNumeric'>numeric</label>
					<br />
					<input type='text' id='inputModeNumeric' inputMode='numeric' />
				</div>
				<div>
					<label htmlFor='inputModeSearch'>search</label>
					<br />
					<input type='search' id='inputModeSearch' inputMode='search' />
				</div>
				<div>
					<label htmlFor='inputModeTel'>tel</label>
					<br />
					<input type='tel' id='inputModeTel' inputMode='tel' />
				</div>
				<div>
					<label htmlFor='inputModeUrl'>url</label>
					<br />
					<input type='url' id='inputModeUrl' inputMode='url' />
				</div>
			</form>
		</div>
	`;

	const limitInput = `
		<div>
			<input type="range" min="10" max="100" step="10">
		</div>
	`

	const listBox = `
		<div>
			<label>
				都道府県
				<select>
					<option value="" selected>未選択</option>
					<option value="北海道">北海道</option>
					<option value="青県森">青森県</option>
					<option value="秋田県">秋田県</option>
					<option value="山形県">山形県</option>
					<option value="岩手県">岩手県</option>
					<option value="福島県">福島県</option>
				</select>
			</label>
		</div>
	`

	const comboBox = `
		<div>
			<label>
				都道府県
				<input type="text" list="prefecture-list" />
				<datalist id="prefecture-list">
					<option value="北海道">北海道</option>
					<option value="青県森">青森県</option>
					<option value="秋田県">秋田県</option>
					<option value="山形県">山形県</option>
					<option value="岩手県">岩手県</option>
					<option value="福島県">福島県</option>
				</datalist>
			</label>
		</div>
	`

	return (
		<div>
			<h1>入力の支援</h1>
			<p>入力はユーザに負荷をかける操作である。そのため、支援が必要である。入力支援として主に以下の3つの方法がある。</p>
			<ul>
				<li>入力を求めないこと</li>
				<li>入力を自動補完すること</li>
				<li>入力しやすいフォームコントロールにすること</li>
			</ul>
			<p>それでは具体例とともに改善方法を見ていく。</p>
			<h2>必要以上に入力を求めている</h2>
			<p>ユーザに対して必要以上に入力を求めている場合がある。</p>
			<ul>
				<li>一つのフォームに対してフォームコントロールが多すぎる</li>
				<li>システム上重要でないフォームコントロール</li>
				<li>直ちに入力が必要でない項目</li>
			</ul>
			<p>入力に時間が多くかかるユーザにとってこれらのフォームは深刻な問題である。</p>
			<h3>改善策 -入力項目を最小限に-</h3>
			<p>
				まず、入力が必要かどうか検討すべき。不必要な項目は削除すべきであり、後から入力するので良ければ後回しにすべき。
				<br />
				また、必須項目の内容も検討し、出来るだけ任意項目にするべきである。そうすることでユーザ（特に入力に時間のかかる方）が大きな恩恵を受けられる。
			</p>
			<h2>一つの入力値を表すフォームコントロールが分割されている</h2>
			<p>一つの入力値を表すフォームコントロールが分割されている場合がある。</p>
			<ul>
				<li>姓と名</li>
				<li>メールアドレスの@の前後</li>
				<li>電話番号の市外局番・市内局番・加入者番号</li>
				<li>クレジットカードのハイフンで区切られた4つのフォーム</li>
			</ul>
			<p>
				これらのような事例があると、様々な場面で障害が発生する。マシンリーダビリティ的視点ではブラウザによる自動補完が効きにくくなる。autoComplete属性が正常に働かないため、自動補完が効きにくい。また、ユーザ視点では、コピー&ペーストをすることが難しくなる。また、ミドルネームを入力するときに姓と名のどちらに含めるべきか分からない。
			</p>
			<h3>改善策 -一つの入力値を表すフォームコントロールをまとめる-</h3>
			<p>以下の入力値を表すフォームコントロールは一つにまとめて、autoComplete属性をつける。</p>
			<ul>
				<li>名前</li>
				<li>メールアドレス</li>
				<li>電話番号</li>
				<li>クレジットカード番号</li>
			</ul>
			<p>下に実装例を示す</p>
			<ShowCode code={OneFormControl}></ShowCode>
			<h2>ブラウザによる自動補完が使えない</h2>
			<p>
				多くのブラウザはユーザが過去に入力した情報を自動補完する。さらに、周辺の入力欄に対しても自動で入力してくれる。先に自動補完が機能しない悪い例を示す。
			</p>
			<h3>悪い例: 自動補完が機能しないフォーム</h3>
			<p>下に悪い実装例を示す</p>
			<ShowCode code={BadAutoFormInput}></ShowCode>
			<p>入力値が自動補完されないと以下のような負荷がかかる。</p>
			<ul>
				<li>ユーザが入力値を思い出す負荷</li>
				<li>手入力する負荷</li>
			</ul>
			<h3>改善策 -自動補完できるようにマークアップする-</h3>
			<p>先ほど同様にautoComplete属性を付ける。ただし、以下の2点に気を付ける。</p>
			<ul>
				<li>フォームコントロールをform要素で囲う</li>
				<li>autoComplete属性とともにname属性にも適切な値を設定する必要がある</li>
			</ul>
			<ShowCode code={GoodAutoFormInput}></ShowCode>
			<h2>入力値の種類に対して適切な入力タイプが選択されていない</h2>
			<p>
				フォームコントロールには入力値の種類によって入力タイプに応じたUIを表示できる。入力するときに本来許可されない種類の入力値が入力出来たり、数値の入力が行いやすくなるため、適切な入力タイプを選ぶ必要がある。
			</p>
			<h3>改善策 -入力値の種類に応じてタイプを指定する-</h3>
			<p>入力値の種類に応じてタイプを指定することで入力のしやすさを改善できる．以下がタイプ指定の例である．</p>
			<ShowCode code={FormType}></ShowCode>
			<p>ここからはまにあいませんでした。。。。。。</p>
			<ShowCode code={inputType}></ShowCode>
			<ShowCode code={inputMode}></ShowCode>
			<ShowCode code={limitInput}></ShowCode>
			<h2>選択肢のある入力値に対して適切なフォームコントロールが選択されていない</h2>
			<p>
				入力値が限定された値のうちの一つであるにもかかわらず，自由入力形式のフォームコントロールが使われている場合がある．例えば以下のような例がある．
			</p>
			<ShowCode code={BadFormControl}></ShowCode>
			上記の例のように値を自由に入力出来てしまうと想定された選択肢以外の値を入力出来たり，入力ミスが起きたりする．視線の動きや頭部の動きによって操作を行う運動障害のあるユーザにとっては手入力が大きなコストになる．障害のあるユーザを含めて多くのユーザが正しい選択肢を選びやすくなるように適切なフォームコントロールを選ぶ必要がある．
			<ShowCode code={listBox}></ShowCode>
			<ShowCode code={comboBox}></ShowCode>
		</div>
	);
};

export default Page;
