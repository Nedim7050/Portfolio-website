export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "AI / Machine Learning",
    icon: "brain",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Hugging Face", "OpenCV"],
  },
  {
    name: "Data & Data Engineering",
    icon: "database",
    skills: ["Python", "Pandas", "NumPy", "SQL", "PostgreSQL", "Apache Airflow", "Kafka", "Power BI"],
  },
  {
    name: "Web Development",
    icon: "code",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "FastAPI", "Flask", "Streamlit", "Bootstrap"],
  },
  {
    name: "Tools & Cloud",
    icon: "cloud",
    skills: ["Git", "GitHub", "Docker", "Linux", "Azure", "GCP"],
  },
  {
    name: "Programming Languages",
    icon: "terminal",
    skills: ["Python", "C#", "C++", "JavaScript", "Java", "SQL", "Bash"],
  },
];



