'use client'
import { useState } from "react";

const Index = () => {
	const [buttonCount, setButtonCount] = useState<number>(0);
	const [divCount, setDivCount] = useState<number>(0);

	const containerStyle = {
		marginTop: '20px',
		padding: '10px 30px',
		border: '1px solid black',
	}
	const normalButtonStyle = {
		padding: '10px',
	};
	const divButtonStyle = {
		width: 'fit-content',
		padding: '10px',
		backgroundColor: '#EFEFEF',
		border: '1px solid black',
		fontSize: '0.8rem',
	};

	return (
		<>
			<h2>buttonタグによるボタンの実装</h2>
			<p>buttonタグとdivタグによる操作性の違いを確認してみてください。</p>
			<p>buttonタグはデフォルトでデザインが適応されているため、divタグのボタンにも似たデザインを当てています。</p>

			<div style={containerStyle}>
				<h4>buttonタグで実装されたボタン</h4>
				<button type="button"
					style={normalButtonStyle}
					onClick={() => setButtonCount(c => c + 1)}
				>
					ButtonタグのButton
				</button>
				<p>buttonタグが押された回数: {buttonCount}回</p>
			</div>
			<p>buttonタグでは、カーソルをホバーした際の色の変化が自動的に設定されており、ボタンと認識しやすくなっている。また、Tabキーを押すと、フォーカスが当たるようになっている。</p>

			<div style={containerStyle}>
				<h4>divタグで実装されたボタン</h4>
				<div style={divButtonStyle} onClick={() => setDivCount(c => c + 1)}>DivタグのButton</div>
				<p>buttonタグが押された回数: {divCount}回</p>
			</div>
			<p>divタグでは、ボタンという認識がないため、カーソルを合わせてもテキストとして扱おうとする。また、フォーカスが当たらないため、キーボード操作ではクリック不可能。</p>
		</>
	);
};

export default Index;
