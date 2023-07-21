import { MouseEvent, ReactElement, useEffect, useState } from "react";
import ComputerIcon from "./ComputerIcon";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

type Theme = {
	name: string;
	icon: ReactElement;
};

export function ThemeSwitcher() {
	const [currentTheme, setCurrentTheme] = useState<string | null>(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
	);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [themes, setThemes] = useState<Theme[]>([
		{ name: "dark", icon: <MoonIcon /> },
		{ name: "light", icon: <SunIcon /> },
		{ name: "system", icon: <ComputerIcon /> },
	]);
	const doc = document.documentElement;

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

	console.log(window.matchMedia("(prefers-color-scheme: dark)"));

	function onWindowMatch() {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			doc.classList.add("dark");
		} else {
			doc.classList.remove("dark");
		}
	}
	onWindowMatch();

	useEffect(() => {
		switch (currentTheme) {
			case "dark":
				doc.classList.add("dark");
				localStorage.setItem("theme", "dark");
				break;
			case "light":
				doc.classList.remove("dark");
				localStorage.setItem("theme", "light");
				break;
			default:
				localStorage.removeItem("theme");
				onWindowMatch();
				break;
		}
	}, [currentTheme]);

	return (
		<div className="relative dark:bg-cyan-300">
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
