import ShowCode from "@/components/showCode";
const Page = () => {
	const OneFormControl = `
<form action=''>
	<div>
		<label htmlFor='name'>名前: <br/>
			<input type='text' id='name' name='name' autoComplete='name' />
		</label>
	</div>
	<div>
		<label htmlFor='email'>e-mail: <br/>
			<input type='email' id='email' name='email' autoComplete='email' />
		</label>
	</div>
	<div>
		<label htmlFor='tel'>電話番号: <br/>
			<input type='text' id='tel' name='tel' autoComplete='tel' />
		</label>
	</div>
	<div>
		<label htmlFor='ccnumber'>クレジットカード番号: <br/>
			<input type='text' id='ccnumber' name='ccnumber' autoComplete='cc-number' />
		</label>
	</div>
</form>
	`;

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
			<p>
				ユーザに対して必要以上に入力を求めている場合がある。
				<ul>
					<li>一つのフォームに対してフォームコントロールが多すぎる</li>
					<li>システム上重要でないフォームコントロール</li>
					<li>直ちに入力が必要でない項目</li>
				</ul>
				入力に時間が多くかかるユーザにとってこれらのフォームは深刻な問題である。
			</p>
			<h3>改善策 -入力項目を最小限に-</h3>
			<p>
				まず、入力が必要かどうか検討すべき。不必要な項目は削除すべきであり、後から入力するので良ければ後回しにすべき。
				<br />
				また、必須項目の内容も検討し、出来るだけ任意項目にするべきである。そうすることでユーザ（特に入力に時間のかかる方）が大きな恩恵を受けられる。
			</p>
			<h2>一つの入力値を表すフォームコントロールが分割されている</h2>
			<p>
				一つの入力値を表すフォームコントロールが分割されている場合がある。
				<ul>
					<li>姓と名</li>
					<li>メールアドレスの@の前後</li>
					<li>電話番号の市外局番・市内局番・加入者番号</li>
					<li>クレジットカードのハイフンで区切られた4つのフォーム</li>
				</ul>
				これらのような事例があると、様々な場面で障害が発生する。マシンリーダビリティ的視点ではブラウザによる自動補完が効きにくくなる。autocomplete属性が正常に働かないため、自動補完が効きにくい。また、ユーザ視点では、コピー&ペーストをすることが難しくなる。また、ミドルネームを入力するときに姓と名のどちらに含めるべきか分からない。
			</p>
			<h3>改善策 -一つの入力値を表すフォームコントロールをまとめる-</h3>
			<p>
				以下の入力値を表すフォームコントロールは一つにまとめて、autocomplete属性をつける。
				<ul>
					<li>名前</li>
					<li>メールアドレス</li>
					<li>電話番号</li>
					<li>クレジットカード番号</li>
				</ul>
				下に実装例を示す
				<ShowCode code={OneFormControl}></ShowCode>
			</p>
		</div>
	);
};

export default Page;
