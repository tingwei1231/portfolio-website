# 個人作品集網站 (Personal Portfolio Website) 技術說明書

這份說明書彙整了本專案的技術細節與架構設計，可用於面試時向面試官展現你的全端/前端開發能力、架構理解能力與實務經驗。

## 1. 專案總覽 (Project Overview)

這是一個以現代前端技術打造的響應式個人作品集網站。其主要目的是將個人經歷、技能、專案成果以模組化、高互動性且視覺舒適的方式展示，並展現自身具備打造現代化網頁應用的能力。

*   **專案性質:** 靜態單頁面應用 (SPA, Single Page Application)
*   **介面風格:** 暗黑/莫蘭迪色系 (Dark/Morandi color palette) 主題，具有大量漸變與微動畫提升使用者體驗。
*   **部署方式:** 自製 Node.js 腳本部署至 GitHub Pages

## 2. 核心技術選型 (Tech Stack)

*   **核心框架:** React 18
*   **建置工具:** Vite (提供極速的冷啟動與 HMR)
*   **樣式處理:** Tailwind CSS v3 (Utility-first CSS 框架)
*   **圖示庫:** lucide-react (輕量級 SVG 圖示庫)

**面試亮點說明:**
> **為什麼選用 Vite 而不是傳統的 Create React App (CRA)？**
> Vite 基於原生 ES 模組，大幅提升了冷啟動及模組熱替換(HMR) 的速度，讓我在開發階段能更高效地預覽與除錯。
> 
> **Tailwind CSS 帶來的好處？**
> 以 Utility-First 的方式撰寫可以避免 class 名稱衝突或維護龐大 css 檔案的問題，並能快速實現例如暗黑模式，或卡片互動的漸層 / hover 動畫 (微互動設計)。

## 3. 架構設計：關注點分離 (Separation of Concerns)

專案在架構上落實了「資料與介面分離」的設計模式，大幅提高了系統的可維護性：

### 3.1. 資料模組獨立 (`src/data.js`)
將所有經常變動的資訊 (如個人資料、學經歷、技能清單、專案列表) 皆抽離在一份獨立的 JavaScript Oject/Array 匯出檔中。
*   **優勢:** 未來若需新增經歷或專案，**完全不需要改動任何 React Component 的程式碼**。只需在 `data.js` 新增一筆 JSON 格式資料，前台就會自動 mapping 渲染，具備極高的擴展性。

### 3.2. 視圖層組件化 (`src/components/*`)
這是一個以組件驅動 (Component-Driven) 的設計，並由 `App.jsx` 統籌調度：
*   **`Hero.jsx`**: 結合個人資訊、歡迎語及載入履歷功能的視覺焦點區塊，使用 absolute 定位做出環境光暈特效。
*   **`Projects.jsx`**: 最具技術含量的視圖，處理了動態專案卡的渲染，並自行封裝了一個 Lightbox 圖片預覽器。
*   **`Experience.jsx`, `Skills.jsx`, `Research.jsx`**: 將 `data.js` 的內容 mapping 出帶有 icon 與統一風格的條目。

## 4. 重點技術與機制實作 (Key Technical Implementations)

### 4.1. React Hooks 實作無依賴的響應式預覽模塊 (LightBox/Modal)
*展現不依靠第三方 jQuery / React Lightbox 套件的實作能力。*
在 `Projects.jsx` 中，我利用 React 狀態機制獨立封裝了專案相簿：
*   **狀態管理 (`useState`):** 記錄 `selectedProject` 控制 Modal 顯示狀態；記錄 `currentImageIndex` 控制相簿圖片的切換進度。
*   **事件攔截 (Event Bubble Handling):** 面臨「點選背景需關閉視窗，點擊內容區不能關閉」的需求，在 Modal 內部運用了 `e.stopPropagation()` 阻擋點擊冒泡，成功控制 DOM tree 中的事件傳遞流。
*   **循環輪播:** 撰寫了 prev/next 功能，透過判斷 `gallery.length` 實作自動循環 (圖片到第一張或最後一張時自動跳轉)。

### 4.2. 響應式排版 (RWD) 與微互動 (Micro-interaction)
*   **Grid 排版:** 善用 Tailwind 的 `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`，輕巧地適配從手機、平板到桌機的卡片排列。
*   **進階動效:** 卡片 `hover:-translate-y-2` 以及 `group-hover` 控制子元件的行為 (例如圖片略大、按鈕浮現)，大幅增加現代網頁質感。
*   **毛玻璃特效 (Glassmorphism):** 大量使用 `backdrop-blur` 搭配半透明背景色，形塑高品質的浮層質感 (應用在 Navbar 與 Modal 背景)。

## 5. 面試常問 Q&A (建議回答策略)

**Q1: 如果你的作品資料 (Projects) 日後增加到上百筆，這個專案該如何優化？**
> **回答策略:** 目前所有的圖片和資料都會在首次載入時全部抓取，若資料變龐大，頁面載入效能會下降。
> 我會進行三項優化：
> 1. **資料分頁 (Pagination) 或者是無限捲動 (Infinite Scroll):** 控制首屏只渲染 6~9 張專案卡。
> 2. **圖片懶加載 (Lazy Loading):** 利用原生的 `loading="lazy"` 或 Intersection Observer API，滑動到可見區域再載入實際圖片。
> 3. 從靜態 json 拆分出來整合 **Headless CMS** 或配合 Next.js 採用 SSG (靜態生成)。

**Q2: 為什麼狀態管理只用了 `useState`，沒有考慮 Redux、Zustand 或 Context API？**
> **回答策略:** 本作品集偏向資料展示型的單頁應用，狀態的生命週期往往都在單一個組件內就可以完全消化 (例如：開關 Modal 或輪播照片都在 `Projects` 層)，沒有嚴重的 "Prop Drilling" (多層參數傳遞) 問題。為避免過度設計 (Over-engineering) 並維持作品集的輕量化，直接依賴 `useState` 是最合適的解法。

**Q3: 在網頁的部署過程中，有遇到什麼挑戰嗎？**
> **回答策略:** 在部署至 GitHub Pages 時，偶爾會遇到路徑或編譯的小狀況。專案內部的 `package.json` 寫了一套自製 `deploy.js` 腳本，就是用來自動化打包 `vite build` 與推送 `gh-pages`，解決每次還要手動下指令的痛點。

## 6. 總結亮點

這份專案雖然是前端 SPA，卻能證明幾點核心職能：
1. **注重架構整潔與可維護性** (Data vs Component 完美分離)。
2. **不用套件也能親手實踐前端邏輯** (自刻 Modal 和 Carousel)。
3. **對現代化工具鏈的最佳實務應用** (React 18 + Vite + Tailwind)。
