import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Products } from "./pages";
import Product from "./components/Product";
import Carousel from "./components/Carousel";

function App() {
	return (
		<AnimatePresence>
			<BrowserRouter>
				<div className="bg min-h-[100dvh] overflow-hidden">
					<div className="backdrop-brightness-[20%] shadow-small md:shadow-large">
						<div className="container mx-auto py-5 flex flex-col gap-20 items-center font-mono text-text-dark min-h-screen">
							<Header />
							<Carousel></Carousel>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/products" element={<Products />} />
								<Route path="/:id" element={<Product />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</AnimatePresence>
	);
}

export default App;
