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
export default function Carousel() {
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
	const [index, setIndex] = useState<number>(0);

	function handleNext() {
		if (index === images.length - 1) return;
		setIndex(index + 1);
	}

	function handlePrev() {
		if (index === 0) return;
		setIndex(index - 1);
	}

	return (
		<div className="h-full overflow-x-hidden flex flex-col items-center overflow-hidden">
			<Slider images={images} index={index} />
			<div className="flex gap-5 text-xl justify-center">
				<button
					disabled={index === 0}
					className="relative active:top-1 hover:text-text-dark disabled:text-gray-600 disabled:static"
					onClick={handlePrev}
				>
					{"<<"}
				</button>
				<button
					disabled={index === images.length - 1}
					className="relative active:top-1 hover:text-text-dark disabled:text-gray-600 disabled:static"
					onClick={handleNext}
				>
					{">>"}
				</button>
			</div>
		</div>
	);
}
