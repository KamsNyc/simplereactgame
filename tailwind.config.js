/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald-400)', 'var(--font-oswald-700)'], // Use your preferred Oswald font weights here
        lato: ['var(--font-lato-400)', 'var(--font-lato-700)'], // Use your preferred Lato font weights here
      },
      fontWeight: {
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
      },
    },
  },
  plugins: [],
}
