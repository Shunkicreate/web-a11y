import styles from "./page.module.css";
import path from "path";
import { readdirSync, statSync } from "fs";
import Link from "next/link";

const findAllFiles = (dir: string, num: number) => {
	const filenames = readdirSync(dir);
	let filePaths: string[] = [];
	filenames.forEach((filename) => {
		const fullPath = path.join(dir, filename);
		const stats = statSync(fullPath);
		if (!(num === 0 && filename.includes("."))) {
			if (stats.isFile()) {
				const addFileName = pickUpPath(rmPageName(fullPath));
				filePaths.push(addFileName);
			} else if (stats.isDirectory()) {
				filePaths = [...filePaths, ...findAllFiles(fullPath, num + 1)];
			}
		}
	});
	return filePaths;
};

const rmPageName = (name: string) => {
	const regex = /[\\/]page.tsx/;
	const result = name.split(regex)[0];
	return result;
};

const pickUpPath = (path: string) => {
	const regex = /app[\\/](.+)/;
	const result = path.split(regex)[1];
	return result;
};

const NavLink = ({ site }: { site: string }) => {
	return (
		<li className={styles.NavLink}>
			<Link href={site ?? ""}>{site}</Link>
		</li>
	);
};

export default async function Home() {
	const filePath = path.join(process.cwd(), "src/app");
	const filePaths = findAllFiles(filePath, 0);

	return (
		<>
			<h1>Webアプリケーションアクセシビリティ勉強会</h1>
			<p>
				このサイトは「Webアプリケーションアクセシビリティ 今日から始める現場からの改善」のアウトプット用サイトです。
			</p>
			<p>もし、著作権などの申し立てがあれば速やかにこのウェブページは削除致します。</p>
			<div className={styles.tableOfContents}>
				<label>
					目次
					<ul>
						{filePaths.map((site, i) => {
							return <NavLink key={i} site={site}></NavLink>;
						})}
					</ul>
				</label>
			</div>
		</>
	);
}
