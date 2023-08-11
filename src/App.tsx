import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Header } from "./components";
import { Home, Products } from "./pages";
import Product from "./components/Product";

function App() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<BrowserRouter>
			<motion.div
				onMouseMove={handleMouseMove}
				className="min-h-[100dvh] bg shadow-small text-text-dark  font-mono gap-5 overflow-x-clip relative"
			>
				<div className="w-full h-full backdrop-brightness-[25%] flex flex-col items-center group">
					<motion.div
						className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl"
						style={{
							background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(140, 140, 140, .20), transparent 80%)`,
						}}
					/>
					<div className="container flex flex-col items-center gap-12 md:gap-20">
						<Header />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/products" element={<Products />} />
							<Route path="/:id" element={<Product />} />
						</Routes>
					</div>
				</div>
			</motion.div>
		</BrowserRouter>
	);
}

export default App;
