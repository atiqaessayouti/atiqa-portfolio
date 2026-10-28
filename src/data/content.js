export const profile = {
  name: 'Atiqa Essayouti',
  title: 'AI & Data Science Engineering Student',
  intro:
    'Étudiante en Master 2 SDIA, passionnée par l’Intelligence Artificielle, la Data Science et les applications basées sur les LLM. Je conçois des solutions intelligentes qui relient les modèles d’IA à des applications concrètes.',
  email: 'atiqaessayouti@gmail.com',
  github: 'https://github.com/atiqaessayouti',
  linkedin: 'https://www.linkedin.com/in/atiqa-essayouti',
  cv: '/cv-atiqa-essayouti.pdf',
  location: 'Mohammedia, Maroc',
}

export const nav = [
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'education', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

export const interests = [
  'Generative AI et Large Language Models',
  'Retrieval-Augmented Generation (RAG)',
  'AI Agents et systèmes multi-agents',
  'Machine Learning et Deep Learning',
  'Applications intelligentes orientées données',
]

// icon: nom d’icône Lucide — screenshot: chemin dans /public (ex. '/screenshots/ocp.png'), null = emplacement vide
// demo: URL d’une vraie démo, sinon null (aucun bouton affiché)
// profileLink: true si le lien GitHub pointe vers le profil et non vers le dépôt exact
export const projects = [
  {
    title: 'OCP Smart Recruitment', category: 'AI / LLM / Semantic Matching', icon: 'BrainCircuit',
    description: 'Solution de matching sémantique entre les profils des candidats et les offres d’emploi.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Sentence Transformers', 'Embeddings', 'LLM'],
    github: 'https://github.com/atiqaessayouti/ocp-smart-recruitment', profileLink: false, screenshot: null, demo: null,
  },
  {
    title: 'SmileFlow', category: 'AI Agents / Automation', icon: 'Workflow',
    description: 'Assistant intelligent multi-agent utilisant des outils et des services externes pour automatiser des tâches.',
    tags: ['Python', 'FastAPI', 'LangGraph', 'LLM', 'RAG', 'Gmail', 'Google Calendar'],
    github: 'https://github.com/atiqaessayouti', profileLink: true, screenshot: null, demo: null,
  },
  {
    title: 'ECG5000', category: 'Machine Learning / Deep Learning', icon: 'HeartPulse',
    description: 'Classification de signaux électrocardiographiques à partir de données numériques, avec préparation des données et entraînement d’un modèle de classification.',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras'],
    github: 'https://github.com/atiqaessayouti', profileLink: true, screenshot: null, demo: null,
  },
  {
    title: 'SuiviAuto', category: 'Mobile Development / Firebase', icon: 'CarFront',
    description: 'Application de suivi de maintenance automobile avec gestion des véhicules, entretiens et pièces.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
    github: 'https://github.com/atiqaessayouti/PFE2', profileLink: false, screenshot: null, demo: null,
  },
]

export const skills = [
  { title: 'AI & Generative AI', items: ['LLM', 'RAG', 'AI Agents', 'LangGraph', 'Prompt Engineering', 'Embeddings', 'Semantic Matching'] },
  { title: 'Machine Learning & Data Science', items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'CNN'] },
  { title: 'Backend & API', items: ['FastAPI', 'Flask', 'REST APIs', 'SQLAlchemy', 'Spring Boot'] },
  { title: 'Frontend & Mobile', items: ['React', 'JavaScript', 'TypeScript', 'Angular', 'Flutter', 'Dart'] },
  { title: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL'] },
  { title: 'Outils', items: ['Git', 'GitHub', 'Docker', 'Jupyter Notebook', 'Google Colab', 'VS Code'] },
]

export const education = [
  { period: '2025 – présent', degree: 'Master 2 SDIA — Systèmes Distribués et Intelligence Artificielle', school: 'ENSET Mohammedia, Université Hassan II' },
  { period: '2022 – 2025', degree: 'Licence en Informatique, mention Bien', school: 'ENS Marrakech' },
]
