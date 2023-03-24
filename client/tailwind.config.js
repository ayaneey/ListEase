const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				xs: { min: "0px", max: "640" },
				sm: "640px",
				md: "768px",
				lg: "1024px",
			},
			colors: {
				"brand-primary": "#6AC8B7",
				"brand-secondary": "#2A2A31",
				"brand-base": "#D9D9D9",
				"green-custom": "rgba(106, 200, 183, 1)",
			},

			fontFamily: {
				openSans: ["var(--openSans-font)", ...fontFamily.sans],
				roboto: ["var(--roboto-font)", ...fontFamily.sans],
				poppins: ["var(--poppins-font)", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
