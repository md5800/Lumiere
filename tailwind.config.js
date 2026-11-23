/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#163323',
          dark: '#0E2317',
          light: '#1F4331',
          hover: '#244e39',
          surface: '#122B1E'
        },
        gold: {
          DEFAULT: '#C59A58',
          dark: '#A87E3E',
          light: '#E5C492',
          soft: '#F4ECE1'
        },
        cream: {
          DEFAULT: '#FAF7F2',
          light: '#FDFBF7',
          dark: '#EFE9DE',
          muted: '#E6DECE'
        },
        sage: {
          DEFAULT: '#8F9E8B',
          light: '#EAF0E9',
          dark: '#677864'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        signature: ['"Alex Brush"', 'cursive'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        float: 'float 4s ease-in-out infinite',
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
