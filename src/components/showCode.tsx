"use client";

import ReactDOMServer from "react-dom/server";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import parse from "html-react-parser";

type Props = {
	code: string;
};

const ShowCode = ({ code }: Props) => {
	const hlmlElem = parse(code);
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				gap: "1rem",
				width: "100%",
				border: "solid 1px",
				padding: "1rem",
				borderRadius: "0.5rem",
			}}
		>
			<div style={{ gridColumn: 1 }}>
				<SyntaxHighlighter language='htmlbars' style={monoBlue}>
					{code}
				</SyntaxHighlighter>
			</div>
			<div style={{ gridColumn: 2 }}>{hlmlElem}</div>
		</div>
	);
};

export default ShowCode;

