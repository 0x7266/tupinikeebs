import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/20230313_153326-1-scaled-3-1024x512.jpg";
import img2 from "../assets/20230318_121927-2-scaled-3-1024x512.jpg";
import img3 from "../assets/20230318_122127-scaled-2-1024x512.jpg";

const cards = [
	{
		img: img1,
		initialPosition: { x: -2, y: 3, rotate: 4 },
		finalPosition: { x: -170, y: -35, rotate: -25 },
	},
	{
		img: img2,
		initialPosition: { x: 4, y: -2, rotate: -5 },
		finalPosition: { x: 160, y: -25, rotate: 35 },
	},
	{
		img: img3,
		initialPosition: { x: 0, y: 0, rotate: 0 },
		finalPosition: { x: 0, y: -20, rotate: 0 },
	},
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
							x: hovered ? card.finalPosition.x : card.initialPosition.x,
							y: hovered ? card.finalPosition.y : card.initialPosition.y,
							rotate: hovered
								? card.finalPosition.rotate
								: card.initialPosition.rotate,
						}}
					/>
				))}
			</div>
		</div>
	);
}
