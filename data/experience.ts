export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: "Tunisie Télécom – Direction Régionale de Tunis",
    role: "Software & Data Engineering Intern",
    period: "2024",
    location: "Tunis",
    description: [
      "Developed a professional FTTx market monitoring platform (internal enterprise tool).",
      "Built an interactive dashboard for real-time visualization of operations, transactions, KPIs and commissions.",
      "Implemented user authentication, admin panel, and secure data management.",
      "Optimized SQL queries and automated workflows to speed up reporting.",
      "Collaborated with telecom engineers to digitalize manual processes.",
    ],
  },
  {
    company: "National Institute of Statistics – Tunis",
    role: "Web Development Intern",
    period: "2023",
    location: "Tunis",
    description: [
      "Developed Python scripts to automate internal tasks.",
      "Optimized SQL queries to improve database performance.",
      "Assisted digital transformation and maintained internal systems.",
    ],
  },
  {
    company: "AIESEC Carthage",
    role: "Member – Outgoing Global Talent (OGT)",
    period: "2025",
    location: "Tunis",
    description: [
      "Coordinated international exchange operations and youth leadership activities.",
      "Led recruitment, engagement and communication initiatives with partners.",
      "Organized events and contributed to digital and marketing projects.",
      "Strengthened leadership, teamwork, public speaking and project management skills.",
    ],
  },
];



