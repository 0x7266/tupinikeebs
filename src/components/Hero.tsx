import { Link } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import logo from "../assets/logo.png";
import brazilianFlag from "../assets/brazilian_flag.svg";
import emailIcon from "../assets/icons/email_icon.webp";
import telegramIcon from "../assets/icons/telegram_icon.png";
import twitterIcon from "../assets/icons/twitter_icon.png";

const sectionVariants: Variants = {
	animate: {
		transition: {
			delay: 0.1,
			staggerChildren: 0.3,
		},
	},
};

const logoVariants: Variants = {
	initial: {
		y: "-50vh",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
};

const heroVariants: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const bannerVariants: Variants = {
	initial: {
		scale: 0,
		opacity: 0,
	},
	animate: {
		scale: [1, 1.1, 1],
		opacity: 1,
	},
};

const iconContainerVariants: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const iconVariants: Variants = {
	initial: {
		scale: 0,
		opacity: 0,
	},
	animate: {
		scale: [1, 1.1, 1],
		opacity: 1,
	},
};

export default function Hero() {
	return (
		<motion.section
			variants={sectionVariants}
			initial="initial"
			animate="animate"
			className="flex flex-col items-center gap-10"
		>
			<motion.div
				variants={logoVariants}
				className="flex flex-col gap-2 items-center justify-self-end"
			>
				<img src={logo} className="w-60" />
				<div className="text-5xl md:text-6xl relative">
					TupiniKeebs{" "}
					<img src={brazilianFlag} className="w-4 absolute top-3 -right-4" />
				</div>
			</motion.div>

			<motion.div
				variants={heroVariants}
				className="flex flex-col items-center gap-2"
			>
				<motion.div
					variants={bannerVariants}
					className="text-4xl border rounded-xl px-5 py-2"
				>
					ENCOMENDE JÁ O SEU
				</motion.div>
				<motion.div
					variants={iconContainerVariants}
					className="flex items-center justify-center gap-5"
				>
					<motion.div custom={1} variants={iconVariants}>
						<Link to="https://twitter.com/neversaytop">
							<img src={twitterIcon} alt="twitter" className="w-16" />
						</Link>
					</motion.div>
					<motion.div custom={2} variants={iconVariants}>
						<Link to="">
							<img src={telegramIcon} alt="telegram" className="w-12" />
						</Link>
					</motion.div>
					<motion.div custom={3} variants={iconVariants}>
						<Link to="">
							<img src={emailIcon} alt="email me" className="w-16" />
						</Link>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
