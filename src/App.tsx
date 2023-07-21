import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Products } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<div className="h-[100dvh] bg-zinc-200 dark:bg-slate-600 flex flex-col items-center">
				<div className="container flex flex-col gap-10">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;