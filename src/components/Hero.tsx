import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import brazilianFlag from "../assets/brazilian_flag.svg";
import emailIcon from "../assets/icons/email_icon.webp";
import telegramIcon from "../assets/icons/telegram_icon.png";
import twitterIcon from "../assets/icons/twitter_icon.png";

export default function Hero() {
	return (
		<section className="flex flex-col items-center gap-14">
			<div className="flex flex-col gap-2 items-center justify-self-end">
				<img src={logo} className="w-60" />
				<div className="text-5xl md:text-6xl relative">
					TupiniKeebs{" "}
					<img src={brazilianFlag} className="w-4 absolute top-3 -right-4" />
				</div>
			</div>
			<div className="flex flex-col items-center gap-2">
				<div className="text-4xl border rounded-xl px-5 py-2">
					ENCOMENDE JÁ O SEU
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
