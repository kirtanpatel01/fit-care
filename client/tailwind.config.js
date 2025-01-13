/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseLight: '#f1f5f9',
        baseDark: '#020617',
        baseLight50: '#f8fafc',
        baseDark900: '#0f172a',
        borderLight: '#94a3b8',
        hBlue: '#3b82f6',
        secondary: '#f97316'
      },
    },
  },
  plugins: [],
}

