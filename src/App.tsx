import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Products } from "./pages";
import Product from "./components/Product";

function App() {
	return (
		<AnimatePresence>
			<BrowserRouter>
				<div className="bg">
					<div className="backdrop-brightness-[20%] min-h-[100dvh] shadow-small md:shadow-large">
						<div className="container mx-auto h-full py-5 flex flex-col items-center gap-12 md:gap-20 text-text-dark font-mono">
							<Header />
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
