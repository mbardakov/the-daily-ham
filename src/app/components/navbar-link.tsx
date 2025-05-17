import Link from "next/link"
import { navbarStyles } from "@/components/common"

export default function NavbarLink({href, label}: Readonly<{ href: string, label: string }>) {
	return (
		<li className={navbarStyles}>
			<Link href={href}>
				{label}
			</Link>
		</li>
	)
}