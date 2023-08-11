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
			(_prev) => carousel.current!.scrollWidth - carousel.current!.offsetWidth
		);
	}, [size]);

	return (
		<motion.div
			key={size?.width}
			ref={carousel}
			className="cursor-grab flex gap-3 border border-rose-500"
		>
			<motion.div
				drag="x"
				dragConstraints={{ right: 0, left: -width }}
				className="inline-flex gap-2"
			>
				{images.map((image, index) => (
					<div className="rounded-2xl overflow-clip w-96 h-60" key={index}>
						<img src={image} />
					</div>
				))}
			</motion.div>
		</motion.div>
	);
}
