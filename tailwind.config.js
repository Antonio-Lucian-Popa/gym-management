/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx,js,jsx}",
		"./node_modules/@radix-ui/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				// Minimalist color palette
				background: '#FFFFFF', // Alb
				foreground: '#000000', // Negru

				// Sidebar colors
				sidebar: {
					DEFAULT: '#FFFFFF', // Alb pentru fundal sidebar
					foreground: '#000000', // Negru pentru text
					primary: '#000000', // Negru pentru linkuri active
					'primary-foreground': '#FFFFFF', // Alb pentru text pe link activ
					accent: '#E5E7EB', // Gri deschis pentru hover
					'accent-foreground': '#000000', // Negru pe hover
					border: '#E5E7EB', // Gri deschis pentru borduri
					ring: '#6B7280', // Gri pentru focus rings
				},

				// General UI colors
				card: {
					DEFAULT: '#F9FAFB', // Alb murdar pentru fundal carduri
					foreground: '#000000' // Negru pentru text
				},
				primary: {
					DEFAULT: '#000000', // Negru
					foreground: '#FFFFFF' // Alb pentru text pe fundal negru
				},
				muted: {
					DEFAULT: '#F3F4F6', // Alb murdar pentru zone neutre
					foreground: '#6B7280' // Gri închis pentru text
				},
				accent: {
					DEFAULT: '#E5E7EB', // Gri deschis pentru accente
					foreground: '#000000' // Negru pe accente
				},
				border: '#E5E7EB', // Gri deschis pentru borduri
				input: '#F3F4F6', // Alb murdar pentru input-uri
				ring: '#6B7280', // Gri pentru focus rings
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
