/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-25": "#FCFCFD",
        "neutral-50": "#F8FAFC",
        "neutral-100": "#EEF2F6",
        "neutral-200": "#E3E8EF",
        "neutral-300": "#CDD5DF",
        "neutral-400": "#9AA4B2",
        "neutral-500": "#697586",
        "neutral-600": "#4B5565",
        "neutral-700": "#364152",
        "neutral-800": "#202939",
        "neutral-900": "#121926",
        "primary-25": "#F7E9FC",
        "primary-50": "#EFF4FF",
        "primary-100": "#D1E0FF",
        "primary-200": "#B2CCFF",
        "primary-300": "#84ADFF",
        "primary-400": "#528BFF",
        "primary-500": "#2970FF",
        "primary-600": "#155EEF",
        "primary-700": "#004EEB",
        "primary-800": "#0040C1",
        "primary-900": "#00359E",
        "secondary-25": "#F5F8FF",
        "secondary-50": "#EFF4FF",
        "secondary-100": "#D1E0FF",
        "secondary-200": "#B2CCFF",
        "secondary-300": "#84ADFF",
        "secondary-400": "#528BFF",
        "secondary-500": "#2970FF",
        "secondary-600": "#155EEF",
        "secondary-700": "#004EEB",
        "secondary-800": "#0040C1",
        "secondary-900": "#00359E",
        "success-25": "#F6FEF9",
        "success-50": "#EDFCF2",
        "success-100": "#D3F8DF",
        "success-200": "#AAF0C4",
        "success-300": "#73E2A3",
        "success-400": "#73E2A3",
        "success-500": "#16B364",
        "success-600": "#099250",
        "success-700": "#087443",
        "success-800": "#095C37",
        "success-900": "#084C2E",
        "error-25": "#FFFBFA",
        "error-50": "#FEF3F2",
        "error-100": "#FEE4E2",
        "error-200": "#FECDCA",
        "error-300": "#FDA29B",
        "error-400": "#F97066",
        "error-500": "#F04438",
        "error-600": "#D92D20",
        "error-700": "#B42318",
        "error-800": "#912018",
        "error-900": "#7A271A"
      },
      fontFamily: {
        "satoshi": "Satoshi",
        "satoshi-italic": "Satoshi-Italic",
        "satoshi-bold": "Satoshi-Bold"
      },
      fontSize: {
        "xs": "12px",
        "sm": "14px",
        "md": "16px",
        "lg": "18px",
        "xl": "20px",
        "display-xs": "24px",
        "display-sm": "30px",
        "display-md": "36px",
        "display-lg": "48px",
        "display-xl": "60px",
        "display-2xl": "72px",
      },
    },
  },
  plugins: [],
}

