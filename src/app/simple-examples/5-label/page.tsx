const Index = () => {
	const containerStyle = {
		marginTop: '40px',
		padding: '10px 30px 20px 30px',
		border: '1px solid black',
	}

	return (
		<>
			<h2>labelタグによるinput要素との紐づけ</h2>
			<p>labelタグの有無によるラジオボタンの操作性の違いを確認してみてください。</p>

			<div style={containerStyle}>
				<h4>labelタグを使ったチェックボックス</h4>
				<form action="" >
					<label>
						<input type="checkBox" />
						みかんジュース
					</label>
					<br />
					<label>
						<input type="checkBox" />
						りんごジュース
					</label>
				</form>
			</div>
			<p>labelタグを用いると、ラベルのテキストを押せばチェックボックスを操作できます。input要素(今回におけるチェックボックス)とラベルのテキストが視覚的・プログラム的に関連付けられていることが実感できます。</p>

			<div style={containerStyle}>
				<h4>inputタグのみで実装されたチェックボックス</h4>
				<form action="" >
					<input type="checkBox" />みかんジュース
					<br />
					<input type="checkBox" />りんごジュース
				</form>
			</div >
			<p>labelタグがないと、ラベルのテキストを押してもinput要素が反応しません。</p>
		</>
	);
};

export default Index;
