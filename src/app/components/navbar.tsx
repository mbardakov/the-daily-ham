

export default function Navbar({ children }: Readonly<{ children: React.ReactNode; }>) {
	return(
		<ul className="list-none m-0 p-0 font-mono text-xl bg-black dark:bg-white">
            {children}
		</ul>
	)
}
