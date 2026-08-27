export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
  achievements?: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "exp-ardhana",
    role: "UI/UX Specialist",
    org: "Ardhana Group",
    period: "2026 — Present",
    description:
      "Designed comprehensive user interfaces, user flows, and visual assets using Figma and Canva. Established modern aesthetic standards across various corporate digital products.",
  },
  {
    id: "exp-genbi",
    role: "Executive Board (BPH) - Kemitraan dan Kerja Sama",
    org: "GenBI Sumsel",
    period: "2025 — 2026",
    description:
      "Served in the partnership division as a Bank Indonesia Scholarship awardee. Managed external collaborations and developed the official KJSM open recruitment web portal.",
  },
  {
    id: "exp-lab-asst",
    role: "Computer Lab Assistant (Big Data & Database)",
    org: "Universitas Sriwijaya",
    period: "May 2024 — Jan 2025",
    description:
      "Supervised laboratory operations, maintained and updated 30+ computer systems, and developed a user management tracking system to streamline lab accessibility for students.",
  },
  {
    id: "exp-pic-uiux",
    role: "Person in Charge (PIC) - UI/UX Competition",
    org: "HMIF Universitas Sriwijaya",
    period: "Apr 2024 — Nov 2024",
    description:
      "Orchestrated a university-level UI/UX competition, overseeing end-to-end event planning, participant management, and ensuring a seamless execution of the design challenge.",
  },
  {
    id: "exp-bangkit",
    role: "Mobile Development Cohort (Graduated with Distinction)",
    org: "Bangkit Academy",
    period: "2023 — 2024",
    description:
      "Completed an intensive mobile development program led by Google, GoTo, and Traveloka. Mastered Kotlin and Android SDK, culminating in the 'BudayaKita' capstone project.",
  },
  {
    id: "exp-mentor",
    role: "Education Mentor",
    org: "HMIF Universitas Sriwijaya",
    period: "Nov 2023 — Dec 2023",
    description:
      "Mentored Computer Science freshmen in Java programming and Object-Oriented Programming (OOP) concepts. Designed practical case studies and evaluated technical assignments.",
  },
  {
    id: "exp-bem-docpub",
    role: "Head of Documentation & Publication",
    org: "BEM KM Fasilkom UNSRI",
    period: "Apr 2023",
    description:
      "Led the creative direction for 'The Gathering' social volunteering event. Produced visual assets including event banners, pamphlets, guidebooks, and promotional videos.",
  },
  {
    id: "exp-hmif-gdsc",
    role: "Public Relations Lead & UI/UX Member",
    org: "HMIF & GDSC Universitas Sriwijaya",
    period: "2023 — 2026",
    description:
      "Led public relations initiatives for the Informatics Student Association (HMIF) and contributed to UI/UX case studies and application prototypes within Google Developer Student Clubs (GDSC).",
  },
];