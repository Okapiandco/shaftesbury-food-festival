import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003D82',
          light: '#0056b3',
          dark: '#002a5c',
        },
        secondary: {
          DEFAULT: '#00B4D8',
          light: '#48CAE4',
          dark: '#0096C7',
        },
        accent: {
          DEFAULT: '#FFB81C',
          light: '#FFC94D',
          dark: '#E6A000',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
          muted: '#999999',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}

export default config
