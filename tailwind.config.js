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
        dark: '#ece9e4',    // 莫蘭迪暖粉灰
        darker: '#f5f3f0',  // 莫蘭迪極淺灰底色
        card: '#ffffff',    // 白卡片背景
        primary: '#8ba19a', // 莫蘭迪灰綠 (低彩度優雅綠)
        accent: '#c0a9a0',  // 莫蘭迪乾燥玫瑰
        text: '#3b4348',    // 柔和的深灰文字
        muted: '#7d8995',   // 低對比的灰藍文字
      },
    },
  },
  plugins: [],
}
