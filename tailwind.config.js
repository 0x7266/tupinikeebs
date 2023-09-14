/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				text: "#dbe6f0",
			},
			fontFamily: {
				one: ["Intel One Mono", "monospace"],
			},
			boxShadow: {
				large: "inset 0 0 18vh 20vh #000000dd",
				small: "inset 0 0 15rem 2vw #000000dd",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
