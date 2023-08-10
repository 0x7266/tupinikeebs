import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
import logo from "../assets/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Header() {
	const links = [
		{ path: "/products", name: "Products" },
		{ path: "/about", name: "About" },
		{ path: "/faq", name: "FAQ" },
	];

	const { scrollYProgress } = useScroll();

	const backgroundColor = useTransform(
		scrollYProgress,
		[0, 0.01],
		["#dbe6f000", "#2c4b68ff"]
	);
	const textColor = useTransform(
		scrollYProgress,
		[0, 0.01],
		["#0f1a24", "#ffffff"]
	);

	return (
		<motion.header
			style={{ backgroundColor, color: textColor }}
			className="flex justify-center dark:text-text-dark w-full sticky top-0 z-10 rounded-b-lg py-3"
		>
			<div className="container flex flex-col gap-3 md:flex-row justify-around items-center">
				<Link to="/">
					<div className="flex flex-col md:flex-row gap-4 items-center relative">
						<img className="w-28" src={logo} />
						<span className="text-5xl md:text-2xl font-bold relative -top-4 md:-top-0">
							TupiniKeebs
						</span>
					</div>
				</Link>
				<nav className="flex items-center text-xl font-semibold md:gap-6 w-full md:w-fit justify-around md:justify-center">
					{links.map((link, index) => (
						<Link to={link.path} key={index}>
							{link.name}
						</Link>
					))}
					{/* <div className="text-4xl">🛒</div> */}
				</nav>
				{/* <ThemeSwitcher /> */}
			</div>
		</motion.header>
	);
}
