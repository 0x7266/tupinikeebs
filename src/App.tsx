import { MouseEvent } from "react";
import {
	AnimatePresence,
	useMotionValue,
	motion,
	useMotionTemplate,
} from "framer-motion";
import { Carousel, Hero } from "./components";

function App() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		if (currentTarget && currentTarget) {
			const { left, top } = currentTarget.getBoundingClientRect();
			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}
	}
	return (
		<AnimatePresence>
			<div className="bg min-h-[100dvh] overflow-hidden">
				<motion.div
					className="backdrop-brightness-[12%] shadow-small md:shadow-large group min-h-[100dvh]"
					onMouseMove={handleMouseMove}
				>
					<motion.div
						className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl"
						style={{
							background: useMotionTemplate`radial-gradient(circle 40vw at ${mouseX}px ${mouseY}px, rgba(150, 150, 160, .1), transparent 100%)`,
						}}
					/>
					<div className="container mx-auto py-4 px-2 flex flex-col gap-10 items-center font-one text-text">
						{/* <Header /> */}
						<Hero />
						<Carousel />
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}

export default App;
