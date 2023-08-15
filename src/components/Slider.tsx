import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

type Props = {
	images: string[];
	index: number;
};

export default function Slider({ images, index }: Props) {
	const [width, setWidth] = useState<number>(0);
	const carousel = useRef<HTMLDivElement | null>(null);
	const size = useWindowSize();

	useEffect(() => {
		setWidth(
			(_prev) => carousel.current?.scrollWidth - carousel.current?.offsetWidth
		);
	}, [size]);

	return (
		<motion.div
			key={size?.width}
			ref={carousel}
			className="cursor-grab flex justify-start gap-3 z-50 w-[800px]"
		>
			<motion.div
				animate={{ x: `-${index * 800}px` }}
				className="flex justify-center"
			>
				{images.map((image, index) => (
					<div className="w-[800px]">
						<img
							key={index}
							src={image}
							className="aspect-[16/9] object-cover p-4 rounded-3xl"
						/>
					</div>
				))}
			</motion.div>
		</motion.div>
	);
}
