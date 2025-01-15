/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8002', // Redirect API calls to the backend
        changeOrigin: true,
      },
    },
  },
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
      animation: {
        slideUp: 'slideUp 0.3s ease-out',
        slideDown: 'slideDown 0.3s ease-in',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

