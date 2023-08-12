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
      'white': '#ffffff'
    },
    fontFamily: {
      'primary': ['Fira Sans', 'sans-serif'],
      'secondary' : ['Fira Code', 'monospace']
    },
    borderWidth: {
      '2': '2px'
    },
    extend: 
    {backgroundImage: {
      'hero': "url('/hero.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
    lineHeight: {
      'title': '0.68',
      '12': '3rem'
    },
  },
  plugins: [],
};

export default config;
