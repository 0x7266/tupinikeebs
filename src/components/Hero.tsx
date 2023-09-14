import { Variants, motion } from "framer-motion";
import logo from "../assets/logo.png";
import brazilianFlag from "../assets/brazilian_flag.svg";
import emailIcon from "../assets/icons_set_2/mail.svg";
import telegramIcon from "../assets/icons_set_2/telegram.svg";
import xIcon from "../assets/icons_set_2/x.svg";
import wppIcon from "../assets/icons_set_2/whatsapp.svg";

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
	},
};

const heroVariants: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.5,
		},
	},
};

const bannerVariants: Variants = {
	initial: {
		scale: 0,
		opacity: 0,
	},
	animate: {
		animation: "tilt 10s infinite linear",
		scale: [1, 1.1, 1],
		opacity: 1,
		transition: {
			animation: {
				delay: 1,
			},
		},
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

export function Hero() {
	return (
		<motion.section
			variants={sectionVariants}
			initial="initial"
			animate="animate"
			className="flex flex-col items-center gap-14"
		>
			<motion.div
				variants={logoVariants}
				className="flex flex-col gap-2 items-center justify-self-end"
			>
				<img src={logo} className="w-40 md:w-60" />
				<div className="text-5xl md:text-7xl font-bold relative">
					TupiniKeebs
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
						src={brazilianFlag}
						className="w-4 absolute top-3 -right-4"
					/>
				</div>
			</motion.div>

			<motion.div
				variants={heroVariants}
				className="flex flex-col items-center gap-4"
			>
				<motion.div
					variants={bannerVariants}
					className="text-2xl md:text-4xl border rounded-lg px-5 py-2"
				>
					ENCOMENDE JÁ O SEU
				</motion.div>
				<motion.div
					variants={iconContainerVariants}
					className="flex items-center justify-center gap-5"
				>
					<motion.div variants={iconVariants}>
						<a href="https://twitter.com/neversaytop">
							<img src={xIcon} alt="x / twitter" className="w-10" />
						</a>
					</motion.div>
					<motion.div variants={iconVariants}>
						<a href="https://wa.me/5582991749959">
							<img src={wppIcon} alt="whatsapp" className="w-10" />
						</a>
					</motion.div>
					<motion.div variants={iconVariants}>
						<a href="https://t.me/ferreirafelipe">
							<img src={telegramIcon} alt="telegram" className="w-10" />
						</a>
					</motion.div>
					<motion.div variants={iconVariants}>
						<a href="mailto:ferreirafelipe.dev@gmail.com">
							<img src={emailIcon} alt="email me" className="w-10" />
						</a>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
