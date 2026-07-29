import { Project, SkillCategory, ExperienceItem, CertificateItem } from '@/types';

export type Language = 'en' | 'de';

export const PERSONAL_INFO: Record<Language, {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  university: string;
  degree: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  availability: string;
  yearsExperience: string;
  projectsCompleted: string;
  technologiesMastered: string;
  githubContributions: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
}> = {
  de: {
    name: "Aryan Kishor Sorathiya",
    shortName: "Aryan",
    title: "Software Design Student & Java Backend Entwickler",
    tagline: "Spezialisiert auf Java Backend-Architektur, Spring Boot, MySQL Datenbanken, DevSecOps CI/CD Pipelines und Desktop GUI-Anwendungen.",
    bio: "Ich bin eine sehr kontrollierte und ruhige Person. Ich mag es, mir praktisches Wissen anzueignen. Sehr ernst bei der Ausführung von Aufgaben. Außerdem gefällt mir übernehme gerne Verantwortung und habe die Fähigkeit, eine Gruppe von Menschen zu führen. Ich bin immer bereit, Fehler zu akzeptieren und zu lernen von ihnen.",
    location: "Schoberstr. 4, 63743 Aschaffenburg, Deutschland",
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
  },
  en: {
    name: "Aryan Kishor Sorathiya",
    shortName: "Aryan",
    title: "Software Design Student & Java Backend Developer",
    tagline: "Specializing in Java backend architecture, Spring Boot microservices, MySQL databases, DevSecOps CI/CD pipelines, and desktop GUI applications.",
    bio: "I am a very composed and quiet person. I enjoy acquiring practical knowledge and take tasks very seriously. I gladly take responsibility and possess leadership capabilities. I am always willing to accept mistakes and learn from them.",
    location: "Schoberstr. 4, 63743 Aschaffenburg, Germany",
    university: "Technische Hochschule Aschaffenburg",
    degree: "Software Design International",
    email: "aryansorathiya0201@gmail.com",
    phone: "(+49) 15566050468",
    github: "https://github.com/aryan020104",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    availability: "Open for Working Student Roles & Software Projects",
    yearsExperience: "2+",
    projectsCompleted: "7+",
    technologiesMastered: "10+",
    githubContributions: "500+",
    dateOfBirth: "02.01.2004",
    placeOfBirth: "Rajkot, Gujarat, India",
    nationality: "Indian"
  }
};

export const HERO_ROLES: Record<Language, string[]> = {
  de: [
    "Software Design Student",
    "Java & Spring Boot Entwickler",
    "DevSecOps & CI/CD Pipeline Spezialist",
    "Problemlöser"
  ],
  en: [
    "Software Design Student",
    "Java & Spring Boot Developer",
    "DevSecOps & CI/CD Pipeline Specialist",
    "Problem Solver"
  ]
};

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

export const PROJECTS: Record<Language, Project[]> = {
  de: [
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
      metrics: "REST-Architektur mit Spring Security & JWT"
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
  ],
  en: [
    {
      id: "internflow-praktikumsverwaltungssystem",
      title: "InternFlow – Internship Management System",
      subtitle: "REST-API | SpringBoot | MySQL",
      category: "Java & Backend",
      description: "Development of a REST API for managing users and internship applications with Java, Spring Boot, Spring Data JPA, and MySQL.",
      longDescription: "Engineered a multi-layered backend architecture to manage users and internship applications. Implemented a relational database structure with Hibernate/JPA and one-to-many relationships between users and internship applications. Integrated secure user authentication with Spring Security, JWT, and BCrypt.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/aryan020104/InternFlow",
      tags: ["Java", "Spring Boot", "MySQL", "REST-API", "Spring Security", "JWT", "Hibernate/JPA", "BCrypt"],
      featured: true,
      architectureHighlights: [
        "Development of a REST API for managing users and internship applications with Java, Spring Boot, Spring Data JPA, and MySQL",
        "Implementation of a relational database structure with Hibernate/JPA and one-to-many relationships between users and applications",
        "Integration of secure user authentication with Spring Security, JWT, and BCrypt in a multi-layered backend architecture"
      ],
      metrics: "Production-grade REST architecture with Spring Security & JWT"
    },
    {
      id: "drone-net-optimizer",
      title: "DroneNetOptimizer",
      subtitle: "Graph Algorithms | Data Structures | OOP | Maven | Java",
      category: "Java & Backend",
      description: "Development of a Java-based project for autonomous drone network optimization.",
      longDescription: "Java-based project optimizing autonomous drone networks. Implemented concepts such as network communication, graph routing, and node connectivity using Object-Oriented Programming (OOP) in Java and Maven.",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/aryan020104/DroneNetOptimizer",
      tags: ["Java", "Graph Algorithms", "Data Structures", "OOP", "Maven", "Routing"],
      featured: true,
      architectureHighlights: [
        "Development of a Java-based project for autonomous drone network optimization",
        "Work on concepts such as network communication, graph routing, and node connectivity",
        "Application of Object-Oriented Programming (OOP) in Java with Maven build management"
      ]
    },
    {
      id: "drone-delivery-network",
      title: "DroneDeliveryNetwork",
      subtitle: "Network Concepts | Maven | OOP | Java",
      category: "Java & Backend",
      description: "Development of a project for drone-based delivery networks.",
      longDescription: "Developed a project for drone-based delivery networks. Focused on inter-node communication, flight node coordination, and implementing fundamental network and simulation concepts in Java.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/aryan020104/DroneDeliveryNetwork",
      tags: ["Java", "Network Concepts", "Maven", "OOP", "Simulation"],
      featured: true,
      architectureHighlights: [
        "Development of a project for drone-based delivery networks",
        "Focus on communication and coordination between network nodes",
        "Implementation of fundamental network and simulation concepts"
      ]
    },
    {
      id: "budgeting-app",
      title: "Budgetting App",
      subtitle: "Java & JavaFX Desktop Application",
      category: "Java & Backend",
      description: "Development of a desktop application for personal financial management using JavaFX.",
      longDescription: "Desktop finance manager featuring custom GUI components built in JavaFX. Implemented budget and expenditure tracking with a graphical user interface and local data management.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/aryan020104/Budgetting-App",
      tags: ["Java", "JavaFX", "Desktop GUI", "Finance Management"],
      featured: true,
      architectureHighlights: [
        "Development of a desktop application for managing personal finances",
        "Implementation of budget and expenditure management with a graphical user interface",
        "Custom UI design with JavaFX"
      ]
    },
    {
      id: "flappy-learn",
      title: "Flappy-Learn",
      subtitle: "Interactive Game with Godot Engine",
      category: "Full Stack",
      description: "Development of an educational game for children focusing on mathematics and language learning.",
      longDescription: "Designed an interactive 2D learning game for children in Godot Engine. Combines quiz mechanics with gamified learning loops to improve math and language skills.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/aryan020104/Flappy-Learn",
      tags: ["Godot Engine", "Game Dev", "Mathematics", "Language Learning", "Interactive UI"],
      featured: false,
      architectureHighlights: [
        "Development of an educational game for children focusing on mathematics and language learning",
        "Implementation of game mechanics and interactive learning features",
        "Built using the Godot Engine"
      ]
    },
    {
      id: "owasp-juice-shop-devsecops",
      title: "OWASP Juice Shop DevSecOps Project",
      subtitle: "GitLab | CI/CD | Docker Security",
      category: "Security & Systems",
      description: "Implementation of an automated CI/CD pipeline for the OWASP Juice Shop application.",
      longDescription: "Architected a CI/CD pipeline for OWASP Juice Shop application. Analyzed OWASP Top 10 security vulnerabilities and secure deployment concepts utilizing Docker and GitLab CI/CD for automation.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/aryan020104/OWASP-Juice-Shop-DevSecOps",
      tags: ["GitLab CI/CD", "Docker", "DevSecOps", "OWASP Top 10", "Automation"],
      featured: true,
      architectureHighlights: [
        "Implementation of a CI/CD pipeline for the OWASP Juice Shop application",
        "Analysis of OWASP Top 10 security vulnerabilities and secure deployment concepts",
        "Utilizing Docker and GitLab CI/CD for automated security testing"
      ]
    },
    {
      id: "hci-dashboard-design",
      title: "HCI Dashboard Design",
      subtitle: "Figma | UI/UX Prototyping",
      category: "UI/UX & WebGL",
      description: "Design of an interactive dashboard prototype in Figma based on HCI principles.",
      longDescription: "Designed an interactive dashboard prototype in Figma. Focused on usability, modern UI design, Human-Computer Interaction (HCI) guidelines, and creating responsive layouts and reusable UI components.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      demoUrl: "https://figma.com",
      githubUrl: "https://github.com/aryan020104/HCI-Dashboard-Design",
      tags: ["Figma", "UI/UX", "HCI Principles", "Prototyping", "Responsive Layouts"],
      featured: true,
      architectureHighlights: [
        "Design of an interactive dashboard prototype with Figma",
        "Focus on usability, modern UI design, and HCI principles",
        "Creation of responsive layouts and reusable UI components"
      ]
    }
  ]
};

export const SKILL_CATEGORIES: Record<Language, SkillCategory[]> = {
  de: [
    {
      title: "Backend & Systementwicklung",
      iconName: "Code2",
      skills: [
        { name: "Java (Spring Boot / JPA / REST API)", level: 90, experience: "Gute Kenntnisse", featured: true },
        { name: "MySQL / DBMS", level: 88, experience: "Fortgeschritten", featured: true },
        { name: "Spring Boot Framework", level: 86, experience: "REST / JWT / Security", featured: true },
        { name: "Git & Maven", level: 90, experience: "Versionskontrolle & Build", featured: true },
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
      title: "DevSecOps & Automatisierung",
      iconName: "Cloud",
      skills: [
        { name: "Docker", level: 82, experience: "Containerisierung", featured: true },
        { name: "GitLab CI/CD", level: 84, experience: "Pipelines & Sicherheit", featured: true },
        { name: "OWASP Top 10 Sicherheit", level: 80, experience: "Schwachstellenanalyse", featured: true }
      ]
    }
  ],
  en: [
    {
      title: "Backend & System Development",
      iconName: "Code2",
      skills: [
        { name: "Java (Spring Boot / JPA / REST API)", level: 90, experience: "High Proficiency", featured: true },
        { name: "MySQL / DBMS", level: 88, experience: "Advanced", featured: true },
        { name: "Spring Boot Framework", level: 86, experience: "REST / JWT / Security", featured: true },
        { name: "Git & Maven", level: 90, experience: "Version Control & Build", featured: true },
        { name: "Graph Algorithms & OOP", level: 85, experience: "Data Structures", featured: true }
      ]
    },
    {
      title: "Frontend, GUI & Design",
      iconName: "Layout",
      skills: [
        { name: "HTML & CSS", level: 88, experience: "Good Proficiency", featured: true },
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
        { name: "OWASP Top 10 Security", level: 80, experience: "Vulnerability Auditing", featured: true }
      ]
    }
  ]
};

export const EXPERIENCES: Record<Language, ExperienceItem[]> = {
  de: [
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
  ],
  en: [
    {
      id: "exp-1",
      role: "Software Design International Student",
      company: "Technische Hochschule Aschaffenburg",
      location: "Aschaffenburg, Germany",
      period: "15.09.2024 - Present",
      description: [
        "Enrolled in Software Design International B.Sc. at Technische Hochschule Aschaffenburg (EQR Level 6).",
        "Developing REST APIs, Spring Boot backend systems, JavaFX desktop GUIs, and drone network routing algorithms.",
        "Focus on DevSecOps pipelines, OWASP security principles, and Object-Oriented Software Design (OOP)."
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "GitLab CI/CD", "Docker", "JavaFX"],
      type: "Education"
    },
    {
      id: "exp-2",
      role: "Bachelor of Technology in Computer Engineering",
      company: "Marwadi University",
      location: "Rajkot, Gujarat, India",
      period: "08.09.2022 - 24.06.2023",
      description: [
        "Completed foundational computer engineering coursework (EQR Level 6).",
        "Studied Java, HTML, CSS, Database Management Systems (DBMS), and Object-Oriented Programming principles."
      ],
      technologies: ["Java", "HTML", "CSS", "DBMS", "MySQL"],
      type: "Education"
    }
  ]
};

export const EDUCATION_LIST: Record<Language, {
  institution: string;
  degree: string;
  location: string;
  period: string;
  specialization: string;
  status: string;
}[]> = {
  de: [
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
  ],
  en: [
    {
      institution: "Technische Hochschule Aschaffenburg",
      degree: "Software Design International",
      location: "Aschaffenburg, Germany",
      period: "15.09.2024 - Present",
      specialization: "EQR Level: 6 | Software Design & Backend Engineering",
      status: "Enrolled"
    },
    {
      institution: "Marwadi University",
      degree: "BACHELOR OF TECHNOLOGY IN COMPUTER ENGINEERING",
      location: "Rajkot, Gujarat, India",
      period: "08.09.2022 - 24.06.2023",
      specialization: "EQR Level: 6 | Computer Engineering",
      status: "Completed"
    },
    {
      institution: "DELHI WORLD PUBLIC SCHOOL (DWPS)",
      degree: "12th Grade [ Central Board of Secondary Education (CBSE) ]",
      location: "Rajkot, Gujarat, India",
      period: "2022",
      specialization: "EQR Level: 5 | Senior Secondary",
      status: "Completed"
    },
    {
      institution: "DELHI WORLD PUBLIC SCHOOL (DWPS)",
      degree: "10th grade [ Central Board of Secondary Education (CBSE) ]",
      location: "Rajkot, Gujarat, India",
      period: "2020",
      specialization: "EQR Level: 3 | Secondary Education",
      status: "Completed"
    }
  ]
};

export const LANGUAGES: Record<Language, { name: string; level: string; proficiency: number }[]> = {
  de: [
    { name: "Gujarati", level: "Muttersprache(n)", proficiency: 100 },
    { name: "Englisch", level: "C1 (Hören, Lesen, Schreiben, Sprechen: C1)", proficiency: 92 },
    { name: "Deutsch", level: "B2 (Hören, Lesen, Schreiben, Sprechen: B2)", proficiency: 82 }
  ],
  en: [
    { name: "Gujarati", level: "Native Language", proficiency: 100 },
    { name: "English", level: "C1 Proficient (Listening, Reading, Writing, Speaking: C1)", proficiency: 92 },
    { name: "German (Deutsch)", level: "B2 Independent (Listening, Reading, Writing, Speaking: B2)", proficiency: 82 }
  ]
};

export const HOBBIES: Record<Language, string[]> = {
  de: [
    "Programmierung",
    "Musik Hören",
    "Fußball",
    "Cricket",
    "Fremdsprache Lernen"
  ],
  en: [
    "Programming",
    "Listening to Music",
    "Football / Soccer",
    "Cricket",
    "Learning Foreign Languages"
  ]
};

export const CERTIFICATES: Record<Language, CertificateItem[]> = {
  de: [
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
  ],
  en: [
    {
      id: "cert-1",
      title: "Software Design International (EQR Level 6)",
      issuer: "Technische Hochschule Aschaffenburg",
      date: "15.09.2024 - Present",
      credentialUrl: "https://www.th-ab.de/",
      skills: ["Software Design", "Java", "Spring Boot", "DBMS"]
    },
    {
      id: "cert-2",
      title: "B.Tech Computer Engineering (EQR Level 6)",
      issuer: "Marwadi University",
      date: "08.09.2022 - 24.06.2023",
      credentialUrl: "https://www.marwadiuniversity.ac.in/",
      skills: ["Computer Engineering", "Java", "HTML/CSS", "DBMS"]
    },
    {
      id: "cert-3",
      title: "12th Grade CBSE (EQR Level 5)",
      issuer: "DELHI WORLD PUBLIC SCHOOL (DWPS)",
      date: "2022",
      credentialUrl: "https://cbse.gov.in",
      skills: ["CBSE Science", "Mathematics"]
    },
    {
      id: "cert-4",
      title: "10th Grade CBSE (EQR Level 3)",
      issuer: "DELHI WORLD PUBLIC SCHOOL (DWPS)",
      date: "2020",
      credentialUrl: "https://cbse.gov.in",
      skills: ["CBSE General Education"]
    }
  ]
};

export const GITHUB_STATS: Record<Language, {
  username: string;
  totalCommits: number;
  pullRequests: number;
  starsEarned: number;
  repositories: { name: string; stars: number; language: string; desc: string }[];
}> = {
  de: {
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
  },
  en: {
    username: "aryan020104",
    totalCommits: 500,
    pullRequests: 28,
    starsEarned: 45,
    repositories: [
      { name: "InternFlow", stars: 15, language: "Java / Spring Boot", desc: "Internship Management System REST API with MySQL & JWT" },
      { name: "DroneNetOptimizer", stars: 12, language: "Java", desc: "Drone network optimization engine with graph algorithms" },
      { name: "OWASP-Juice-Shop-DevSecOps", stars: 18, language: "Docker / GitLab CI", desc: "DevSecOps automated security scanning pipeline" },
      { name: "Budgetting-App", stars: 10, language: "Java / JavaFX", desc: "Desktop personal financial manager application" }
    ]
  }
};

export const UI_STRINGS: Record<Language, {
  navLinks: { name: string; href: string }[];
  hero: {
    hello: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    taglinePre: string;
    taglinePost: string;
    viewProjects: string;
    downloadResume: string;
    scrollDown: string;
  };
  about: {
    badge: string;
    headingPart1: string;
    headingHighlight: string;
    coreCompetencies: string;
    institution: string;
    storyTab: string;
    languagesTab: string;
    academicTab: string;
    hobbiesTab: string;
    storyTitle: string;
    academicTitle: string;
    academicDesc: string;
    hobbiesTitle: string;
    hobbiesDesc: string;
    yearsExp: string;
    cvProjects: string;
    technologies: string;
    commits: string;
  };
  skills: {
    badge: string;
    headingPart1: string;
    headingHighlight: string;
    filterAll: string;
    productionReady: string;
    highProficiency: string;
  };
  projects: {
    badge: string;
    headingPart1: string;
    headingHighlight: string;
    filterAll: string;
    viewCaseStudy: string;
    architectureDetails: string;
    github: string;
    liveDemo: string;
  };
  experience: {
    badge: string;
    headingPart1: string;
    headingHighlight: string;
    currentInstitution: string;
    degreeLabel: string;
    locationLabel: string;
    timelineLabel: string;
    nationalityLabel: string;
    specializationAreas: string;
    specializationList: string[];
  };
  certificates: {
    badge: string;
    headingPart1: string;
    headingHighlight: string;
    verified: string;
    datum: string;
    passed: string;
    githubBadge: string;
    githubHeadlinePart1: string;
    githubHeadlineHighlight: string;
    commitsCount: string;
    prsCount: string;
    less: string;
    more: string;
  };
  contact: {
    badge: string;
    headingPart1: string;
    headingHighlight: string;
    directInfo: string;
    directDesc: string;
    email: string;
    phone: string;
    timezone: string;
    codeProfile: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}> = {
  de: {
    navLinks: [
      { name: "Über mich", href: "#about" },
      { name: "Kompetenzen", href: "#skills" },
      { name: "Projekte", href: "#projects" },
      { name: "Ausbildung", href: "#experience" },
      { name: "Zertifikate", href: "#certificates" },
      { name: "Kontakt", href: "#contact" }
    ],
    hero: {
      hello: "Hallo, ich bin Aryan",
      headlinePart1: "Architektur von",
      headlineHighlight: "Hochwirksamen",
      headlinePart2: "Systemen.",
      taglinePre: "Student an der",
      taglinePost: "spezialisiert auf robuste Backend-Systeme, Spring Boot, MySQL und DevSecOps-Pipelines.",
      viewProjects: "Projekte ansehen",
      downloadResume: "Lebenslauf herunterladen",
      scrollDown: "SCROLLEN"
    },
    about: {
      badge: "Über Aryan",
      headingPart1: "Entwickelt für",
      headingHighlight: "Präzision",
      coreCompetencies: "Kernkompetenzen",
      institution: "HOCHSCHULE",
      storyTab: "Profil",
      languagesTab: "Sprachen",
      academicTab: "Studium",
      hobbiesTab: "Hobbys",
      storyTitle: "Fokussiert, ruhig & angetrieben von praktischem Wissen.",
      academicTitle: "Software Design International — TH Aschaffenburg",
      academicDesc: "Studium Software Design International (EQR-Niveau 6) an der Technischen Hochschule Aschaffenburg. Zuvor Grundstudium Computer Engineering B.Tech. an der Marwadi University, Indien.",
      hobbiesTitle: "Hobbys und Interessen",
      hobbiesDesc: "Neben der Softwareentwicklung begeistere ich mich für Aktivitäten, die kontinuierliches Lernen, Teamwork und Konzentration fördern:",
      yearsExp: "Jahre Erf.",
      cvProjects: "CV Projekte",
      technologies: "Technologien",
      commits: "GitHub Commits"
    },
    skills: {
      badge: "Technische Expertise",
      headingPart1: "Fähigkeiten &",
      headingHighlight: "Technologien",
      filterAll: "Alle",
      productionReady: "Produktionsbereit",
      highProficiency: "Gute Kenntnisse"
    },
    projects: {
      badge: "Portfolio Arbeiten",
      headingPart1: "Entwickelte Systeme &",
      headingHighlight: "Web-Plattformen",
      filterAll: "Alle",
      viewCaseStudy: "Fallstudie ansehen",
      architectureDetails: "Architektur-Details",
      github: "Quellcode ansehen",
      liveDemo: "Live-Vorschau"
    },
    experience: {
      badge: "Studium & Ausbildung",
      headingPart1: "Ausbildung &",
      headingHighlight: "Studium",
      currentInstitution: "Aktuelle Hochschule",
      degreeLabel: "STUDIENGANG:",
      locationLabel: "STANDORT:",
      timelineLabel: "ZEITRAUM:",
      nationalityLabel: "NATIONALITÄT:",
      specializationAreas: "Spezialisierungsbereiche",
      specializationList: [
        "• Software Design International (EQR-Niveau 6)",
        "• Java Backend-Architektur (Spring Boot & MySQL)",
        "• Drohnennetzwerk-Optimierung & DevSecOps Pipelines"
      ]
    },
    certificates: {
      badge: "Zertifikate & Qualifikationen",
      headingPart1: "Zertifikate &",
      headingHighlight: "Tests",
      verified: "Verifiziert",
      datum: "Datum",
      passed: "Bestanden",
      githubBadge: "Open Source & Repositories",
      githubHeadlinePart1: "GitHub",
      githubHeadlineHighlight: "Aktivitäten",
      commitsCount: "Commits",
      prsCount: "PRs",
      less: "Weniger",
      more: "Mehr"
    },
    contact: {
      badge: "Kontakt",
      headingPart1: "Treten Sie in Kontakt mit",
      headingHighlight: "Aryan",
      directInfo: "Direkte Informationen",
      directDesc: "Kontaktieren Sie mich gerne für Software Engineering Anfragen, Werksstudentenstellen oder technische Zusammenarbeit.",
      email: "E-Mail",
      phone: "Telefon",
      timezone: "Mitteleuropäische Zeit (UTC+1 / Deutschland)",
      codeProfile: "Code & Profile",
      formName: "Name",
      formEmail: "E-Mail",
      formSubject: "Betreff / Thema",
      formMessage: "Nachricht",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre.email@beispiel.de",
      subjectPlaceholder: "z.B. Software Engineering / Werksstudent",
      messagePlaceholder: "Ihre Nachricht an Aryan...",
      submitBtn: "Nachricht senden",
      submittingBtn: "Wird gesendet...",
      successTitle: "Nachricht gesendet!",
      successDesc: "Vielen Dank für Ihre Nachricht. Ich werde mich innerhalb von 24 Stunden bei Ihnen melden."
    },
    footer: {
      tagline: "Erstellt mit Next.js 15, React Three Fiber, Framer Motion & TailwindCSS.",
      rights: "Alle Rechte vorbehalten."
    }
  },
  en: {
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Certificates", href: "#certificates" },
      { name: "Contact", href: "#contact" }
    ],
    hero: {
      hello: "Hello, I'm Aryan",
      headlinePart1: "Architecting",
      headlineHighlight: "High-Impact",
      headlinePart2: "Systems.",
      taglinePre: "Student at",
      taglinePost: "specializing in robust backend systems, Spring Boot, MySQL, and DevSecOps pipelines.",
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      scrollDown: "SCROLL DOWN"
    },
    about: {
      badge: "About Aryan",
      headingPart1: "Engineered for",
      headingHighlight: "Precision",
      coreCompetencies: "Core Competencies",
      institution: "INSTITUTION",
      storyTab: "Profile",
      languagesTab: "Languages",
      academicTab: "Academics",
      hobbiesTab: "Hobbies",
      storyTitle: "Focused, Composed, & Driven by Practical Knowledge.",
      academicTitle: "Software Design International — TH Aschaffenburg",
      academicDesc: "Enrolled in Software Design International B.Sc. (EQR Level 6) at Technische Hochschule Aschaffenburg, Germany. Previously completed B.Tech Computer Engineering coursework at Marwadi University, India.",
      hobbiesTitle: "Hobbies & Interests",
      hobbiesDesc: "Outside of software design, I enjoy activities that foster continuous learning, teamwork, and active focus:",
      yearsExp: "Years Exp",
      cvProjects: "CV Projects",
      technologies: "Technologies",
      commits: "GitHub Commits"
    },
    skills: {
      badge: "Technical Expertise",
      headingPart1: "Skills &",
      headingHighlight: "Technologies",
      filterAll: "All",
      productionReady: "Production Ready",
      highProficiency: "High Proficiency"
    },
    projects: {
      badge: "Featured Portfolio Works",
      headingPart1: "Engineered Systems &",
      headingHighlight: "Web Platforms",
      filterAll: "All",
      viewCaseStudy: "View Case Study",
      architectureDetails: "Architecture Details",
      github: "View Source Code",
      liveDemo: "Live Preview"
    },
    experience: {
      badge: "Academic & Education Journey",
      headingPart1: "Ausbildung &",
      headingHighlight: "Studium",
      currentInstitution: "Current Institution",
      degreeLabel: "DEGREE:",
      locationLabel: "LOCATION:",
      timelineLabel: "TIMELINE:",
      nationalityLabel: "NATIONALITY:",
      specializationAreas: "Specialization Areas",
      specializationList: [
        "• Software Design International (EQR Level 6)",
        "• Java Backend Architecture (Spring Boot & MySQL)",
        "• Drone Network Optimization & DevSecOps Pipelines"
      ]
    },
    certificates: {
      badge: "Certificates & Examinations",
      headingPart1: "Certificates &",
      headingHighlight: "Tests",
      verified: "Verified",
      datum: "Date",
      passed: "Passed",
      githubBadge: "Open Source & Repositories",
      githubHeadlinePart1: "GitHub",
      githubHeadlineHighlight: "Contributions",
      commitsCount: "Commits",
      prsCount: "PRs",
      less: "Less",
      more: "More"
    },
    contact: {
      badge: "Contact",
      headingPart1: "Get in Touch with",
      headingHighlight: "Aryan",
      directInfo: "Direct Information",
      directDesc: "Feel free to reach out for software engineering inquiries, working student roles, or technical collaborations.",
      email: "Email",
      phone: "Phone",
      timezone: "Central European Time (UTC+1 / Germany)",
      codeProfile: "Code & Profile",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "your.email@example.com",
      subjectPlaceholder: "e.g. Software Engineering / Working Student Role",
      messagePlaceholder: "Your message to Aryan...",
      submitBtn: "Send Message",
      submittingBtn: "Sending...",
      successTitle: "Message Sent!",
      successDesc: "Thank you for reaching out. I will get back to you within 24 hours."
    },
    footer: {
      tagline: "Built with Next.js 15, React Three Fiber, Framer Motion & TailwindCSS.",
      rights: "All rights reserved."
    }
  }
};
