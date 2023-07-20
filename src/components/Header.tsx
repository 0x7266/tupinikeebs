import { Link } from "react-router-dom";
export function Header() {
	return (
		<div className="flex justify-around items-center">
			<div className="text-6xl">⌨</div>
			<nav className="flex items-baseline text-xl font-semibold gap-6">
				<Link to="/products">Products</Link>
				<Link to="/about">About</Link>
				<Link to="/faq">FAQ</Link>
				<div className="text-4xl">🛒</div>
			</nav>
		</div>
	);
}
