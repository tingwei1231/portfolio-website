const zh = {
  personalInfo: {
    name: "陳廷瑋 (Ting-Wei Chen)",
    title: "Software Engineer",
    email: "kino87654@gmail.com",
    phone: "0965-359-739",
    location: "臺中市西屯區惠來路三段 218號9樓之 2",
    github: "https://github.com/tingwei1231",
    linkedin: "https://www.linkedin.com/in/tingwei1231/",
    about: "性格開朗且熱衷於結合最新技術解決實際問題。在多個專案中擔任核心開發與領導角色，從全端系統架構到 AI 輔助應用皆有實務經驗。",
    resumeUrl: "./twCV Ting-Wei Chen.pdf",
    imgUrl: "./tingwei.JPG"
  },
  education: [
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
  ],
  experience: [
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
  ],
  skills: {
    "基本語言": ["C++", "Java", "Python"],
    "AI & 自然語言處理": ["LLM", "RAG", "LangGraph"],
    "語音與影像處理": ["STT", "VAD", "OpenCV"],
    "行動應用": ["Android Studio", "Swift"],
    "前端開發": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "後端開發": ["PHP", "MySQL"]
  },
  research: [
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
  ],
  projects: [
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
      tags: ["LLM", "LINEBOT", "HTML", "CSS", "JavaScript"],
      description: "開發結合Google 試算表與AI 協作的輕量化排球賽事即時資訊系統，提供比分、賽程與裁判排班同步顯示，解決球員對賽事進度與分組排名的資訊落差問題。並設計LINE BOT AI 小助手，協助解答賽程相關問題，有效減少人力資源投入。",
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
    }
  ]
};

const en = {
  personalInfo: {
    name: "Ting-Wei Chen",
    title: "Software Engineer",
    email: "kino87654@gmail.com",
    phone: "0965-359-739",
    location: "9F.-2, No. 218, Sec. 3, Huilai Rd., Xitun Dist., Taichung City",
    github: "https://github.com/tingwei1231",
    linkedin: "https://www.linkedin.com/in/tingwei1231/",
    about: "An outgoing individual passionate about applying the latest technologies to solve real-world problems. Experienced as a core developer and leader in multiple projects, with practical expertise ranging from full-stack system architecture to AI-assisted applications.",
    resumeUrl: "./enCV Ting-Wei Chen.pdf",
    imgUrl: "./tingwei.JPG"
  },
  education: [
    {
      date: "2023/09 – 2025/07",
      title: "M.S. in Computer Science",
      institution: "National Sun Yat-sen University",
      description: "Participated in the Database Systems Lab, focusing on data mining and incremental database research. Served as a teaching assistant for the Database Systems course."
    },
    {
      date: "2019/09 – 2023/06",
      title: "B.S. in Computer Science",
      institution: "National Taipei University of Education",
      description: "Served as the president of the Student Association, chief coordinator of a 100-person joint orientation camp, and captain of the department's volleyball team. Responsible for organizing large-scale camps, budgeting, and cross-departmental communication. Highly resilient with strong team leadership and project management skills."
    }
  ],
  experience: [
    {
      date: "2020-Recent",
      title: "Tournament Director",
      institution: "Volleyball Torch Championship",
      description: "Organized six editions of the Torch Volleyball Championship. Responsible for tournament planning, team recruitment, venue arrangement, referee scheduling, and event execution."
    },
    {
      date: "2024",
      title: "Technical Partner",
      institution: "Taiwan Society of Otolaryngology Head and Neck Surgery",
      description: "Assisted in developing an exclusive dual-platform (iOS/Android) APP for the academic conference, providing attendees with a smooth and responsive digital interactive experience."
    },
    {
      date: "2025",
      title: "Programming Instructor",
      institution: "High School Thesis (Optimal Campus Path)",
      description: "Guided a junior student in using Python to implement Dijkstra's algorithm for campus navigation, improving the efficiency of freshmen and visitors in locating classrooms."
    },
    {
      date: "2019 – 2023",
      title: "Student Association President / Orientation Camp Coordinator",
      institution: "Dept. of Computer Science, NTUE",
      description: "Served as the president of the Student Association, chief coordinator of a 100-person joint orientation camp, and captain of the department's volleyball team. Responsible for organizing large-scale camps, budgeting, and cross-departmental communication."
    }
  ],
  skills: {
    "Basic Languages": ["C++", "Java", "Python"],
    "AI & NLP": ["LLM", "RAG", "LangGraph"],
    "Voice & Image Processing": ["STT", "VAD", "OpenCV"],
    "Mobile Apps": ["Android Studio", "Swift"],
    "Front-End": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "Back-End": ["PHP", "MySQL"]
  },
  research: [
    {
      title: "An Efficient Period-LS-List-Based Approach for Mining Top-k High On-Shelf Utility Itemsets within Specific Time Periods in Incremental Databases",
      description: "Utilized the Period-LS-List data structure to efficiently mine high on-shelf utility itemsets from incremental databases, simulating real-world market sales scenarios.",
      venue: "Master's Thesis"
    },
    {
      title: "ICEIB Oral Presentation",
      description: "Oral presentation experience at an international conference (Database Systems field, focusing on Data Mining).",
      venue: "ICEIB"
    }
  ],
  projects: [
    {
      id: 1,
      date: "2026/02 – 2026/03",
      title: "TOmni-Care Taiwanese Voice Assistant",
      tags: ["LLM", "Python", "Faster-Whisper", "RAG", "Bert-VITS2", "LangGraph"],
      description: "Integrated LangGraph state machine with a RAG medical knowledge base to develop a low-latency AI voice care assistant supporting Taiwanese ASR/TTS and emotion awareness.",
      link: "https://github.com/tingwei1231/tomni-care",
      imgUrl: "./TOmin-Care.png"
    },
    {
      id: 2,
      date: "2024/10 – 2024/11",
      title: "Dual-Platform Academic Conference APP",
      tags: ["Android Studio", "Swift", "MySQL"],
      description: "Developed an academic conference app for iOS and Android, providing schedules, transportation info, and lecture details to enhance the attendee experience.",
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
      title: "Course Reservation System",
      tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
      description: "Used PHP and MySQL to allow students to book online slots for homework demos and quizzes in TA sessions, improving teaching management. UI was enhanced using HTML, CSS, and Bootstrap.",
      link: "",
      imgUrl: "./demo.png"
    },
    {
      id: 4,
      date: "2026/01 – 2026/02",
      title: "Volleyball Torch Championship Website",
      tags: ["LLM", "LINEBOT", "HTML", "CSS", "JavaScript"],
      description: "Built a lightweight volleyball info system with Google Sheets and AI, synchronizing scores, schedules, and referee assignments to improve player visibility. Created a LINE BOT AI assistant to handle schedule queries, reducing manual workload.",
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
      title: "Volleyball Tactics Tracking Research",
      tags: ["Python", "Image Processing", "OpenCV"],
      description: "Used OpenCV to recognize player tactics in volleyball videos and convert them into a 2D top-down view, helping beginners understand game tactics. (2nd Place in the Capstone Project Exhibition)",
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
      title: "Doctoral Program of Clinical and Experimental Medicine Website Maintenance",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "Assisted in maintaining the Doctoral Program of Clinical and Experimental Medicine website, ensuring operation, updating announcements and professor publications, and correcting templates.",
      link: "https://dpcem.nsysu.edu.tw/?Lang=zh-tw",
      imgUrl: "./dpcem.png"
    },
    {
      id: 7,
      date: "2025/02 – 2025/07",
      title: "NSYSU Future Students Website Maintenance",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "Maintained the NSYSU Future Students website to provide a reliable information channel for freshmen.",
      link: "https://hs.nsysu.edu.tw/",
      imgUrl: "./hsnsysu.png"
    }
  ]
};

export const translations = { zh, en };
