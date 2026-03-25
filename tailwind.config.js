/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enable dark mode via class
  theme: {
    extend: {
      colors: {
        dark: '#d6d0c4',    // 較深一點的莫蘭迪暖卡其/灰
        darker: '#e4dece',  // 較深一點的莫蘭迪底色，帶有溫暖質感
        card: '#fcfbf9',    // 保留接近純白的卡片，增加立體層次對比
        primary: '#768c85', // 更深一點的莫蘭迪灰綠
        accent: '#ab958b',  // 更深一點的乾燥玫瑰
        text: '#2d3338',    // 加深文字對比
        muted: '#6a767f',   // 柔和灰文字
      },
    },
  },
  plugins: [],
}
