import Image from "next/image";
import styles from "./page.module.css";
import fsPromises from "fs/promises";
import path from "path";
import { readdirSync, statSync } from "fs";
import Link from "next/link";
import { MouseEvent, useState } from "react";

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
	const regex = /\\page.tsx/;
	const result = name.split(regex)[0];
	return result;
};

const pickUpPath = (path: string) => {
	const regex = /app\\/;
	const result = path.split(regex)[1];
	return result;
};

export default async function Home() {
	const filePath = path.join(process.cwd(), "src/app");
	const filePaths = findAllFiles(filePath, 0);

	return (
		<main className={styles.main}>
			<div>
				{filePaths.map((site, i) => {
					return (
						<div key={i}>
							<Link href={site}>{site}</Link>
						</div>
					);
				})}
			</div>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>src/app/page.tsx</code>
				</p>
				<div>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						By{" "}
						<Image src='/vercel.svg' alt='Vercel Logo' className={styles.vercelLogo} width={100} height={24} priority />
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<Image className={styles.logo} src='/next.svg' alt='Next.js Logo' width={180} height={37} priority />
			</div>

			<div className={styles.grid}>
				<a
					href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
				</a>

				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore the Next.js 13 playground.</p>
				</a>

				<a
					href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
				</a>
			</div>
		</main>
	);
}
