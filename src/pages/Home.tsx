import { Link } from "react-router-dom";
import typingImg from "../assets/typing.webp";
import emailIcon from "../assets/icons/email_icon.webp";
import telegramIcon from "../assets/icons/telegram_icon.png";
import twitterIcon from "../assets/icons/twitter_icon.png";

export function Home() {
	return (
		<div className="flex flex-col items-center">
			<section className="grid md:grid-cols-2 h-full md:w-4/5 px-5">
				{/* <video src={video} autoPlay muted loop></video> */}
				<div className="flex flex-col gap-2 md:gap-5 xl:w-4/5 items-center md:items-start justify-self-end">
					<h1 className="text-5xl md:text-6xl font-bold">BLABLABLA</h1>
					<div className="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
						commodi, quisquam, odio hic, perspiciatis ut recusandae neque quod
						dolor inventore nostrum rerum quasi laboriosam itaque soluta? Ad
						culpa ut temporibus.
					</div>
					<div className="flex gap-5">
						<Link to="https://twitter.com/neversaytop">
							<img src={twitterIcon} alt="twitter" className="w-16" />
						</Link>
						<Link to="">
							<img src={telegramIcon} alt="telegram" className="w-16" />
						</Link>
						<Link to="">
							<img src={emailIcon} alt="email me" className="w-16" />
						</Link>
					</div>
				</div>
				<img src={typingImg} alt="" className="place-self-center" />
			</section>
		</div>
	);
}
