import { AnimatePresence, motion } from "framer-motion";

type Props = {
	images: string[];
	index: number;
	direction: -1 | 1;
};

const imgVariants = {
	initial: (direction: number) => ({ x: -1000 * direction }),
	animate: { x: 0 },
	exit: (direction: number) => ({ x: 1000 * direction }),
};

export default function Slider({ images, index, direction }: Props) {
	return (
		<div className="relative flex justify-center items-center w-[90dvw] h-[40dvh] md:w-[30vw] rounded-2xl overflow-hidden">
			<AnimatePresence initial={false} key={direction}>
				<motion.img
					custom={direction}
					variants={imgVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.3 }}
					src={images[index]}
					key={images[index]}
					className="absolute object-contain rounded-xl w-[90vw] md:max-w-[30vw]"
				/>
			</AnimatePresence>
		</div>
	);
}
