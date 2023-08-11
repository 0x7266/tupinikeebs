import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import typingImg from "../assets/typing.webp";
import emailIcon from "../assets/icons/email_icon.webp";
import telegramIcon from "../assets/icons/telegram_icon.png";
import twitterIcon from "../assets/icons/twitter_icon.png";
import { useRef } from "react";

export function Home() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		// offset: ["start end", "end end"],
	});
	const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
	const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const translate = useTransform(scrollYProgress, [0.6, 0.8], ["0px", "-30vw"]);

	return (
		<motion.section
			ref={containerRef}
			className="flex flex-col items-center mt-[-75vh]"
		>
			<motion.div
				style={{ scale, opacity, translateX: translate }}
				className="h-[90dvh] flex flex-col gap-2 md:gap-5 w-2/5 items-center"
			>
				<div className="group relative">
					<div className="absolute blur bg-accent transition duration-200 rounded-md -inset-1 opacity-80 animate-tilt"></div>
					<h1 className="text-5xl md:text-6xl font-bold relative bg-background-dark px-5 py-2 rounded-md group-hover:text-secondary transition duration-300">
						PEÇA JÁ O SEU
					</h1>
				</div>
				<div className="w-2/3">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
					commodi, quisquam, odio hic, perspiciatis ut recusandae neque quod
					dolor inventore nostrum rerum quasi laboriosam itaque soluta?
				</div>
				<div className="flex items-center justify-center gap-5">
					<Link to="https://twitter.com/neversaytop">
						<img src={twitterIcon} alt="twitter" className="w-16" />
					</Link>
					<Link to="">
						<img src={telegramIcon} alt="telegram" className="w-12" />
					</Link>
					<Link to="">
						<img src={emailIcon} alt="email me" className="w-16" />
					</Link>
				</div>
				<div>
					<motion.img
						// style={{ scale: imgScale }}
						src={typingImg}
						alt=""
						className="place-self-center relative"
					/>
				</div>
			</motion.div>
		</motion.section>
	);
}
