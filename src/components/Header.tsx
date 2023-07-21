import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
export function Header() {
	const links = [
		{ path: "/products", name: "Products" },
		{ path: "/about", name: "About" },
		{ path: "/faq", name: "FAQ" },
	];

	return (
		<div className="flex justify-center bg-zinc-300 py-5 dark:text-zinc-950 w-full">
			<div className="container flex flex-col gap-3 md:flex-row justify-around items-center">
				<div className="flex flex-col md:flex-row items-center">
					<span className="text-9xl md:text-6xl">⌨</span>
					<span className="text-5xl md:text-2xl font-bold">TupiniKeebs</span>
				</div>
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
		</div>
	);
}
