import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
export function Header() {
	const links = [
		{ path: "/products", name: "Products" },
		{ path: "/about", name: "About" },
		{ path: "/faq", name: "FAQ" },
	];

	return (
		<div className="flex flex-col gap-3 md:flex-row justify-around items-center">
			<div className="text-9xl">⌨</div>
			<nav className="flex items-center text-xl font-semibold gap-6 w-full md:w-fit justify-around md:justify-center">
				{links.map((link, index) => (
					<Link to={link.path} key={index}>
						{link.name}
					</Link>
				))}
				{/* <div className="text-4xl">🛒</div> */}
			</nav>
			<ThemeSwitcher />
		</div>
	);
}
