export type Project = {
  id: string;
  name: string;
  category: "Web App" | "Mobile App" | "AI & Machine Learning" | "UI/UX" | "Open Source";
  description: string;
  impact?: string;
  stack: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  // --- WEB APPS ---
  {
    id: "genbi-kjsm-recruitment",
    name: "GenBI Recruitment Portal",
    category: "Web App",
    description:
      "Official open recruitment website for the Kemitraan dan Kerja Sama (KJSM) division of GenBI Sumsel 2026.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    image: "/images/project/project-oprec-kjsm.png",
    demoUrl: "https://kjsm-genbi-recruitment.vercel.app/",
    repoUrl: "https://github.com/NAZEUR/kjsm-genbi-recruitment",
  },
  {
    id: "budgetbee",
    name: "BudgetBee",
    category: "Web App",
    description:
      "A modern web application designed for seamless personal finance and budget management.",
    stack: ["React", "Tailwind CSS", "Web Dev"],
    image: "/images/project/project-budgetbee.png",
    demoUrl: "https://budgetbee-pi.vercel.app/",
    repoUrl: "https://github.com/NAZEUR/budgetbee",
  },
  {
    id: "lotus-snacks",
    name: "Lotus Landing Page",
    category: "Web App",
    description:
      "A clean, nature-inspired landing page promoting wholesome, additive-free snacks made from sustainable ingredients.",
    stack: ["HTML/CSS", "UI Design"],
    image: "",
    repoUrl: "https://github.com/NAZEUR/lotus",
  },
  {
    id: "goevent-redesign",
    name: "Goevent Redesign",
    category: "Web App",
    description:
      "A comprehensive UI/UX overhaul and frontend redesign for the Goevent platform to enhance user experience.",
    stack: ["Frontend", "UI/UX"],
    image: "",
    repoUrl: "https://github.com/Fakhriirawann/goevent/tree/feature/ui-redesign",
  },
  {
    id: "legacy-portfolio",
    name: "Legacy Portfolio",
    category: "Web App",
    description:
      "My very first personal portfolio website, marking the beginning of my journey in web development.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/project/project-portfolio-pertama.png",
    demoUrl: "https://portofolioo-flame.vercel.app/",
    repoUrl: "https://github.com/NAZEUR/portofolio",
  },

  // --- AI & MACHINE LEARNING ---
  {
    id: "rdd-visualization",
    name: "Road Damage Visualizer",
    category: "AI & Machine Learning",
    description:
      "A web interface built to visualize inference results for road damage detection models (my undergraduate thesis project).",
    stack: ["Python", "Flask", "YOLO", "Computer Vision"],
    image: "/images/project/project-skripsi.png",
    repoUrl: "https://github.com/NAZEUR/Skripsi-Road-damage-detection",
  },
  {
    id: "mlkit-text-recognition",
    name: "ML Kit Text Recognition",
    category: "AI & Machine Learning",
    description:
      "An Android app developed during Bangkit Academy integrating Google ML Kit for real-time text recognition via camera.",
    stack: ["Kotlin", "Android", "ML Kit"],
    image: "",
    repoUrl: "https://github.com/NAZEUR/MyCamera-Starter",
  },

  // --- MOBILE APPS ---
  {
    id: "budayakita",
    name: "BudayaKita",
    category: "Mobile App",
    description:
      "My final capstone project at Bangkit Academy, aimed at preserving and promoting Indonesian cultural heritage.",
    stack: ["Kotlin", "Android Studio", "Firebase"],
    image: "",
    repoUrl: "https://github.com/Bayhaqieee/BudayaKita",
  },
  {
    id: "room-notes",
    name: "Room Notes App",
    category: "Mobile App",
    description:
      "A local note-taking Android application utilizing the Room database for robust and persistent offline storage.",
    stack: ["Kotlin", "Room DB", "Android"],
    image: "",
    repoUrl: "https://github.com/NAZEUR/My-Notes-App",
  },
  {
    id: "custom-view-marker",
    name: "Object Marker Camera",
    category: "Mobile App",
    description:
      "An Android application utilizing Custom Views to manually mark and annotate objects, built during Bangkit Academy.",
    stack: ["Kotlin", "Android Views"],
    image: "",
    repoUrl: "https://github.com/NAZEUR/MyCamera",
  },
  {
    id: "sms-receiver",
    name: "SMS Broadcast Receiver",
    category: "Mobile App",
    description:
      "An Android utility app implementing Broadcast Receivers to capture and respond to incoming SMS events.",
    stack: ["Kotlin", "Android SDK"],
    image: "",
    repoUrl: "https://github.com/NAZEUR/MyBroadcastReceiver",
  },
  {
    id: "go-moon-flutter",
    name: "Go Moon",
    category: "Mobile App",
    description:
      "A foundational Flutter application exploring cross-platform mobile UI components and navigation.",
    stack: ["Flutter", "Dart"],
    image: "",
    repoUrl: "https://github.com/NAZEUR/go_moon",
  },

  // --- UI/UX DESIGN ---
  {
    id: "aksara-ui",
    name: "Aksara",
    category: "UI/UX",
    description:
      "A UI/UX case study and high-fidelity prototype for a mobile app designed to make learning traditional scripts engaging.",
    stack: ["Figma", "User Research", "Prototyping"],
    image: "/images/project/aksara.png",
    demoUrl: "https://www.behance.net/gallery/208440331/Aksara-Aplikasi-Belajar-Bahasa-UIUX-Competition",
  },
  {
    id: "serenity-ui",
    name: "Serenity",
    category: "UI/UX",
    description:
      "An innovative mental health app prototype offering a user-friendly interface to monitor and improve mental well-being.",
    stack: ["Figma", "Interaction Design"],
    image: "/images/project/serenity.png",
    demoUrl: "https://www.figma.com/proto/M5nXIgoRzVCHyYOla8jfKo/PROJEK-UI-UX-GDSC?page-id=1%3A4&node-id=396-1406&node-type=canvas",
  },
  {
    id: "lively-ui",
    name: "Lively",
    category: "UI/UX",
    description:
      "A wellness and productivity design concept outlining user research, persona development, and a calming UI process.",
    stack: ["Figma", "UX Research", "Slide Deck"],
    image: "/images/project/lively.png",
    demoUrl: "https://docs.google.com/presentation/d/1BftMULt-j1IZvnqXvnCkaQREHT3sKRlEKFo9i86eTmA/edit",
  },
  {
    id: "selco-ui",
    name: "Selco",
    category: "UI/UX",
    description:
      "A UI/UX study for a scrap management app focused on harnessing artisan creativity to reduce inorganic waste.",
    stack: ["Figma", "Prototyping"],
    image: "/images/project/selco.png",
    demoUrl: "https://www.figma.com/proto/8o0CjaH02Lvy3LrvWy4w4P/Selco?page-id=504%3A6123&node-id=714-6344&node-type=canvas",
  },
  {
    id: "bem-emagazine",
    name: "BEM KM Fasilkom E-Magazine",
    category: "UI/UX",
    description:
      "A 19-page digital editorial magazine highlighting technology updates and campus events, designed as the main layout editor.",
    stack: ["Canva", "Editorial Design", "Graphic Design"],
    image: "/images/project/ema.png",
    demoUrl: "https://drive.google.com/file/d/1YvtrxRioc-sjiV17jlSnkgfIbAUilGSa/view",
  }
];