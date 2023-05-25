"use client";

import ReactDOMServer from "react-dom/server";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const repeatCharacter = (count: number, character: string = "\t") => {
	return character.repeat(count);
};

const nodeToString: (node: React.ReactNode, recallNum?: number) => string = (node, recallNum = 0) => {
	console.log(recallNum);
	if (typeof node === "string" || typeof node === "number") {
		return String(node);
	}

	if (Array.isArray(node)) {
		return node.map(nodeToString).join("");
	}

	if (React.isValidElement(node)) {
		const { type, props } = node;
		const children = props.children || "";
		console.log(type, recallNum);
		return `${repeatCharacter(recallNum)}<${type}>\n${nodeToString(children, recallNum + 1)}\n</${type}>`;
	} else {
		return "";
	}
};

type Props = {
	code: string;
};

const ShowCode = ({ code }: Props) => {
	const CodeString = nodeToString(code);
	const codeString = "console.log('hello')";
	return (
		<SyntaxHighlighter language='javascript' style={dark}>
			{code}
		</SyntaxHighlighter>
	);
};

export default ShowCode;

