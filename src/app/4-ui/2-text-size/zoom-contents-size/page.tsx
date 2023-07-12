"use client";
import { useState } from "react";

const Page = () => {
	const [flag, setFlag] = useState(false);
	return (
		<>
			<div style={{ width: "100%", backgroundColor: "#f6bd60", color: "black" }}>
				<h1>ヘッダー</h1>
			</div>
			<div style={{ width: "100%", display: "flex", color: "black" }}>
				<div style={{ width: "50%", backgroundColor: "#ff99c8" }}>
					<h2>contains1</h2>
					<p>
						これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。これはcontains1です。
					</p>
				</div>
				<div style={{ width: "50%", backgroundColor: "#fcf6bd" }}>
					<h2>contains2</h2>
					<p>
						これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。これはcontains2です。
					</p>
				</div>
			</div>
			<div style={{ width: "100%", display: "flex", color: "black" }}>
				<div style={{ width: "33.3%", backgroundColor: "#d0f4de" }}>
					<h2>contains3</h2>
					<p>
						これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。これはcontains3です。
					</p>
				</div>
				<div style={{ width: "33.3%", backgroundColor: "#a9def9" }}>
					<h2>contains4</h2>
					<p>
						これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。これはcontains4です。
					</p>
				</div>
				<div style={{ width: "33.3%", backgroundColor: "#e4c1f9" }}>
					<h2>contains5</h2>
					<p>
						これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。これはcontains5です。
					</p>
				</div>
			</div>
		</>
	);
};

export default Page;

