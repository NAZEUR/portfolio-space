export type Education = {
  id: string;
  institution: string;
  degree: string;
  period: string;
  logo: string;
};

export const educationList: Education[] = [
  {
    id: "unsri",
    institution: "Universitas Sriwijaya",
    degree: "Bachelor of Computer Science",
    period: "2022 - 2026",
    logo: "/images/education/unsri.webp",
  },
  {
    id: "bangkit",
    institution: "Bangkit Academy",
    degree: "Mobile Development Cohort",
    period: "2024",
    logo: "/images/education/bangkit.webp",
  },
  {
    id: "smansa",
    institution: "SMAN 1 Bengkulu Selatan",
    degree: "Math Science",
    period: "2019 - 2022",
    logo: "/images/education/logo-smansa.svg",
  },
];
