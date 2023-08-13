import { Link } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import logo from "../assets/logo.png";

export function Header() {
	const links = [
		{ path: "/products", name: "Products" },
		{ path: "/about", name: "About" },
		{ path: "/faq", name: "FAQ" },
	];

	const headerVariants: Variants = {
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const navVariants: Variants = {
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const linkVariants: Variants = {
		initial: {
			y: -200,
		},
		animate: {
			y: 0,
		},
	};

	return (
		<header className="flex justify-center dark:text-text-dark w-full">
			<motion.div
				variants={headerVariants}
				initial="initial"
				animate="animate"
				className="container flex flex-col gap-3 md:flex-row justify-around items-center"
			>
				<motion.div variants={linkVariants}>
					<Link to="/">
						<div className="flex flex-col md:flex-row gap-4 items-center relative">
							<img className="w-28" src={logo} />
							<span className="text-5xl md:text-2xl font-bold relative -top-4 md:-top-0">
								TupiniKeebs
							</span>
						</div>
					</Link>
				</motion.div>
				<motion.nav
					variants={navVariants}
					className="flex items-center text-xl font-semibold md:gap-6 w-full md:w-fit justify-around md:justify-center"
				>
					{links.map((link, index) => (
						<motion.div variants={linkVariants}>
							<Link to={link.path} key={index}>
								{link.name}
							</Link>
						</motion.div>
					))}
				</motion.nav>
			</motion.div>
		</header>
	);
}
