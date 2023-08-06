import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/20230313_153326-1-scaled-3-1024x512.jpg";
import img2 from "../assets/20230318_121927-2-scaled-3-1024x512.jpg";
import img3 from "../assets/20230318_122127-scaled-2-1024x512.jpg";

const cards = [
	{ img: img1, position: { x: -170, y: -35, rotate: -25 } },
	{ img: img2, position: { x: 160, y: -25, rotate: 35 } },
	{ img: img3, position: { x: 0, y: -20 } },
];

export default function CardSlider() {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="flex flex-col items-center">
			<div
				className="w-full h-96 relative flex justify-center"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				{cards.map((card, index) => (
					<motion.img
						src={card.img}
						key={index}
						className={`absolute h-[400px] w-[300px] object-cover rounded-xl transition-all duration-700 border-8 border-black`}
						style={{
							x: hovered ? card.position.x : 0,
							y: hovered ? card.position.y : 0,
							rotate: hovered ? card.position.rotate : 0,
						}}
					/>
				))}
			</div>
		</div>
	);
}
