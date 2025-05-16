import Link from "next/link"
import type { Metadata } from "next";
import "./globals.css";

import { geistMono, geistSans } from "./globals";

export const metadata: Metadata = {
	title: "The Daily Ham",
	description: "",
};

function Navbar() {
	return(
		<ul className="list-none m-0 p-0 font-mono bg-black dark:bg-white">
			<NavbarLink href="/" label="Home" />
			<NavbarLink href="/wife" label="Wife" />
			<NavbarLink href="/not-found" label="404" />
		</ul>
	)
}

function NavbarLink({href, label}: Readonly<{ href: string, label: string }>) {
	return (
		<li className="inline px-2 py-2 hover:bg-white dark:hover:bg-black text-white hover:text-black dark:text-black dark:hover:text-white">
			<Link href={href}>
				{label}
			</Link>
		</li>
	)
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}>
				<div className="mx-auto w-fit font-mono">
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
