export function Header() {
	return (
		<div className="flex justify-around items-center">
			<div className="text-6xl">⌨</div>
			<nav className="flex items-center text-xl font-semibold gap-6">
				<a href="">Products</a>
				<a href="">About</a>
				<a href="">Contact</a>
				<div className="text-4xl">🛒</div>
			</nav>
		</div>
	);
}
