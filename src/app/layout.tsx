
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import NavbarLink from "@/components/navbar-link";
import "@/globals.css";

import { geistMono, geistSans } from "@/globals";

export const metadata: Metadata = {
	title: "The Daily Ham",
	description: "",
};



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	const links: Array<{href: string, label: string}> = [
		{ href: '/', label: 'Home' },
		{ href: '/wife', label: 'Wife' },
		{ href: '/not-found', label: '404' }
	];

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}>
				<div className="mx-auto w-fit font-mono max-w-3xl">
					<Navbar>
						{links.map(link => <NavbarLink href={link.href} label={link.label} key={link.label}/>)}
					</Navbar>
					{children}
				</div>
			</body>
		</html>
	);
}
