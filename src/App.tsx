import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Products } from "./pages";
import Product from "./components/Product";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-[100dvh] text-text-dark flex flex-col items-center font-mono gap-5 overflow-x-clip">
				<div className="container h-full flex flex-col items-center gap-12 md:gap-20">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/:id" element={<Product />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
