import Slider from "./Slider";
import img0 from "../assets/builds/img0.jpg";
import img1 from "../assets/builds/img1.jpg";
import img2 from "../assets/builds/img2.jpg";
import img3 from "../assets/builds/img3.jpg";
import img4 from "../assets/builds/img4.jpg";
import img5 from "../assets/builds/img5.jpg";
import img6 from "../assets/builds/img6.jpg";
import img7 from "../assets/builds/img7.jpg";
import img8 from "../assets/builds/img8.jpg";
import img9 from "../assets/builds/img9.jpg";
import img10 from "../assets/builds/img10.jpg";
import img11 from "../assets/builds/img11.jpg";
import img12 from "../assets/builds/img12.jpg";
import img13 from "../assets/builds/img13.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

export function Carousel() {
	const images = [
		img0,
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
	];

	const [[page, direction], setPage] = useState([0, 0]);
	function slide(newDirection: number) {
		setPage([page + newDirection, newDirection]);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.4, duration: 1 }}
			className="overflow-x-hidden flex flex-col gap-3 items-center overflow-hidden"
		>
			<Slider images={images} direction={direction} page={page} slide={slide} />
			<div className="flex gap-5 text-xl justify-center z-50">
				<motion.button
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						delay: 1,
					}}
					className="relative active:4op-1 hover:text-text-dark disabled:text-gray-600"
					onClick={() => slide(-1)}
				>
					{"<<"}
				</motion.button>
				<motion.button
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						delay: 1,
					}}
					className="relative active:top-1 hover:text-text-dark disabled:text-gray-600"
					onClick={() => slide(1)}
				>
					{">>"}
				</motion.button>
			</div>
		</motion.div>
	);
}
