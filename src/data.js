export const personalInfo = {
  name: "陳廷瑋 (Ting-Wei Chen)",
  title: "Software Engineer",
  email: "kino87654@gmail.com",
  phone: "0965-359-739",
  location: "臺中市西屯區惠來路三段 218號9樓之 2",
  github: "https://github.com/tingwei1231",
  linkedin: "https://www.linkedin.com/in/tingwei1231/",
  about: "性格開朗且熱衷於結合最新技術解決實際問題。在多個專案中擔任核心開發與領導角色，從全端系統架構到 AI 輔助應用皆有實務經驗。",
  resumeUrl: "./resume.pdf",
  imgUrl: "./tingwei.JPG"
};

export const education = [
  {
    date: "2023/09 – 2025/07",
    title: "資訊工程所 碩士",
    institution: "國立中山大學",
    description: "參與資料庫系統實驗室，專注於資料探勘與增量資料庫研究。擔任資料庫系統課程助教。"
  },
  {
    date: "2019/09 – 2023/06",
    title: "資訊科學系 學士",
    institution: "國立臺北教育大學",
    description: "擔任系學會長，百人聯合迎新總召以及系排球隊隊長。負責統籌大型營隊、分配預算與跨部門溝通，具備高度抗壓性、團隊領導與專案管理能力。"
  }
];

export const experience = [
  {
    date: "2020-Recent",
    title: "排球賽事負責人",
    institution: "傳承盃排球錦標賽",
    description: "舉辦六屆傳承盃排球錦標賽，負責賽事規劃、隊伍招募、場地安排、裁判排班與賽事進行等相關事宜。"
  },
  {
    date: "2024",
    title: "技術合作夥伴",
    institution: "台灣耳鼻喉頭頸外科醫學會",
    description: "協助開發學術演講會雙平台 (iOS/Android) 專屬 APP，提供與會者良好流暢的數位互動體驗。"
  },
  {
    date: "2025",
    title: "程式指導",
    institution: "高中小論文 (校園最佳路徑)",
    description: "指導學弟使用 Python 實作 Dijkstra 演算法應用於校園導航，提高新生與訪客尋找教室效率。"
  },
  {
    date: "2019 – 2023",
    title: "系學會會長 / 聯合迎新總召",
    institution: "國立臺北教育大學 資訊科學系",
    description: "擔任系學會長、百人聯合迎新總召以及系排球隊隊長。負責統籌大型營隊、分配預算與跨部門溝通，具備高度抗壓性、團隊領導與專案管理能力。"
  }
];

export const skills = {
  "基本語言": ["C++", "Java", "Python"],
  "AI & 自然語言處理": ["LLM", "RAG", "LangGraph"],
  "語音與影像處理": ["STT", "VAD", "OpenCV"],
  "行動應用": ["Android Studio", "Swift"],
  "前端開發": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  "後端開發": ["PHP", "MySQL"]
};

export const research = [
  {
    title: "一個基於有效率的 Period-LS-List 方法用於探勘增量資料庫中特定時間段內的前 k個高上架效用項目集",
    description: "利用 Period-LS-List 的資料結構有效的從增量資料庫中探勘高上架效用項目集，以模擬真實的市場銷售狀況。",
    venue: "碩士論文"
  },
  {
    title: "ICEIB Oral Presentation",
    description: "國際研討會口頭發表經驗 (資料庫系統領域，探討研究領域：資料探勘)。",
    venue: "ICEIB"
  }
];

export const projects = [
  {
    id: 1,
    date: "2026/02 – 2026/03",
    title: "TOmni-Care 台語語音助理",
    tags: ["LLM", "Python", "Faster-Whisper", "RAG", "Bert-VITS2", "LangGraph"],
    description: "結合 LangGraph 狀態機與 RAG 醫療知識庫，開發支援台語 ASR/TTS 與情緒感知功能的低延遲 AI 語音照護助理。",
    link: "https://github.com/tingwei1231/tomni-care",
    imgUrl: "./TOmin-Care.png"
  },
  {
    id: 2,
    date: "2024/10 – 2024/11",
    title: "雙平台醫學會學術演講會 APP",
    tags: ["Android Studio", "Swift", "MySQL"],
    description: "開發支援 iOS 與 Android 的學術演講 APP，提供日程、交通、講座資訊，提升參與者的體驗。",
    link: "",
    type: "album",
    gallery: [
      "./tsohns117.jpg",
      "./tsohns-index.PNG",
      "./tsohns-info.PNG",
      "./tsohns-keynote speech1.PNG",
      "./tsohns-keynote speech2.PNG",
      "./tsohns-moderator.PNG",
      "./tsohns-search.PNG",
      "./tsohns-session.PNG",
      "./tsohns-speaker.PNG"
    ],
    imgUrl: "./tsohns117.jpg"
  },
  {
    id: 3,
    date: "2025/02 – 2025/06",
    title: "課程預約系統",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    description: "用 PHP 結合 MySQL 讓課堂學生可線上預約助教課的作業 Demo 及小考時段，提高教學管理效率，HTML 結合 CSS 及 Bootstrap 優化界面美觀。",
    link: "",
    imgUrl: "./demo.png"
  },
  {
    id: 4,
    date: "2026/01 – 2026/02",
    title: "傳承盃排球錦標賽網站",
    tags: ["HTML", "CSS", "Vibe Coding"],
    description: "開發一套以 Google Sheets 為資料來源的 Serverless 排球賽事即時資訊看板系統，提供比分、賽程與裁判排班同步顯示。",
    link: "https://sites.google.com/view/volleyballtorchchampionship",
    type: "album",
    gallery: [
      "./volleyballtorch.png",
      "./volleyballtorch-1.png",
      "./volleyballtorch-2.png"
    ],
    imgUrl: "./volleyballtorch.png"
  },
  {
    id: 5,
    date: "2022/07 – 2022/12",
    title: "排球戰術追蹤研究",
    tags: ["Python", "Image Processing", "OpenCV"],
    description: "利用 OpenCV 辨識排球比賽影片中球員的戰術，並將球員轉換為 2D 俯視圖，幫助新手理解比賽戰術。(專題成果展 第二名)",
    link: "",
    type: "album",
    gallery: [
      "./volleyballtracker.png",
      "./volleyballtracker-1.png",
      "./volleyballtracker-2.png",
      "./volleyballtracker-3.png"
    ],
    imgUrl: "./volleyballtracker.png"
  },
  {
    id: 6,
    date: "2024/09 – 2025/07",
    title: "臨床醫學博士學位學程網頁維護",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description: "協助維護臨床醫學博士學位學程網頁，維護網頁運作，更新公告與教授論文資料以及修正網頁模板。",
    link: "https://dpcem.nsysu.edu.tw/?Lang=zh-tw",
    imgUrl: "./dpcem.png"
  },
  {
    id: 7,
    date: "2025/02 – 2025/07",
    title: "國立中山大學未來學生網頁維護",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description: "協助維護國立中山大學未來學生網頁，提供新生良好的資訊獲取管道。",
    link: "https://hs.nsysu.edu.tw/",
    imgUrl: "./hsnsysu.png"
  },
];
