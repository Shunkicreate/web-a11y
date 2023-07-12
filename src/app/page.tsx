import styles from "./page.module.css";
import path from "path";
import { readdirSync, statSync } from "fs";
import Link from "next/link";
import { finished } from "stream";

//ディレクトリの構造をファイルとともに保持するjson形式のtype
type dirTreeType = {
	name: string;
	stats: "file" | "dir";
	path: string;
	children: dirTreeType[];
};

//ディレクトリの構造をfsで読み取ってきて、それをdirTreeTypeに変換する関数
const findAllFiles = (dir: string, num: number) => {
	const filenames = readdirSync(dir);
	const dirTrees: dirTreeType[] = [];
	filenames.forEach((filename) => {
		const fullPath = path.join(dir, filename);
		const stats = statSync(fullPath);
		//最初はディレクトリのみを表示する
		if (!(num === 0 && filename.includes("."))) {
			if (stats.isFile()) {
				const dirTree: dirTreeType = { name: filename, stats: "file", path: fullPath, children: [] };
				dirTrees.push(dirTree);
			} else if (stats.isDirectory()) {
				const dirTree: dirTreeType = { name: filename, stats: "dir", path: fullPath, children: [] };
				dirTree.children = [...dirTree.children, ...findAllFiles(fullPath, num + 1)];
				dirTrees.push(dirTree);
			}
		}
	});
	return dirTrees;
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

const NavLink = ({ path, name }: { path: string; name: string }) => {
	return (
		<li className={styles.NavLink}>
			<Link href={pickUpPath(path) ?? ""}>{name}</Link>
		</li>
	);
};

export default async function Home() {
	const filePath = path.join(process.cwd(), "src/app");
	const filePaths = findAllFiles(filePath, 0);
	console.log(filePaths);

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
						{filePaths.map((filePath, i) => {
							return (
								<>
									{filePath.stats === "dir" ? (
										<ul>
											<NavLink key={i} path={filePath.path} name={filePath.name} />
											<ul>
												{filePath.children
													.filter((child) => child.stats === "dir")
													.map((child, j) => {
														return <NavLink key={j}  path={child.path} name={child.name} />;
													})}
											</ul>
										</ul>
									) : (
										<></>
									)}
								</>
							);
						})}
					</ul>
				</label>
			</div>
		</>
	);
}
