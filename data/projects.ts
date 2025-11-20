export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  githubUrl: string; // ← LIEN GITHUB (bouton "View Code") - Exemple: "https://github.com/Nedim7050/nom-du-repo"
  demoUrl: string | null; // ← LIEN DEMO (bouton "Live Demo") - Exemple: "https://votre-demo.com"
}

/**
 * GUIDE POUR AJOUTER LES LIENS GITHUB :
 * 
 * 1. Allez sur votre profil GitHub : https://github.com/Nedim7050
 * 2. Trouvez le repository correspondant à chaque projet
 * 3. Copiez l'URL complète du repository
 * 4. Remplacez la valeur de "githubUrl" ci-dessous
 * 
 * Exemple :
 * githubUrl: "https://github.com/Nedim7050/tanit-congress"
 * 
 * Si un projet n'a pas de repository public, mettez "#" ou votre profil GitHub général
 */
export const projects: Project[] = [
  {
    title: "FTTX-PROJECT",
    subtitle: "Professional Web Application (Tunisie Télécom)",
    description: "Internal enterprise platform for monitoring and managing the FTTx market at Tunisie Télécom – Centre Urbain Nord. Features interactive dashboard, admin management, transaction logging, and commission tracking.",
    tech: ["Python", "SQL", "PostgreSQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/Nedim7050/FTTX-PROJECT",
    demoUrl: null,
  },
  {
    title: "AIESEC Tanit 2K25",
    subtitle: "International Congress Website",
    description: "Official website for TANIT 2K25, an international congress hosted by AIESEC Carthage. Interactive registration, animated UI, and complete event information.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "GSAP"],
    githubUrl: "https://github.com/Nedim7050/tanit-congress",
    demoUrl: "https://tanit-congress.vercel.app",
  },
  {
    title: "AIESEC Carthage Recruitment",
    subtitle: "Recruitment Website & Admin Dashboard",
    description: "Modern responsive website for AIESEC Carthage with recruitment system and admin dashboard. Progressive Web App (PWA) features and mobile-first design.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React"],
    githubUrl: "https://github.com/Nedim7050/recruitment-aiesec",
    demoUrl: "https://carthage-recruitment.vercel.app",
  },
  {
    title: "CNN 2K25",
    subtitle: "Alice in Wonderland Themed Conference Website",
    description: "Themed website for CNN 2K25, inspired by 'Alice in Wonderland'. Includes interactive forms, animated galleries, and immersive visual experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "GSAP"],
    githubUrl: "https://github.com/Nedim7050/cnn2k25-website",
    demoUrl: "https://cnn2k25-website.vercel.app",
  },
  {
    title: "Deep Learning Image Classification",
    subtitle: "Transfer Learning System with PyTorch",
    description: "Deep learning project for image classification using transfer learning with PyTorch. Uses ResNet50/EfficientNet models, ONNX export, and a Streamlit web interface.",
    tech: ["Python", "PyTorch", "Streamlit", "ONNX", "TensorBoard"],
    githubUrl: "https://github.com/Nedim7050/image-classification-transfer-learning",
    demoUrl: "https://image-classification-transfer-learning-flrwenojmkauragaqn6kgm.streamlit.app",
  },
  {
    title: "Credit Card Fraud Detection",
    subtitle: "Machine Learning System",
    description: "Machine learning system for detecting fraudulent credit card transactions. Uses XGBoost, Random Forest, and Logistic Regression models with interactive Streamlit web app.",
    tech: ["Python", "XGBoost", "Scikit-Learn", "Streamlit", "Pandas", "NumPy"],
    githubUrl: "https://github.com/Nedim7050/credit-card-fraud-detection",
    demoUrl: "https://credit-card-fraud-detection-hrczoamwj8xufv5umabmg6.streamlit.app",
  },
  {
    title: "Real-Time Finance Data Pipeline",
    subtitle: "End-to-End Data Engineering Solution",
    description: "End-to-end real-time data pipeline for financial transactions. Complete architecture with Kafka, Airflow, PostgreSQL, and an interactive Streamlit dashboard.",
    tech: ["Python", "Apache Kafka", "Apache Airflow", "PostgreSQL", "Streamlit", "Docker"],
    githubUrl: "https://github.com/Nedim7050/data-pipeline-streaming",
    demoUrl: "https://data-pipeline-streaming-kpqv7qe7klarz5ab37ckbq.streamlit.app",
  },
  {
    title: "Intelligent Pharma/MedTech Chatbot",
    subtitle: "Full-Stack AI Chatbot",
    description: "Full-stack intelligent chatbot focused on pharma/MedTech topics. Architecture: FastAPI + React (or standalone Streamlit variant). Supports local models and OpenAI API.",
    tech: ["Python", "FastAPI", "React", "Streamlit", "OpenAI API", "TensorFlow"],
    githubUrl: "https://github.com/Nedim7050/ai-chat-webapp",
    demoUrl: "https://ai-chat-webapp-csfgmuedv3fbydovrrtj3z.streamlit.app",
  },
];



