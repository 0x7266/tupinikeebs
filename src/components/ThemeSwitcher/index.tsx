import { MouseEvent, ReactElement, useState } from "react";
import ComputerIcon from "./ComputerIcon";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

type Theme = {
	name: string;
	icon: ReactElement;
};

export function ThemeSwitcher() {
	const [currentTheme, setCurrentTheme] = useState<string>("system");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [themes, setThemes] = useState<Theme[]>([
		{ name: "dark", icon: <MoonIcon /> },
		{ name: "light", icon: <SunIcon /> },
		{ name: "system", icon: <ComputerIcon /> },
	]);

	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		const themeName = e.currentTarget.name;
		setIsOpen((prev) => !prev);
		setCurrentTheme(themeName);
		setThemes((prev) => [
			themes.find((theme) => theme.name === themeName)!,
			...prev.filter((theme) => theme.name !== themeName),
		]);
	}

	return (
		<div className="relative">
			<div className="absolute flex flex-col border border-gray-950 rounded-full px-2 py-2">
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
		</div>
	);
}
