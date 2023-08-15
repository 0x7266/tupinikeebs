import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

type Props = {
	images: string[];
};

export default function Slider({ images }: Props) {
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
			className="cursor-grab flex gap-3 z-50"
		>
			<motion.div
				// drag="x"
				// dragConstraints={{ right: 0, left: -width }}
				className="inline-flex gap-2 w-2/5"
			>
				{images.map((image, index) => (
					<img src={image} className="aspect-[16/9] object-cover" />
				))}
			</motion.div>
		</motion.div>
	);
}
