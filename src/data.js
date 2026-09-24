const zh = {
  personalInfo: {
    name: "陳廷瑋 (Ting-Wei Chen)",
    title: "Software Engineer",
    email: "kino87654@gmail.com",
    phone: "0965-359-739",
    location: "臺中市西屯區惠來路三段 218號9樓之 2",
    github: "https://github.com/tingwei1231",
    linkedin: "https://www.linkedin.com/in/tingwei1231/",
    about: "活潑外向，擅長團隊合作與跨領域協作，具備軟體開發背景，樂於嘗試新AI技術。歷經值班歷練，培養出刻苦耐勞、穩定抗壓特質，曾主導開發多項系統，提升資訊透明度與使用效率，展現技術落地的執行力。\n#團隊合作 #Scrum #跨領域協作 #抗壓耐勞 #AI應用 #執行力",
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
      date: "2026/07 – 2026/09",
      title: "軟體工程師 (Product Developer)",
      institution: "新加坡商鈦坦科技 (Titansoft)",
      description: "使用 ASP.NET 串接第三方金流服務，搭配 Claude Code 加速開發測試，運用 ELK 於值班期間進行問題排查與監控。"
    },
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
    "基本語言": ["C++", "C#", "Java", "Python"],
    "開發框架": ["Scrum", "Agile"],
    "後端開發": ["ASP.NET", "PHP", "MySQL"],
    "前端開發": ["HTML", "CSS", "JavaScript", "Vue", "React"],
    "行動應用": ["Android Studio", "Swift"],
    "版本控制": ["Git", "Kubernetes"],
    "監控與維運": ["ELK", "Grafana"]
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
      date: "2024/10 – 2024/11",
      title: "雙平台醫學會學術演講會 APP",
      tags: ["Android Studio", "Swift", "MySQL"],
      description: "開發支援 iOS 與 Android 的學術演講 APP，提供日程、交通、講座資訊，提升參與者的體驗，下載次數約為100+次。",
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
      id: 2,
      date: "2025/02 – 2025/06",
      title: "課程預約系統",
      tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
      description: "用 PHP 結合 MySQL 讓50+位學生可線上預約助教課的作業 Demo 及小考時段，提高教學管理效率，HTML 結合 CSS 及 Bootstrap 優化界面美觀。",
      link: "",
      imgUrl: "./demo.png"
    },
    {
      id: 3,
      date: "2026/01 – 2026/02",
      title: "傳承盃排球錦標賽網站",
      tags: ["LLM", "LINEBOT", "HTML", "CSS", "JavaScript"],
      description: "開發結合Google 試算表與AI 協作的輕量化排球賽事即時資訊系統，提供比分、賽程與裁判排班同步顯示，解決球員對賽事進度與分組排名的資訊落差問題。並設計LINE BOT AI 小助手，協助解答賽程相關問題，有效減少30%的人力資源投入。",
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
      id: 4,
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
      id: 5,
      date: "2024/09 – 2025/07",
      title: "臨床醫學博士學位學程網頁維護",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "協助維護臨床醫學博士學位學程網頁，維護網頁運作，更新公告與教授論文資料以及修正網頁模板。",
      link: "https://dpcem.nsysu.edu.tw/?Lang=zh-tw",
      imgUrl: "./dpcem.png"
    },
    {
      id: 6,
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
    about: "Collaborative software engineer with a growing interest in AI. On-call experience has sharpened my resilience under pressure, and I've led system development that measurably improved information transparency and operational efficiency.\n#Teamwork #Scrum #Collaboration #Resilience #AIApplications #Execution",
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
      date: "Jul 2026 – Sep 2026",
      title: "Product Developer",
      institution: "Titansoft",
      description: "Integrated a third-party payment gateway using ASP.NET, leveraging Claude Code to accelerate development and testing, and used the ELK stack for troubleshooting and monitoring during on-call shifts."
    },
    {
      date: "2020-Recent",
      title: "Tournament Director",
      institution: "Volleyball Torch Championship",
      description: "Organized six editions of the Torch Volleyball Championship. Responsible for tournament planning, team recruitment, venue arrangement, referee scheduling, and event execution."
    },
    {
      date: "2024",
      title: "Technical Partner",
      institution: "Taiwan Society of Otorhinolaryngology Head and Neck Surgery",
      description: "Assisted in developing an exclusive dual-platform (iOS/Android) APP for the academic conference, providing attendees with a smooth and responsive digital interactive experience."
    },
    {
      date: "2025",
      title: "Technical Mentor",
      institution: "High School Essay (Optimal Campus Path)",
      description: "Guided a junior student in using Python to implement Dijkstra's algorithm for campus navigation, improving the efficiency of freshmen and visitors in locating classrooms."
    },
    {
      date: "2019 – 2023",
      title: "Student Association President / Orientation Camp General Coordinator",
      institution: "Dept. of Computer Science, NTUE",
      description: "Served as the president of the Student Association, general coordinator of a 100-person joint orientation camp, and captain of the department's volleyball team. Responsible for organizing large-scale camps, budgeting, and cross-departmental communication."
    }
  ],
  skills: {
    "Basic Languages": ["C++", "C#", "Java", "Python"],
    "Development Framework": ["Scrum", "Agile"],
    "Back-End": ["ASP.NET", "PHP", "MySQL"],
    "Front-End": ["HTML", "CSS", "JavaScript", "Vue", "React"],
    "Mobile Apps": ["Android Studio", "Swift"],
    "Version Control": ["Git", "Kubernetes"],
    "Monitoring & Ops": ["ELK", "Grafana"]
  },
  research: [
    {
      title: "An Efficient Period-LS-List-Based Approach for Mining Top-k High On-Shelf Utility Itemsets within Specific Time Periods in Incremental Databases",
      description: "The Period-LS-List data structure is effectively used to mine high utility itemsets from incremental databases, employing a pruning strategy that improves processing time by up to 46%.",
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
      date: "2024/10 – 2024/11",
      title: "Dual-Platform Academic Conference APP",
      tags: ["Android Studio", "Swift", "MySQL"],
      description: "Developed an academic conference app for iOS and Android, providing schedules, transportation info, and lecture details to enhance the attendee experience. Downloaded 100+ times.",
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
      id: 2,
      date: "2025/02 – 2025/06",
      title: "Course Reservation System",
      tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
      description: "Used PHP and MySQL to allow 50+ students to book online slots for homework demos and quizzes in TA sessions, improving teaching management. UI was enhanced using HTML, CSS, and Bootstrap.",
      link: "",
      imgUrl: "./demo.png"
    },
    {
      id: 3,
      date: "2026/01 – 2026/02",
      title: "Volleyball Torch Championship Website",
      tags: ["LLM", "LINEBOT", "HTML", "CSS", "JavaScript"],
      description: "Built a lightweight volleyball info system with Google Sheets and AI, synchronizing scores, schedules, and referee assignments to improve player visibility. Created a LINE BOT AI assistant to handle schedule queries, reducing 30% manual workload.",
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
      id: 4,
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
      id: 5,
      date: "2024/09 – 2025/07",
      title: "Doctoral Program of Clinical and Experimental Medicine Website Maintenance",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "Assisted in maintaining the Doctoral Program of Clinical and Experimental Medicine website, ensuring operation, updating announcements and professor publications, and correcting templates.",
      link: "https://dpcem.nsysu.edu.tw/?Lang=zh-tw",
      imgUrl: "./dpcem.png"
    },
    {
      id: 6,
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
