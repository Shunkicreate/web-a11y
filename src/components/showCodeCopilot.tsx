'use client';
//A functional component that receives jsx type source code in props and displays the contents of the source code and the execution result
import ReactDOMServer from "react-dom/server";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import styles from "./showCode.module.css";
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ReactNode } from "react";

//osのダークモードを取得する関数
const getOSDarkMode = () => {
	const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	return darkModeMediaQuery.matches;
}

const ShowCodeCopilot = ({code, children}: { code:JSX.Element, children: ReactNode}) => {
	if(getOSDarkMode()){
		return(
		<div className={styles.showCode}>
			<div className={styles.showRow}>
				<SyntaxHighlighter language="htmlbars" style={a11yDark}>
					{formatForSyntaxHighlighter(code)}
				</SyntaxHighlighter>
				{children}
			</div>
			<div className={styles.showHTML}>{children}</div>
		</div>
		)
	}
	return (
		<div className={styles.showCode}>
			<div className={styles.showRow}>
				<SyntaxHighlighter language="htmlbars" style={a11yLight}>
					{formatForSyntaxHighlighter(code)}
				</SyntaxHighlighter>
				{children}
			</div>
			<div className={styles.showHTML}>{children}</div>
		</div>
	)
}


//A function that formats JSX without line breaks and returns it as a string
const formatHTMLWithoutLineBreaks = (code: JSX.Element) => {
	const codeString = ReactDOMServer.renderToStaticMarkup(code);
	const codeStringArray = codeString.split("\n");
	const formattedCodeStringArray = codeStringArray.map((codeString) => {
		return codeString.trim();
	});
	const formattedCodeString = formattedCodeStringArray.join("");
	return formattedCodeString;
}

//>という文字のあとに改行を入れる関数
const addLineBreakAfterGreaterThan = (code: string) => {
	const codeStringArray = code.split(">");
	const formattedCodeStringArray = codeStringArray.map((codeString) => {
		return codeString + ">\n";
	});
	const formattedCodeString = formattedCodeStringArray.join("");
	return formattedCodeString;
}



//開始タグがある前にはタブを一つ増やして、終了タグがある後にはタブを一つ減らす関数
//最初はタブをつけない
//空要素の場合はタブの数を変化させない
const addTabBeforeStartTag = (code: string) => {
	const codeStringArray = code.split("\n");
	let tabNum = 0;
	const formattedCodeStringArray = codeStringArray.map((codeString) => {
		if (codeString.includes("</")) {
			tabNum--;
		}
		const tab = "    ".repeat(tabNum);
		if (!codeString.includes("/>") && !codeString.includes("</")) {
			tabNum++;
		}
		return tab + codeString;
	});
	const formattedCodeString = formattedCodeStringArray.join("\n");
	return formattedCodeString;
}

const formatForSyntaxHighlighter = (code: JSX.Element) => {
	const strCode = JSXElement2String(code);
	let formattedCode = addLineBreakAfterGreaterThan(strCode);
	formattedCode = addTabBeforeStartTag(formattedCode);
	return formattedCode;

}

const JSXElement2String = (children: JSX.Element) => {
	return ReactDOMServer.renderToStaticMarkup(children);
}

export default ShowCodeCopilot;