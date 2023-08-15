import Slider from "./Slider";
import kb1 from "../assets/products/charybdis_nano_1.jpg";
import kb2 from "../assets/products/charybdis_nano_2.jpg";
import kb3 from "../assets/products/charybdis_nano_3.jpg";
import kb4 from "../assets/products/skeletyl_1.jpg";
import kb5 from "../assets/products/skeletyl_2.jpg";
import kb6 from "../assets/products/skeletyl_3.jpg";
import { useState } from "react";

export default function Carousel() {
	const images = [kb1, kb2, kb3, kb4, kb5, kb6];
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
		<div className="h-full w-screen overflow-x-hidden flex flex-col items-center">
			<Slider images={images} index={index} />
			<div className="flex gap-5 text-xl justify-center">
				<div className="" onClick={handlePrev}>
					{"<<"}
				</div>
				<div className="" onClick={handleNext}>
					{">>"}
				</div>
			</div>
		</div>
	);
}
