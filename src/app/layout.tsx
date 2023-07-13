import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Webアクセシビリティ勉強会",
	description: "このサイトは「Webアプリケーションアクセシビリティ 今日から始める現場からの改善」のアウトプット用サイトです。",
	openGraph: {
		title: 'Webアクセシビリティ勉強会',
		description: 'このサイトは「Webアプリケーションアクセシビリティ 今日から始める現場からの改善」のアウトプット用サイトです。',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ja'>
			<body className={inter.className + " " + styles.body}>
				<Header />
				<main className={styles.main}>{children}</main>
			</body>
		</html>
	);
}
