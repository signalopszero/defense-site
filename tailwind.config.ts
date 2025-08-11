import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1220',
        secondary: '#2B3340',
        accent: '#3B82F6',
        foreground: '#FFFFFF',
        muted: 'rgba(248,250,252,0.8)'
      },
      borderRadius: {
        'lg': '0.75rem',
        'md': '0.5rem'
      }
    }
  },
  plugins: []
}

export default config