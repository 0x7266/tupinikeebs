import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
export function Header() {
	const links = [
		{ path: "/products", name: "Products" },
		{ path: "/about", name: "About" },
		{ path: "/faq", name: "FAQ" },
	];

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex justify-around items-center">
			<div className="text-6xl">⌨</div>
			<ThemeSwitcher />
			<nav className="flex items-baseline text-xl font-semibold gap-6">
				{links.map((link, index) => (
					<Link to={link.path} key={index}>
						{link.name}
					</Link>
				))}
				<div className="text-4xl">🛒</div>
			</nav>
		</div>
	);
}
