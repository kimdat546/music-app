/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "app": "0 0 0 10px #e9ebec, 0 0 0 11px #fcfdfe",
        "avt": "0 8px 10px -4px rgba(0, 0, 0, 0.2)",
        "avt-md": "0 12px 14px -4px rgba(0, 0, 0, 0.3)",
        "pin": "0 0 0 2px #fff, 0 0 0 3px #1d1d1d",
      },
      colors: {
        "black": "#1d1d1d",
        "red": "#ea605e",
        "background": "#e3e4ea",
        "text": "#5f5f5f",
        "bell": "#454545",
        "menu": "#2ab3c0",
        "gray-light": "#fbf8f2",
        "yellow": "#f9bc73",
        "green": "#80b895",
        "green-light": "#bad5ca",
      },
      width: {
        "app": "460px",
        "card": "180px",
        "pin": "12px",
        "avt": "48px",
        "avt-md": "60px",
        "badge": "20px",
      },
      height: {
        "pin": "12px",
        "avt": "48px",
        "avt-md": "60px",
        "badge": "20px",
      },
      minWidth: {
        "app": "460px",
      },
      borderRadius: {
        "sm": "15px",
        "md": "20px",
        "lg": "25px",
      },
      aspectRatio: {
        'image': '4 / 3',
      },
    },
  },
  plugins: [],
}
