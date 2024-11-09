/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				rotate180: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(180deg)" },
				},
				rotate360: {
					"0%": { transform: "rotate(180deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				"fade-in-bounce-left": {
					"0%": {
						opacity: 0,
						transform: "translate3d(-100%, 0%, 0)",
					},
					"33%": {
						opacity: 0.5,
						transform: "translate3d(0%, 0%, 0)",
					},
					"66%": {
						opacity: 0.7,
						transform: "translate3d(-20%, 0%, 0)",
					},
					"100%": {
						opacity: 1,
						transform: "translate3d(0, 0, 0)",
					},
				},
			},
			animation: {
				rotate180: "rotate180 0.3s ease-in-out",
				rotate360: "rotate360 0.3s ease-in-out",
				fadeinbounceleft: "fade-in-bounce-left 1s ease-in-out",
			},
		},
	},
	plugins: [],
};
