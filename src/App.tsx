import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

function App() {
	return (
		<AnimatePresence>
			<BrowserRouter>
				<div className="bg min-h-[100dvh] overflow-hidden">
					<div className="backdrop-brightness-[20%] shadow-small md:shadow-large">
						<div className="container mx-auto py-5 flex flex-col gap-12 items-center font-mono text-text-dark min-h-screen">
							<Header />
							<Hero />
							<Carousel />
						</div>
					</div>
				</div>
			</BrowserRouter>
		</AnimatePresence>
	);
}

export default App;
