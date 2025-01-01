/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "backgroundImage": {
        "desktop-bg": ["url('/public/background-desktop.png')", "url('/public/image-avatar.jpg')"],
        "pattern-lines": "url('/public/pattern-lines.svg')",
      }
    },
  },
  plugins: [],
}

