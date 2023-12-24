import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      }
    },
    minHeight: {
      "main": "calc(100vh - 132px)",
      "carsouel": "calc(100vh - 104px)"
    },
    fontFamily: {
      'body': [
        'system-ui',
        '-apple-system',
        'Roboto',
        'Segoe UI',
        'Helvetica Neue',
        "Arial",
        "Noto Sans",
        'Inter',
        "Liberation Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ],
      'sans': [
        'system-ui',
        '-apple-system',
        'Roboto',
        'Segoe UI',
        'Helvetica Neue',
        "Arial",
        "Noto Sans",
        'Inter',
        "Liberation Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ]
    },
    animation: {
      wiggle: 'bounceLoading 1s ease-in-out infinite',
    },
    keyframes: {
      bounceLoading: {
        '0%': {
          left: '-30px',
          top: "-30px",
          height: '5px',
          borderRadius: '0%',
          transform: 'scaleX(2)'
        },
        '35%': {
          height: '15px',
          borderRadius: '50%',
          transform: 'scaleX(1)'
        },
        '100%': {
          left: '0px',
          top: '0px'
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
export default config
