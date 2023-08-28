import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // min-width
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'pink': '#fdc2e4',
      'purple': '#dcaae4',
      'green': '#78ffc4',
      'beige': '#faf3de',
      'white': '#ffffff',
      'red': '#ff0000',
      'black': '#000000',
    },
    fontFamily: {
      'primary': ['Fira Sans', 'sans-serif'],
      'secondary': ['Fira Code', 'monospace']
    },
    borderWidth: {
      '2': '2px'
    },
    safelist: ['animate-[fade-in-left_1s_ease-in-out]', 'animate-[fade-in-right_1s_ease-in-out]'],
    extend: {
      backgroundImage: {
        'hero': "url('../public/hero.png')",
        'sprinkles': "url('../public/sprinkles.png')",
      },
      lineHeight: {
        'title': '0.68',
        '12': '3rem'
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      variants: {
        animation: ['motion-safe']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

};


export default config;