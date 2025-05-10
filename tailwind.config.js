/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f2ff',
        neonPurple: '#b300ff',
        neonGreen: '#39ff14',
        darkBg: '#070707',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(0, 242, 255, 0.5), 0 0 10px rgba(0, 242, 255, 0.5)' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(0, 242, 255, 0.8), 0 0 20px rgba(0, 242, 255, 0.8), 0 0 30px rgba(0, 242, 255, 0.6)' 
          },
        },
      },
    },
  },
  plugins: [],
}
