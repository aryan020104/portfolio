import { Project, SkillCategory, ExperienceItem, CertificateItem } from '@/types';

export const PERSONAL_INFO = {
  name: "Aryan Kishor Sorathiya",
  shortName: "Aryan",
  title: "Software Design Student & Java Backend Developer",
  tagline: "Specializing in Java backend architecture, Spring Boot, MySQL databases, DevSecOps CI/CD pipelines, and desktop GUI applications.",
  bio: "Ich bin eine sehr kontrollierte und ruhige Person. Ich mag es, mir praktisches Wissen anzueignen. Sehr ernst bei der Ausführung von Aufgaben. Außerdem gefällt mir übernehme gerne Verantwortung und habe die Fähigkeit, eine Gruppe von Menschen zu führen. Ich bin immer bereit, Fehler zu akzeptieren und zu lernen von ihnen.",
  location: "Schoberstr. 4, 63743 Aschaffenburg, Germany",
  university: "Technischen Hochschule Aschaffenburg",
  degree: "Software Design International",
  email: "aryansorathiya0201@gmail.com",
  phone: "(+49) 15566050468",
  github: "https://github.com/aryan020104",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  availability: "Offen für Werksstudentenstellen & Software-Projekte",
  yearsExperience: "2+",
  projectsCompleted: "7+",
  technologiesMastered: "10+",
  githubContributions: "500+",
  dateOfBirth: "02.01.2004",
  placeOfBirth: "Rajkot, Gujarat, Indien",
  nationality: "Indisch"
};

export const HERO_ROLES = [
  "Software Design Student",
  "Java & Spring Boot Developer",
  "DevSecOps & CI/CD Pipeline Specialist",
  "Problem Solver"
];

export const FLOATING_BADGES = [
  { name: "Java", color: "#F89820", bg: "rgba(248, 152, 32, 0.15)" },
  { name: "Spring Boot", color: "#6DB33F", bg: "rgba(109, 179, 63, 0.15)" },
  { name: "MySQL", color: "#00758F", bg: "rgba(0, 117, 143, 0.15)" },
  { name: "Docker", color: "#2496ED", bg: "rgba(36, 150, 237, 0.15)" },
  { name: "GitLab CI/CD", color: "#FC6D26", bg: "rgba(252, 109, 38, 0.15)" },
  { name: "JavaFX", color: "#E76F00", bg: "rgba(231, 111, 0, 0.15)" },
  { name: "Figma", color: "#F24E1E", bg: "rgba(242, 78, 30, 0.15)" },
  { name: "Godot Engine", color: "#478CBF", bg: "rgba(71, 140, 191, 0.15)" },
];

export const PROJECTS: Project[] = [
  {
    id: "internflow-praktikumsverwaltungssystem",
    title: "InternFlow – Praktikumsverwaltungssystem",
    subtitle: "REST-API | SpringBoot | MySQL",
    category: "Java & Backend",
    description: "Entwicklung einer REST-API zur Verwaltung von Benutzern und Praktikumsbewerbungen mit Java, Spring Boot, Spring Data JPA und MySQL.",
    longDescription: "Entwicklung einer mehrschichtigen Backend-Architektur zur Verwaltung von Benutzern und Praktikumsbewerbungen. Implementierung einer relationalen Datenbankstruktur mit Hibernate/JPA sowie einer One-to-Many-Beziehung zwischen Benutzern und Praktikumsbewerbungen. Integration einer sicheren Benutzerauthentifizierung mit Spring Security, JWT und BCrypt.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104/InternFlow",
    tags: ["Java", "Spring Boot", "MySQL", "REST-API", "Spring Security", "JWT", "Hibernate/JPA", "BCrypt"],
    featured: true,
    architectureHighlights: [
      "Entwicklung einer REST-API zur Verwaltung von Benutzern und Praktikumsbewerbungen mit Java, Spring Boot, Spring Data JPA und MySQL",
      "Implementierung einer relationalen Datenbankstruktur mit Hibernate/JPA sowie einer One-to-Many-Beziehung zwischen Benutzern und Praktikumsbewerbungen",
      "Integration einer sicheren Benutzerauthentifizierung mit Spring Security, JWT und BCrypt sowie Entwicklung einer mehrschichtigen Backend-Architektur"
    ],
    metrics: "Production-grade REST architecture with Spring Security & JWT"
  },
  {
    id: "drone-net-optimizer",
    title: "DroneNetOptimizer",
    subtitle: "GraphAlgorithmen | Datenstrukturen | OOP | Maven | Java",
    category: "Java & Backend",
    description: "Entwicklung eines Java-basierten Projekts zur Optimierung von Drohnennetzwerken.",
    longDescription: "Java-basiertes Projekt zur Optimierung autonomer Drohnennetzwerke. Arbeit an Konzepten wie Netzwerkkommunikation, Routing und Konnektivität. Anwendung objektorientierter Programmierung (OOP) in Java und Verwaltung des Build-Prozesses mit Maven.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104/DroneNetOptimizer",
    tags: ["Java", "GraphAlgorithmen", "Datenstrukturen", "OOP", "Maven", "Routing"],
    featured: true,
    architectureHighlights: [
      "Entwicklung eines Java-basierten Projekts zur Optimierung von Drohnennetzwerken",
      "Arbeit an Konzepten wie Netzwerkkommunikation, Routing und Konnektivität",
      "Anwendung objektorientierter Programmierung (OOP) in Java mit Maven Build management"
    ]
  },
  {
    id: "drone-delivery-network",
    title: "DroneDeliveryNetwork",
    subtitle: "Netzwerkkonzepte | Maven | OOP | Java",
    category: "Java & Backend",
    description: "Entwicklung eines Projekts für drohnenbasierte Liefernetzwerke.",
    longDescription: "Entwicklung eines Projekts für drohnenbasierte Liefernetzwerke. Fokus auf Kommunikation und Koordination zwischen Netzwerkknoten sowie Umsetzung grundlegender Netzwerk- und Simulationskonzepte in Java.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104/DroneDeliveryNetwork",
    tags: ["Java", "Netzwerkkonzepte", "Maven", "OOP", "Simulation"],
    featured: true,
    architectureHighlights: [
      "Entwicklung eines Projekts für drohnenbasierte Liefernetzwerke",
      "Fokus auf Kommunikation und Koordination zwischen Netzwerkknoten",
      "Umsetzung grundlegender Netzwerk- und Simulationskonzepte"
    ]
  },
  {
    id: "budgeting-app",
    title: "Budgetting App",
    subtitle: "Java & JavaFX Desktop Application",
    category: "Java & Backend",
    description: "Entwicklung einer Desktop-Anwendung zur Verwaltung persönlicher Finanzen mit JavaFX.",
    longDescription: "Entwicklung einer Desktop-Anwendung zur Verwaltung persönlicher Finanzen. Implementierung von Budget- und Ausgabenverwaltung mit grafischer Benutzeroberfläche und Gestaltung der Benutzeroberfläche mit JavaFX.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104/Budgetting-App",
    tags: ["Java", "JavaFX", "Desktop GUI", "Finanzverwaltung"],
    featured: true,
    architectureHighlights: [
      "Entwicklung einer Desktop-Anwendung zur Verwaltung persönlicher Finanzen",
      "Implementierung von Budget- und Ausgabenverwaltung mit grafischer Benutzeroberfläche",
      "Gestaltung der Benutzeroberfläche mit JavaFX"
    ]
  },
  {
    id: "flappy-learn",
    title: "Flappy-Learn",
    subtitle: "Interactive Game with Godot Engine",
    category: "Full Stack",
    description: "Entwicklung eines Lernspiels für Kinder mit Fokus auf Mathematik und Sprachlernen.",
    longDescription: "Entwicklung eines Lernspiels für Kinder in der Godot Engine. Fokus auf Mathematik und Sprachlernen durch Umsetzung interaktiver Spielmechaniken und Lernfunktionen.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104/Flappy-Learn",
    tags: ["Godot Engine", "Game Dev", "Mathematik", "Sprachlernen", "Interactive UI"],
    featured: false,
    architectureHighlights: [
      "Entwicklung eines Lernspiels für Kinder mit Fokus auf Mathematik und Sprachlernen",
      "Umsetzung von Spielmechaniken und interaktiven Lernfunktionen",
      "Arbeit mit der Godot Engine"
    ]
  },
  {
    id: "owasp-juice-shop-devsecops",
    title: "OWASP Juice Shop DevSecOps Project",
    subtitle: "Gitlab | CI/CD | Docker Security",
    category: "Security & Systems",
    description: "Implementierung einer CI/CD-Pipeline für die OWASP Juice Shop Anwendung.",
    longDescription: "Implementierung einer CI/CD-Pipeline für die OWASP Juice Shop Anwendung. Analyse von OWASP Top 10 Sicherheitslücken und sicheren Deployment-Konzepten sowie Nutzung von Docker und GitLab CI/CD zur Automatisierung.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104/OWASP-Juice-Shop-DevSecOps",
    tags: ["GitLab CI/CD", "Docker", "DevSecOps", "OWASP Top 10", "Automatisierung"],
    featured: true,
    architectureHighlights: [
      "Implementierung einer CI/CD-Pipeline für die OWASP Juice Shop Anwendung",
      "Analyse von OWASP Top 10 Sicherheitslücken und sicheren Deployment-Konzepten",
      "Nutzung von Docker und GitLab CI/CD zur Automatisierung"
    ]
  },
  {
    id: "hci-dashboard-design",
    title: "HCI Dashboard Design",
    subtitle: "Figma | UI/UX Prototyping",
    category: "UI/UX & WebGL",
    description: "Gestaltung eines interaktiven Dashboard-Prototyps mit Figma.",
    longDescription: "Gestaltung eines interaktiven Dashboard-Prototyps mit Figma. Fokus auf Benutzerfreundlichkeit, modernes UI-Design und HCI-Prinzipien (Human-Computer Interaction) sowie Erstellung responsiver Layouts und UI-Komponenten.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://figma.com",
    githubUrl: "https://github.com/aryan020104/HCI-Dashboard-Design",
    tags: ["Figma", "UI/UX", "HCI-Prinzipien", "Prototyping", "Responsive Layouts"],
    featured: true,
    architectureHighlights: [
      "Gestaltung eines interaktiven Dashboard-Prototyps mit Figma",
      "Fokus auf Benutzerfreundlichkeit, modernes UI-Design und HCI-Prinzipien",
      "Erstellung responsiver Layouts und UI-Komponenten"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & System Development",
    iconName: "Code2",
    skills: [
      { name: "Java (Spring Boot / JPA / REST API)", level: 90, experience: "Gute Kenntnisse", featured: true },
      { name: "MySQL / DBMS", level: 88, experience: "Fortgeschritten", featured: true },
      { name: "Spring Boot Framework", level: 86, experience: "REST / JWT / Security", featured: true },
      { name: "Git & Maven", level: 90, experience: "Version Control & Build", featured: true },
      { name: "GraphAlgorithmen & OOP", level: 85, experience: "Datenstrukturen", featured: true }
    ]
  },
  {
    title: "Frontend, GUI & Design",
    iconName: "Layout",
    skills: [
      { name: "HTML & CSS", level: 88, experience: "Gute Kenntnisse", featured: true },
      { name: "JavaFX Framework", level: 85, experience: "Desktop GUI", featured: true },
      { name: "Figma (UI/UX & HCI)", level: 86, experience: "Prototyping", featured: true },
      { name: "Godot Engine", level: 75, experience: "Game Dev", featured: false }
    ]
  },
  {
    title: "DevSecOps & Automation",
    iconName: "Cloud",
    skills: [
      { name: "Docker", level: 82, experience: "Containerization", featured: true },
      { name: "GitLab CI/CD", level: 84, experience: "Pipelines & Security", featured: true },
      { name: "OWASP Top 10 Security", level: 80, experience: "Vulnerability Analysis", featured: true }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Design International Student",
    company: "Technischen Hochschule Aschaffenburg",
    location: "Aschaffenburg, Deutschland",
    period: "15.09.2024 - Aktuell",
    description: [
      "Studium Software Design International an der Technischen Hochschule Aschaffenburg (EQR-Niveau 6).",
      "Entwicklung von REST-APIs, Spring Boot Backend-Systemen, JavaFX Desktop-Anwendungen und Drohnennetzwerk-Optimierungsalgorithmen.",
      "Fokus auf DevSecOps pipelines, OWASP Sicherheitskonzepte und objektorientierte Softwareentwicklung (OOP)."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "GitLab CI/CD", "Docker", "JavaFX"],
    type: "Education"
  },
  {
    id: "exp-2",
    role: "Bachelors of Technology in Computer Engineering",
    company: "Marwadi University",
    location: "Rajkot, Gujarat, Indien",
    period: "08.09.2022 - 24.06.2023",
    description: [
      "Grundstudium Computer Engineering (EQR-Niveau 6).",
      "Gute Kenntnisse in Java, HTML, CSS, DBMS und objektorientierten Programmierungskonzepten."
    ],
    technologies: ["Java", "HTML", "CSS", "DBMS", "MySQL"],
    type: "Education"
  }
];

export const EDUCATION_LIST = [
  {
    institution: "Technischen Hochschule Aschaffenburg",
    degree: "Software Design International",
    location: "Aschaffenburg, Deutschland",
    period: "15.09.2024 - Aktuell",
    specialization: "EQR-Niveau: 6 | Software Design & Backend Engineering",
    status: "Aktuell"
  },
  {
    institution: "Marwadi University",
    degree: "BACHELORS OF TECHNOLOGY IN COMPUTER ENGINEERING",
    location: "Rajkot, Gujarat, Indien",
    period: "08.09.2022 - 24.06.2023",
    specialization: "EQR-Niveau: 6 | Computer Engineering",
    status: "Abgeschlossen"
  },
  {
    institution: "DELHI WORLD PUBLIC SCHOOL (DWPS)",
    degree: "12th Grade [ Central Board of Secondary Education (CBSE) ]",
    location: "Rajkot, Gujarat, Indien",
    period: "2022",
    specialization: "EQR-Niveau: 5 | Sekundarstufe II",
    status: "Abgeschlossen"
  },
  {
    institution: "DELHI WORLD PUBLIC SCHOOL (DWPS)",
    degree: "10th grade [ Central Board of Secondary Education (CBSE) ]",
    location: "Rajkot, Gujarat, Indien",
    period: "2020",
    specialization: "EQR-Niveau: 3 | Sekundarstufe I",
    status: "Abgeschlossen"
  }
];

export const LANGUAGES = [
  { name: "Gujarati", level: "Muttersprache(n)", proficiency: 100 },
  { name: "Englisch", level: "C1 (Hören, Lesen, Schreiben, Sprechen: C1)", proficiency: 92 },
  { name: "Deutsch", level: "B2 (Hören, Lesen, Schreiben, Sprechen: B2)", proficiency: 82 }
];

export const HOBBIES = [
  "Programmierung",
  "Musik Hören",
  "Fußball",
  "Cricket",
  "Fremdsprache Lernen"
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Software Design International (EQR-Niveau 6)",
    issuer: "Technischen Hochschule Aschaffenburg",
    date: "15.09.2024 - Aktuell",
    credentialUrl: "https://www.th-ab.de/",
    skills: ["Software Design", "Java", "Spring Boot", "DBMS"]
  },
  {
    id: "cert-2",
    title: "B.Tech Computer Engineering (EQR-Niveau 6)",
    issuer: "Marwadi University",
    date: "08.09.2022 - 24.06.2023",
    credentialUrl: "https://www.marwadiuniversity.ac.in/",
    skills: ["Computer Engineering", "Java", "HTML/CSS", "DBMS"]
  },
  {
    id: "cert-3",
    title: "12th Grade CBSE (EQR-Niveau 5)",
    issuer: "DELHI WORLD PUBLIC SCHOOL (DWPS)",
    date: "2022",
    credentialUrl: "https://cbse.gov.in",
    skills: ["CBSE Science", "Mathematik"]
  },
  {
    id: "cert-4",
    title: "10th Grade CBSE (EQR-Niveau 3)",
    issuer: "DELHI WORLD PUBLIC SCHOOL (DWPS)",
    date: "2020",
    credentialUrl: "https://cbse.gov.in",
    skills: ["CBSE General Education"]
  }
];

export const GITHUB_STATS = {
  username: "aryan020104",
  totalCommits: 500,
  pullRequests: 28,
  starsEarned: 45,
  repositories: [
    { name: "InternFlow", stars: 15, language: "Java / Spring Boot", desc: "Praktikumsverwaltungssystem REST-API mit MySQL & JWT" },
    { name: "DroneNetOptimizer", stars: 12, language: "Java", desc: "Drohnennetzwerk-Optimierung mit Graphalgorithmen" },
    { name: "OWASP-Juice-Shop-DevSecOps", stars: 18, language: "Docker / GitLab CI", desc: "CI/CD Pipeline mit Security Scanning" },
    { name: "Budgetting-App", stars: 10, language: "Java / JavaFX", desc: "Desktop-Finanzverwaltungsanwendung" }
  ]
};

