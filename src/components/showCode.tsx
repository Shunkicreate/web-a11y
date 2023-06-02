"use client";

import ReactDOMServer from "react-dom/server";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import parse from "html-react-parser";
import style from "./showCode.module.css";

type Props = {
	code: string;
};

const ShowCode = ({ code }: Props) => {
	const hlmlElem = parse(code);
	return (
		<div
			className={style.showCode}
		>
			<div className={style.showRow}>
				<SyntaxHighlighter language='htmlbars' style={monoBlue}>
					{code}
				</SyntaxHighlighter>
			</div>
			<div className={style.showHTML}>{hlmlElem}</div>
		</div>
	);
};

export default ShowCode;
