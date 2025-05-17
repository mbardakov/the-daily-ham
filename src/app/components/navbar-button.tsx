import { navbarStyles } from "@/components/common"

export default function NavbarLink({label, callback}: Readonly<{ label: string, callback: () => void }>) {
	return (
		<div role="button" className={navbarStyles} onClick={callback}>
			{label}
		</div>
	)
}