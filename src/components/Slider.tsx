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
			className="hidden lg:flex cursor-grab justify-start gap-3 z-50 w-[800px] overflow-hidden"
		>
			<motion.div
				animate={{ x: `-${index * 800}px` }}
				transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
				className="flex justify-center"
			>
				{images.map((image, index) => (
					<motion.div className="w-[800px]" key={index}>
						<img
							src={image}
							className="aspect-[16/9] object-cover p-4 rounded-3xl"
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}
