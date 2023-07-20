import { Header } from "./components";
import { Home } from "./pages";

function App() {
	return (
		<div className="h-[100dvh] bg-zinc-200 flex flex-col items-center">
			<div className="container flex flex-col gap-10">
				<Header />
				<Home />
			</div>
		</div>
	);
}

export default App;
