import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
import logo from "../assets/logo.png";

export function Header() {
	const links = [
		{ path: "/products", name: "Products" },
		{ path: "/about", name: "About" },
		{ path: "/faq", name: "FAQ" },
	];

	return (
		<header className="flex justify-center dark:text-text-dark w-full">
			<div className="container flex flex-col gap-3 md:flex-row justify-around items-center">
				<div className="flex flex-col md:flex-row gap-4 items-center relative">
					<img className="w-28" src={logo} />
					<span className="text-5xl md:text-2xl font-bold relative -top-4 md:-top-0">
						TupiniKeebs
					</span>
				</div>
				<nav className="flex items-center text-xl font-semibold md:gap-6 w-full md:w-fit justify-around md:justify-center">
					{links.map((link, index) => (
						<Link to={link.path} key={index}>
							{link.name}
						</Link>
					))}
					{/* <div className="text-4xl">🛒</div> */}
				</nav>
				<ThemeSwitcher />
			</div>
		</header>
	);
}
