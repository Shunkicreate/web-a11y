import { useEffect, useState } from "react";

function useDarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (event: MediaQueryList) => {
			setIsDarkMode(event.matches);
		};
		handleChange(darkModeMediaQuery); // 初期値の設定
		darkModeMediaQuery.addEventListener("change", () => handleChange(darkModeMediaQuery)); // ダークモードの変更を監視
		return () => {
			darkModeMediaQuery.removeEventListener("change", () => handleChange(darkModeMediaQuery)); // イベントリスナーの解除
		};
	}, []);
	return { isDarkMode };
}

export default useDarkMode;

