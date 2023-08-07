import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/test1.png";
import img2 from "../assets/test2.png";
import img3 from "../assets/test3.png";

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

export default function CardStack() {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="flex flex-col items-center select-none">
			<div
				className="w-full h-96 relative flex justify-center"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				{cards.map((card, index) => (
					<motion.img
						src={card.img}
						key={index}
						className={`absolute h-[320px] w-[220px] md:h-[400px] md:w-[300px] object-cover rounded-xl transition-all duration-700 shadow-md`}
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
