import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Header() {
	const links = [
		{ path: "/products", name: "Products" },
		{ path: "/about", name: "About" },
		{ path: "/faq", name: "FAQ" },
	];

	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

	return (
		<motion.header
			ref={ref}
			className="flex justify-center z-10 rounded-b-lg py-16 h-screen"
		>
			<motion.div
				style={{ opacity, scale }}
				className="container flex flex-col gap-3 md:flex-row justify-around items-center"
			>
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
			</motion.div>
		</motion.header>
	);
}
