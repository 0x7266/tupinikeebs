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
			animation: {
				tilt: "tilt 10s infinite linear",
			},
			keyframes: {
				tilt: {
					"0%, 50%, 100%": {
						transform: "rotate(0deg)",
					},
					"25%": {
						transform: "rotate(0.8deg)",
					},
					"75%": {
						transform: "rotate(-0.8deg)",
					},
				},
			},
			boxShadow: {
				large: "inset 0 0 15vh 15vh #000000dd",
				small: "inset 0 0 15rem 2vw #000000dd",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
