export const personalInfo = {
  name: "陳廷瑋 (Ting-Wei Chen)",
  title: "Software Engineer / AI & Backend Developer",
  email: "kino87654@gmail.com",
  phone: "0965-359-739",
  location: "臺中市西屯區惠來路三段 218號9樓之 2",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  about: "具備 AI 語音處理、後端開發與軟體工程經驗的研發工程師，性格開朗且熱衷於結合最新技術解決實際問題。曾在多個專案中扮演核心開發與領導角色，從全端系統架構到 AI 輔助應用皆有落實產出的實務經驗。",
  resumeUrl: "/resume.pdf" 
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
    description: "具備扎實資工基礎，並熱心參與校園社團與系上活動。"
  }
];

export const experience = [
  {
    date: "Recent",
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
  "行動應用": ["Android Studio", "Swift"],
  "前端開發": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  "後端開發": ["PHP", "MySQL"],
  "語音與影像處理": ["STT", "VAD", "OpenCV"]
};

export const research = [
  {
    title: "一個基於有效率的 Period-LS-List 方法用於探勘增量資料庫中特定時間段內的前 k個高上架效用項目集",
    description: "利用 Period-LS-List 的資料結構有效的從增量資料庫中探勘高上架效用項目集，以模擬真實的市場銷售狀況。",
    venue: "碩士論文 / 研究計畫"
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
    title: "TOmni-Care 台語語音助理",
    tags: ["LLM", "Python", "Faster-Whisper", "RAG", "Bert-VITS2", "LangGraph"],
    description: "結合 LangGraph 狀態機與 RAG 醫療知識庫，開發支援台語 ASR/TTS 與情緒感知功能的低延遲 AI 語音照護助理。",
    link: "https://github.com/yourusername/tomni-care", 
    imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  },
  {
    id: 2,
    title: "雙平台醫學會學術演講會 APP",
    tags: ["Android Studio", "Swift", "MySQL"],
    description: "開發支援 iOS 與 Android 的學術演講 APP，提供日程、交通、講座資訊，提升參與者的體驗。",
    link: "https://github.com/yourusername",
    imgUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "課程預約系統",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    description: "用 PHP 結合 MySQL 讓課堂學生可線上預約助教課的作業 Demo 及小考時段，提高教學管理效率，HTML 結合 CSS 及 Bootstrap 優化界面美觀。",
    link: "https://github.com/yourusername",
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "傳承盃排球錦標賽網站",
    tags: ["HTML", "CSS", "Vibe Coding"],
    description: "開發一套以 Google Sheets 為資料來源的 Serverless 排球賽事即時資訊看板系統，提供比分、賽程與裁判排班同步顯示。",
    link: "https://github.com/yourusername",
    imgUrl: "https://images.unsplash.com/photo-1593789189873-1070ff306fbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "排球戰術追蹤研究",
    tags: ["Python", "Image Processing", "OpenCV"],
    description: "利用 OpenCV 辨識排球比賽影片中球員的戰術，並將球員轉換為 2D 俯視圖，幫助新手理解比賽戰術。(專題成果展 第二名)",
    link: "https://github.com/yourusername",
    imgUrl: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];
