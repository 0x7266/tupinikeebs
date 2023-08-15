import { AnimatePresence, motion, wrap } from "framer-motion";

type Props = {
	images: string[];
	direction: number;
	page: number;
	slide: (n: number) => void;
};

const imgVariants = {
	initial: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	animate: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const swipeConfidenceThreshold = 10000;

function swipePower(offset: number, velocity: number) {
	return Math.abs(offset) * velocity;
}

export default function Slider({ images, direction, page, slide }: Props) {
	const index = wrap(0, images.length, page);
	return (
		<div className="relative flex justify-center items-center w-[90dvw] h-[30dvh] md:h-[45dvh] md:w-[60vw] rounded-2xl overflow-hidden">
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					src={images[index]}
					custom={direction}
					variants={imgVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							slide(1);
						} else if (swipe > swipeConfidenceThreshold) {
							slide(-1);
						}
					}}
					className="absolute object-cover rounded-xl max-w-[100vw]"
				/>
			</AnimatePresence>
		</div>
	);
}
