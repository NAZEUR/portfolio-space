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
    id: "frontend",
    label: "Frontend Cluster",
    color: "#7C5CFF",
    skills: [
      { id: "nextjs", name: "Next.js", level: "Advanced", since: "2023" },
      { id: "react", name: "React", level: "Advanced", since: "2022" },
      { id: "tailwind", name: "Tailwind CSS", level: "Advanced", since: "2022" },
      { id: "threejs", name: "Three.js & Framer Motion", level: "Proficient", since: "2024" },
    ],
  },
  {
    id: "backend-cloud",
    label: "Backend & Cloud Cluster",
    color: "#3FE0D0",
    skills: [
      { id: "laravel", name: "Laravel", level: "Proficient", since: "2023" },
      { id: "flask", name: "Flask", level: "Proficient", since: "2024" },
      { id: "firebase", name: "Firebase", level: "Proficient", since: "2022" },
      { id: "restapi", name: "RESTful APIs", level: "Proficient", since: "2022" },
    ],
  },
  {
    id: "ai-vision",
    label: "AI & Vision Cluster",
    color: "#FFD27A",
    skills: [
      { id: "python", name: "Python", level: "Advanced", since: "2022" },
      { id: "yolo", name: "YOLO Architectures", level: "Advanced", since: "2024" },
      { id: "pytorch", name: "PyTorch & TensorFlow", level: "Proficient", since: "2023" },
      { id: "cv", name: "Computer Vision (SAHI, OpenCV)", level: "Advanced", since: "2024" },
    ],
  },
  {
    id: "mobile-design",
    label: "Mobile & Design Cluster",
    color: "#E8EAF6",
    skills: [
      { id: "kotlin", name: "Kotlin (Android)", level: "Proficient", since: "2023" },
      { id: "figma", name: "Figma", level: "Advanced", since: "2022" },
      { id: "canva", name: "Canva", level: "Advanced", since: "2020" },
      { id: "git", name: "Git & GitHub", level: "Advanced", since: "2021" },
    ],
  },
];