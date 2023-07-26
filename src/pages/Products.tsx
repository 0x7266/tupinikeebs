import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products";
export function Products() {
	const [width, setWidth] = useState(0);
	const carouselRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function updateStateOnResize() {
			if (!carouselRef.current) return;
			const { scrollWidth, offsetWidth } = carouselRef.current;
			setWidth(() => scrollWidth - offsetWidth);
		}

		updateStateOnResize();

		window.addEventListener("resize", updateStateOnResize);
		return () => window.removeEventListener("resize", updateStateOnResize);
	}, []);

	return (
		<motion.div
			ref={carouselRef}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
			whileTap={{ cursor: "grabbing" }}
			className="w-full cursor-grab overflow-hidden"
		>
			{/* "key" prop will re-render the element when update the state "width", preventing dragConstraints bug */}
			<motion.div
				key={width}
				drag="x"
				dragConstraints={{ right: 0, left: -width }}
				className="flex space-x-16 laptop:space-x-12 mobile:space-x-6"
			>
				{products.map((product, index) => (
					<motion.div
						key={index}
						className="h-[20rem] min-w-[50rem] rounded-xl overflow-hidden flex flex-col gap-5 bg-gray-800 text-3xl font-bold	"
					>
						<p className="text-center">{product.name}</p>
						<img
							src={product.img}
							// alt={`Cat ${getFileName(imageSrc)}`}
							className="w-full h-full object-cover pointer-events-none"
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}
