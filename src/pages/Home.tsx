import { Link } from "react-router-dom";
import typingImg from "../assets/typing.webp";
import emailIcon from "../assets/icons/email_icon.webp";
import telegramIcon from "../assets/icons/telegram_icon.png";
import twitterIcon from "../assets/icons/twitter_icon.png";
import { motion, useScroll, useTransform } from "framer-motion";

export function Home() {
	const { scrollYProgress } = useScroll();
	const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1.3]);

	return (
		<section className="px-5 flex flex-col items-center">
			<div className="flex flex-col gap-2 md:gap-5 w-2/5 items-center justify-self-end fixed">
				<div className="relative group">
					<div className="absolute blur bg-accent transition duration-200 rounded-md -inset-1 opacity-80 animate-tilt"></div>
					<h1 className="text-5xl md:text-6xl font-bold relative bg-background-dark px-5 py-2 rounded-md text-text-dark group-hover:text-secondary transition duration-500">
						PEÇA JÁ O SEU
					</h1>
				</div>
				<div className="">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
					commodi, quisquam, odio hic, perspiciatis ut recusandae neque quod
					dolor inventore nostrum rerum quasi laboriosam itaque soluta? Ad culpa
					ut temporibus.
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
			</div>
		</section>
	);
}
