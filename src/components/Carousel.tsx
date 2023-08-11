import Slider from "./Slider";
import kb1 from "../assets/products/charybdis_nano_1.jpg";
import kb2 from "../assets/products/charybdis_nano_2.jpg";
import kb3 from "../assets/products/charybdis_nano_3.jpg";
import kb4 from "../assets/products/skeletyl_1.jpg";
import kb5 from "../assets/products/skeletyl_2.jpg";
import kb6 from "../assets/products/skeletyl_3.jpg";

export default function Carousel() {
	const images = [kb1, kb2, kb3, kb4, kb5, kb6];
	return (
		<div className="h-screen mt-[30vh] w-full z-50 border">
			<Slider images={images} />
		</div>
	);
}
