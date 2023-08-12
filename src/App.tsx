import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Header } from "./components";
import { Home, Products } from "./pages";
import Product from "./components/Product";
import Slider from "./components/Slider";
import Carousel from "./components/Carousel";

function App() {
	return (
		<BrowserRouter>
			<div className="text-text-dark font-mono overflow-x-clip">
				<div className="h-full backdrop-brightness-[25%] flex flex-col items-center group">
					<Header />
					<Carousel />
					{/* <div className="container flex flex-col items-center gap-12 md:gap-20">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/products" element={<Products />} />
							<Route path="/:id" element={<Product />} />
						</Routes>
					</div> */}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
