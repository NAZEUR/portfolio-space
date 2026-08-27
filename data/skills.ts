export type Skill = {
  id: string;
  name: string;
  level: "Familiar" | "Proficient" | "Advanced";
  since: string;
};

export type SkillCluster = {
  id: string;
  label: string;
  color: string; 
  skills: Skill[];
};

export const skillClusters: SkillCluster[] = [
  {
    id: "ui-ux",
    label: "UI/UX & Design",
    color: "#7C5CFF",
    skills: [
      { id: "figma", name: "Figma & Prototyping", level: "Advanced", since: "2022" },
      { id: "user-research", name: "User Research", level: "Advanced", since: "2022" },
      { id: "design-systems", name: "Design Systems", level: "Proficient", since: "2023" },
      { id: "wireframing", name: "Wireframing", level: "Advanced", since: "2022" },
    ],
  },
  {
    id: "frontend-fullstack",
    label: "Frontend & Fullstack",
    color: "#3FE0D0",
    skills: [
      { id: "nextjs", name: "Next.js & React", level: "Advanced", since: "2022" },
      { id: "tailwind", name: "Tailwind CSS", level: "Advanced", since: "2022" },
      { id: "laravel", name: "Laravel", level: "Proficient", since: "2023" },
      { id: "flask", name: "Flask", level: "Proficient", since: "2024" },
    ],
  },
  {
    id: "ai-vision",
    label: "AI & Computer Vision",
    color: "#FFD27A",
    skills: [
      { id: "python", name: "Python", level: "Advanced", since: "2022" },
      { id: "yolo", name: "YOLO Architectures", level: "Advanced", since: "2024" },
      { id: "pytorch", name: "PyTorch & TensorFlow", level: "Proficient", since: "2023" },
      { id: "cv", name: "Computer Vision", level: "Advanced", since: "2024" },
    ],
  },
  {
    id: "mobile-dev",
    label: "Mobile Development",
    color: "#F7E9C9",
    skills: [
      { id: "kotlin", name: "Kotlin (Android)", level: "Proficient", since: "2023" },
      { id: "flutter", name: "Flutter", level: "Familiar", since: "2024" },
      { id: "firebase", name: "Firebase", level: "Proficient", since: "2022" },
      { id: "restapi", name: "RESTful APIs", level: "Proficient", since: "2022" },
    ],
  },
];
