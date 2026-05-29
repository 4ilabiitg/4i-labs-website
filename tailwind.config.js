/** @type {import('tailwindcss').Config} */
/*module.exports = {
  content: ["./src/***.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyberDark: '#0a0a12',
        cyberCard: 'rgba(16, 16, 28, 0.65)',
        neonBlue: '#00f0ff',
        neonPurple: '#bd00ff',
        textMain: '#e2e8f0',
        textMuted: '#8a99ad',
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapping your custom CSS properties directly into Tailwind syntax
        cyberDark: 'var(--bg)',
        cyberCard: 'var(--code-bg)',
        neonBlue: 'var(--accent)',
        neonPurple: '#bd00ff', // Keeping the deep purple accent accentuation
        textMain: 'var(--text-h)',
        textMuted: 'var(--text)',
        borderColor: 'var(--border)',
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'], // For that sharp quantum look
        body: ['Rajdhani', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
      boxShadow: {
        cyber: 'var(--shadow)',
      }
    },
  },
  plugins: [],
}