/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				text: "#0f1a24",
				background: "#dbe6f0",
				primary: "#2c4b68",
				secondary: "#bbcfe2",
				accent: "#3f6a92",
				"text-dark": "#dbe6f0",
				"background-dark": "#0f1a24",
				"primary-dark": "#2c4b68",
				"secondary-dark": "#020304",
				"accent-dark": "#98b6d2",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
