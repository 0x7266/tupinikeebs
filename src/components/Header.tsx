export function Header() {
	return (
		<div className="flex justify-around items-center">
			<div className="text-6xl">⌨</div>
			<nav className="flex gap-6 text-xl font-semibold">
				<a href="">Products</a>
				<a href="">About</a>
				<a href="">Contact</a>
			</nav>
		</div>
	);
}
