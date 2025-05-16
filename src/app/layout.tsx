import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "The Daily Ham",
	description: "",
};

function Navbar() {
	return(
		<ul className='list-none m-0 p-0 font-mono'>
			<NavbarItem href='/' label='Home' />
			<NavbarItem href='/wife' label='Wife' />
			<NavbarItem href='/not-found' label='404' />
		</ul>
	)
}

function NavbarItem({href, label}: Readonly<{ href: string, label: string }>) {
	return (
		<li className='inline px-2 py-2'>
			<Link href={href}>
				{label}
			</Link>
		</li>
	)
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
