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

	const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
	const position = useTransform(scrollYProgress, (pos) =>
		pos >= 1 ? "relative" : "fixed"
	);
	const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

	return (
		<header className="bg w-full h-screen">
			<div className="backdrop-brightness-[25%] h-full">
				<motion.div
					ref={ref}
					className="w-full h-full flex justify-center pt-10"
				>
					<motion.div
						style={{ position, scale, opacity }}
						className="flex flex-col gap-3 justify-around items-center"
					>
						<Link to="/">
							<div className="flex flex-col gap-3 items-center relative">
								<img className="w-32" src={logo} />
								<span className="text-9xl font-bold relative -top-4 md:-top-0">
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
						</nav>
					</motion.div>
				</motion.div>
			</div>
		</header>
	);
}
