import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        sunshine: '#FFC83D',
        navy: '#172B55',
        aqua: '#65C7D0',
        coral: '#FF9F70',
        'brand-coral': '#FF5733',
        mint: '#8BCF9B',
        blush: '#F4B6CF',
        surface: '#F8FAFC',
        'soft-blue': '#EFF6FF',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        baloo: ['"Baloo 2"', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        hand: ['"Patrick Hand"', 'cursive', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
