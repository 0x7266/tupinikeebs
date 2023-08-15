import {
	AnimatePresence,
	useMotionValue,
	motion,
	useMotionTemplate,
} from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

function App() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		if (currentTarget) {
			const { left, top } = currentTarget.getBoundingClientRect();
			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}
		console.log(currentTarget);
	}
	return (
		<AnimatePresence>
			<BrowserRouter>
				<div className="bg min-h-[100dvh] overflow-hidden">
					<motion.div
						className="backdrop-brightness-[20%] shadow-small md:shadow-large group"
						onMouseMove={handleMouseMove}
					>
						<motion.div
							className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl"
							style={{
								background: useMotionTemplate`radial-gradient(circle 40vw at ${mouseX}px ${mouseY}px, rgba(150, 150, 160, .15), transparent 100%)`,
							}}
						/>
						<div className="container mx-auto py-5 flex flex-col gap-12 items-center font-mono text-text-dark min-h-screen">
							{/* <Header /> */}
							<Hero />
							<Carousel />
						</div>
					</motion.div>
				</div>
			</BrowserRouter>
		</AnimatePresence>
	);
}

export default App;
