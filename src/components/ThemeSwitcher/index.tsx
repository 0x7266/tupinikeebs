import { MouseEvent, useState } from "react";
import ComputerIcon from "./ComputerIcon";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

export function ThemeSwitcher() {
	const [currentTheme, setCurrentTheme] = useState<string>("system");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const themes = [
		{ name: "dark", icon: <MoonIcon /> },
		{ name: "light", icon: <SunIcon /> },
		{ name: "system", icon: <ComputerIcon /> },
	];

	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		setIsOpen((prev) => !prev);
		setCurrentTheme(e.currentTarget.name);
	}

	return (
		<div className="absolute flex border border-gray-950 rounded-full px-1 py-2">
			{themes.map((theme, index) => (
				<button
					key={index}
					onClick={handleClick}
					name={theme.name}
					className={`${
						isOpen ? "" : currentTheme === theme.name ? "" : "hidden"
					}`}
				>
					{theme.icon}
				</button>
			))}
		</div>
	);
}
