import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'content-primary': '#FFFFFF',
        'content-secondary': '#98959D',
        'content-tertiary': '#666666',
        'content-brand': '#9282FA',
        'background-primary': '#151515',
        'background-secondary': '#1E1E1E',
        'background-tertiary': '#23242C',
        'background-brand': '#9282FA',
        'background-highlights': '#BDB4FA',
        'border-primary': '#3E3C41',
        'border-secondary': '#86818C',
        'border-brand': '#9282FA',
        'border-divisor': '#353339',
        'accent-blue': '#027DF0',
        'accent-blue-light': '#16487A',
        'accent-yellow': '#F0DC02',
        'accent-yellow-light': '#756E1B',
        'accent-orange': '#F09102',
        'accent-orange-light': '#75501B'
      },
      fontFamily: {
        'tight': ['Inter Tight', 'sans-serif'],
        'familjen-grotesk': ['Familjen Grotesk', 'sans-serif']
      },
      gridTemplateColumns: {
        list: 'auto repeat(3, minmax(0, 1fr))'
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};
export default config
