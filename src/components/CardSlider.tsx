import img1 from "../assets/20230313_153326-1-scaled-3-1024x512.jpg";
import img2 from "../assets/20230318_121927-2-scaled-3-1024x512.jpg";
import img3 from "../assets/20230318_122127-scaled-2-1024x512.jpg";

const cards = [img1, img2, img3];

export default function CardSlider() {
	return (
		<div className="flex flex-col items-start justify-center">
			<div className="w-2/3 h-96 relative flex justify-center">
				{cards.map((card, index) => (
					<img
						src={card}
						key={index}
						className="absolute h-[400px] w-[340px] object-cover rounded"
					/>
				))}
			</div>
		</div>
	);
}
