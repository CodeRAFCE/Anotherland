/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				compactaLc: ["Compacta D OT Light Compress", "sans-serif"],
				compacta: ["Compacta D OT", "sans-serif"],
				modernGothic: ["modern-gothic", "sans-serif"],
				maisonMono: ["Maison Neue", "sans-serif"],
				maisonBook: ["Maison Neue Book", "sans-serif"],
			},
		},
	},
	plugins: [import("tailwindcss-animate")],
};
