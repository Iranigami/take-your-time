/** @type {import('tailwindcss').Config} */




export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': 'Montserrat',
      'inter': 'Inter',
      'audiowide': 'Audiowide',
      'playwrite': 'Playwrite IN',
      'miki': 'Miki Nice Ainjoo'
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '2.075rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    boxShadow: {
      'the-shad':'inset 0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      'menu': '0 6px 6px 6px rgb(0 0 0 / 0.1)',

    },
    colors: {
      'aspide-blue': '#5752D8',
      'very-white': '#FFFFFF',
      'very-black': '#000000',
      'kinda-gray': '#F9F8FE',
      'kinda-light-blue': '#F4F6FF',
      'dark-aspide': '#4E4AB4',
      'light-aspide': '#9FADFC',
      'almost-white': '#FAFAFA',
    },
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(25%)' },
          '100%': { transform: 'translateY(-25%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)',  opacity: 0 },
          '100%': { transform: 'translateX(0)',  opacity: 1 },
				},
        slideRight: {
          '0%': { transform: 'translateX(100%)',  opacity: 0 },
          '100%': { transform: 'translateX(0)',  opacity: 1 },
				},
      }
      
    }
  },
  
  plugins: [],
}