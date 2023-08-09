import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Products } from "./pages";
import Product from "./components/Product";

function App() {
	return (
		<BrowserRouter>
			<div className="bg-pattern min-h-screen">
				<div className="min-h-[100dvh] bg-opacity-80 dark:bg-opacity-90 bg-background text-text dark:bg-background-dark dark:text-text-dark flex flex-col items-center font-mono gap-5 overflow-hidden backdrop-blur-[10px]">
					<div className="container h-full py-5 flex flex-col items-center gap-12 md:gap-20">
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
	);
}

export default App;
