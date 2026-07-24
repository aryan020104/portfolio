import { Project, SkillCategory, ExperienceItem, CertificateItem } from '@/types';

export const PERSONAL_INFO = {
  name: "Aryan Kishor Sorathiya",
  shortName: "Aryan",
  title: "Software Engineering Student & Full Stack Developer",
  tagline: "Specializing in Java system architecture, network algorithms, DevSecOps pipelines, and modern web application development.",
  bio: "Ich bin eine kontrollierte und ruhige Person mit Freude am Erwerb praktischen Wissens. Ich nehme Aufgaben sehr ernst, übernehme gerne Verantwortung und habe die Fähigkeit, Gruppen zu führen. Ich bin stets bereit, aus Fehlern zu lernen und mich weiterzuentwickeln.",
  location: "Schoberstr. 4, 63743 Aschaffenburg, Germany",
  university: "Technische Hochschule Aschaffenburg",
  degree: "B.Sc. Software Design",
  email: "aryansorathiya0201@gmail.com",
  phone: "+49 15566050468",
  github: "https://github.com/aryan020104",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  availability: "Open for Working Student / Full-Time Roles & Contracts",
  yearsExperience: "3+",
  projectsCompleted: "11+",
  technologiesMastered: "12+",
  githubContributions: "850+",
  dateOfBirth: "02.01.2004",
  nationality: "Indian"
};

export const HERO_ROLES = [
  "Software Design Student",
  "Java & C++ Developer",
  "DevSecOps & Cloud Specialist",
  "Problem Solver"
];

export const FLOATING_BADGES = [
  { name: "Java", color: "#F89820", bg: "rgba(248, 152, 32, 0.15)" },
  { name: "C / C++", color: "#659AD2", bg: "rgba(101, 154, 210, 0.15)" },
  { name: "Docker", color: "#2496ED", bg: "rgba(36, 150, 237, 0.15)" },
  { name: "GitLab CI/CD", color: "#FC6D26", bg: "rgba(252, 109, 38, 0.15)" },
  { name: "JavaFX", color: "#E76F00", bg: "rgba(231, 111, 0, 0.15)" },
  { name: "OWASP", color: "#10B981", bg: "rgba(16, 185, 129, 0.15)" },
  { name: "Figma", color: "#F24E1E", bg: "rgba(242, 78, 30, 0.15)" },
  { name: "Godot", color: "#478CBF", bg: "rgba(71, 140, 191, 0.15)" },
];

export const PROJECTS: Project[] = [
  {
    id: "drone-net-optimizer",
    title: "DroneNetOptimizer",
    subtitle: "Graph Routing & Drone Network Optimization",
    category: "Java & Backend",
    description: "Java-based autonomous drone network optimization engine implementing graph routing, node connectivity, and OOP architecture.",
    longDescription: "Developed an algorithm-driven simulation for drone network optimization in Java. Focuses on spatial graph partitioning, dynamic node routing, battery efficiency modeling, and robust Object-Oriented Software Design.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104",
    tags: ["Java", "OOP", "Graph Algorithms", "Network Communication", "Routing"],
    featured: true,
    architectureHighlights: [
      "Optimized graph routing algorithms for multi-node drone delivery networks",
      "Robust Object-Oriented Architecture with clean modular code structure",
      "Network packet routing & simulated signal connectivity logic"
    ],
    metrics: "High-precision routing simulation under variable network load"
  },
  {
    id: "owasp-juice-shop-devsecops",
    title: "OWASP Juice Shop DevSecOps",
    subtitle: "Automated Security & CI/CD Security Pipeline",
    category: "Security & Systems",
    description: "Automated DevSecOps pipeline for OWASP Juice Shop featuring static/dynamic vulnerability scanning with Docker and GitLab CI/CD.",
    longDescription: "Architected a complete DevSecOps security pipeline for OWASP Juice Shop application. Integrated automated vulnerability scanners, SAST/DAST analysis, container security audits, and OWASP Top 10 vulnerability remediation in GitLab CI/CD.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104",
    tags: ["Docker", "GitLab CI/CD", "OWASP Top 10", "DevSecOps", "Security Auditing"],
    featured: true,
    architectureHighlights: [
      "Automated CI/CD security scanning pipeline built with GitLab CI",
      "Container vulnerability assessment and image minimization with Docker",
      "Comprehensive analysis and defense strategies for OWASP Top 10 risks"
    ],
    metrics: "100% automated security scan coverage on code push"
  },
  {
    id: "drone-delivery-network",
    title: "DroneDeliveryNetwork",
    subtitle: "Autonomous Drone Flight & Node Coordination",
    category: "Java & Backend",
    description: "Java drone delivery network simulation engine facilitating real-time inter-node communication and spatial delivery coordination.",
    longDescription: "Engineered a simulation framework for drone-based logistics networks. Features real-time coordination between flight nodes, delivery queue management, and network state monitoring.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104",
    tags: ["Java", "Simulation", "Network Nodes", "Distributed Logic"],
    featured: true,
    architectureHighlights: [
      "Real-time coordination protocol for autonomous delivery nodes",
      "Event-driven simulation loop for dynamic delivery scheduling",
      "Extensible OOP node architecture for scalable fleet expansion"
    ]
  },
  {
    id: "hci-dashboard-design",
    title: "HCI Dashboard Design",
    subtitle: "Human-Computer Interaction & Figma Prototype",
    category: "UI/UX & WebGL",
    description: "Interactive UX dashboard prototype created in Figma adhering strictly to Human-Computer Interaction (HCI) usability principles.",
    longDescription: "Designed an intuitive enterprise analytics dashboard prototype. Applied cognitive load reduction techniques, ergonomic visual hierarchy, dark mode accessibility, and interactive design systems in Figma.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://figma.com",
    githubUrl: "https://github.com/aryan020104",
    tags: ["Figma", "HCI Principles", "UI/UX Design", "Wireframing", "Prototyping"],
    featured: true,
    architectureHighlights: [
      "Usability-centric design system based on standard HCI guidelines",
      "Interactive high-fidelity Figma components with micro-interactions",
      "Structured layout grids tuned for complex data visualization"
    ]
  },
  {
    id: "vulnerability-monitoring-dashboard",
    title: "Vulnerability Monitoring Dashboard",
    subtitle: "Security Analytics & Status Indicator Platform",
    category: "Security & Systems",
    description: "Interactive security dashboard for visual tracking of CVE vulnerabilities, system alert indicators, and live security telemetry.",
    longDescription: "Developed a security analytics visualizer prototype focusing on usability and swift threat detection. Displays threat level badges, real-time alert logs, and system vulnerability statistics.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104",
    tags: ["UI/UX & HCI", "Security", "Dashboard", "Threat Visualization"],
    featured: false,
    architectureHighlights: [
      "Status indicators for real-time security alert classification",
      "HCI-focused dark theme tailored for SOC analyst workflows",
      "Aggregated vulnerability metrics and exportable security reports"
    ]
  },
  {
    id: "budgeting-app",
    title: "Budgeting App",
    subtitle: "Desktop Personal Financial Manager",
    category: "Java & Backend",
    description: "Cross-platform desktop application built with Java & JavaFX for personal income, expense tracking, and financial analytics.",
    longDescription: "Desktop finance manager featuring custom GUI components built in JavaFX. Provides graphical expense visualization, budget categorizations, and encrypted local transaction storage.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104",
    tags: ["Java", "JavaFX", "Desktop GUI", "Financial Management"],
    featured: false,
    architectureHighlights: [
      "Custom JavaFX dark mode user interface with responsive layouts",
      "Modular MVC code architecture separating GUI from core logic",
      "Local persistence for secure expenditure records"
    ]
  },
  {
    id: "ipad-pro-website",
    title: "iPad Pro Website Clone",
    subtitle: "Modern Product Landing Page",
    category: "UI/UX & WebGL",
    description: "Responsive showcase landing page cloning Apple's iPad Pro website design using HTML5, CSS3, and modern layout techniques.",
    longDescription: "Pixel-perfect web landing page implementing sleek typography, fluid CSS grid layouts, smooth hover transitions, and responsive mobile breakpoints.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/aryan020104",
    tags: ["HTML5", "CSS3", "Responsive Design", "UI Styling"],
    featured: false,
    architectureHighlights: [
      "Modern CSS Flexbox & Grid responsive layout system",
      "Clean CSS keyframe micro-animations and image zoom effects",
      "Cross-browser performance optimization"
    ]
  },
  {
    id: "flappy-learn",
    title: "Flappy-Learn",
    subtitle: "Interactive Educational Game for Children",
    category: "Full Stack",
    description: "Interactive educational game built in Godot Engine for children featuring gamified mathematics and language learning mechanics.",
    longDescription: "Designed an engaging 2D learning game in Godot Engine. Combines Flappy-style mechanics with interactive quiz challenges to help children improve math and language skills.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104",
    tags: ["Godot Engine", "Game Dev", "Interactive UI", "EdTech"],
    featured: false,
    architectureHighlights: [
      "Custom 2D physics and collision detection script in Godot",
      "Gamified reward loops and interactive question generators",
      "Child-friendly UI design and audio feedback loops"
    ]
  },
  {
    id: "todo-list-cicd",
    title: "Todo List CI/CD",
    subtitle: "Automated Build & Deployment Pipeline",
    category: "Security & Systems",
    description: "Task management web application with fully automated GitLab CI/CD build, test, and container deployment workflow using Docker.",
    longDescription: "Implemented an automated pipeline for a task management application. Features automated unit test execution, Docker image building, and automated deployment stages in GitLab.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/aryan020104",
    tags: ["GitLab CI/CD", "Docker", "DevOps", "Automation"],
    featured: false,
    architectureHighlights: [
      "Multi-stage GitLab CI/CD pipeline configuration",
      "Isolated container builds with Docker",
      "Automated testing and image registry deployment"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: 92, experience: "3+ yrs", featured: true },
      { name: "C / C++", level: 85, experience: "2+ yrs", featured: true },
      { name: "C#", level: 80, experience: "2+ yrs" },
      { name: "JavaScript", level: 88, experience: "2+ yrs", featured: true },
    ]
  },
  {
    title: "Web & Design",
    iconName: "Layout",
    skills: [
      { name: "HTML5 / CSS3", level: 94, experience: "3+ yrs", featured: true },
      { name: "JavaFX", level: 88, experience: "2+ yrs", featured: true },
      { name: "Figma (UI/UX Design)", level: 90, experience: "2+ yrs", featured: true },
      { name: "Godot Engine", level: 78, experience: "1+ yr" },
    ]
  },
  {
    title: "DevOps & Tools",
    iconName: "Cloud",
    skills: [
      { name: "Docker", level: 88, experience: "2+ yrs", featured: true },
      { name: "GitLab CI/CD", level: 86, experience: "2+ yrs", featured: true },
      { name: "OWASP / DevSecOps", level: 84, experience: "2+ yrs", featured: true },
      { name: "Git & Version Control", level: 92, experience: "3+ yrs", featured: true },
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "B.Sc. Software Design Student",
    company: "Technische Hochschule Aschaffenburg",
    location: "Aschaffenburg, Bayern, Germany",
    period: "09/2024 - Present",
    description: [
      "Enrolled in Software Design B.Sc. focusing on Computer Science, Advanced Software Engineering, and Systems Architecture.",
      "Developing high-concurrency drone routing algorithms, graph optimization engines, and Java desktop applications.",
      "Participating actively in team projects, leading software architecture discussions, and peer mentoring."
    ],
    technologies: ["Java", "C++", "Software Design", "Graph Algorithms", "Git"],
    type: "Education"
  },
  {
    id: "exp-2",
    role: "B.Tech. Computer Engineering (Former Studies)",
    company: "Marwadi University",
    location: "Rajkot, India",
    period: "09/2022 - 06/2023",
    description: [
      "Completed foundational computer engineering coursework covering Object-Oriented Programming, Data Structures, and Database Management.",
      "Built early Java applications and interactive desktop utilities."
    ],
    technologies: ["C", "C++", "Java", "Data Structures"],
    type: "Education"
  }
];

export const EDUCATION_LIST = [
  {
    institution: "Technische Hochschule Aschaffenburg",
    degree: "Software Design (B.Sc.)",
    location: "Aschaffenburg, Bayern, Germany",
    period: "09/2024 - Present",
    specialization: "Informatik / Softwareentwicklung",
    status: "Currently Enrolled"
  },
  {
    institution: "Marwadi University",
    degree: "Bachelor of Technology — Computer Engineering",
    location: "Rajkot, India",
    period: "09/2022 - 06/2023",
    specialization: "Computer Engineering",
    status: "Completed Coursework"
  },
  {
    institution: "Delhi World Public School (DWPS)",
    degree: "Abitur (12th Grade - CBSE)",
    location: "Rajkot, India",
    period: "2022",
    specialization: "Science & Mathematics",
    status: "Completed (Grade: 83%)"
  },
  {
    institution: "Delhi World Public School (DWPS)",
    degree: "Mittlere Reife (10th Grade - CBSE)",
    location: "Rajkot, India",
    period: "2020",
    specialization: "General Secondary Education",
    status: "Completed (Grade: 83%)"
  }
];

export const LANGUAGES = [
  { name: "Gujarati", level: "Native (Muttersprache)", proficiency: 100 },
  { name: "English", level: "Full Professional (IELTS 7.0 / C1 Reading)", proficiency: 92 },
  { name: "German (Deutsch)", level: "Professional Working (Goethe-Zertifikat B2)", proficiency: 85 },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Goethe-Zertifikat B2",
    issuer: "Goethe-Institut",
    date: "02/2024",
    credentialUrl: "https://goethe.de",
    skills: ["German B2 Level", "Reading 71/100", "Writing 80/100", "Speaking 76/100"]
  },
  {
    id: "cert-2",
    title: "IELTS Academic (Overall Band 7.0)",
    issuer: "IDP / British Council",
    date: "07/2023",
    credentialUrl: "https://ielts.org",
    skills: ["Listening 7.5", "Reading 6.5", "Writing 6.5", "Speaking 6.5"]
  },
  {
    id: "cert-3",
    title: "Goethe-Zertifikat B1",
    issuer: "Goethe-Institut",
    date: "11/2023",
    credentialUrl: "https://goethe.de",
    skills: ["German B1 Level", "Reading 80/100", "Writing 96/100", "Speaking 72/100"]
  },
  {
    id: "cert-4",
    title: "TestAS Examination",
    issuer: "TestAS Institute",
    date: "04/2023",
    credentialUrl: "https://testas.de",
    skills: ["Core Test: 96/130", "Subject Module: 96/130"]
  }
];

export const GITHUB_STATS = {
  username: "aryan020104",
  totalCommits: 850,
  pullRequests: 42,
  starsEarned: 95,
  repositories: [
    { name: "DroneNetOptimizer", stars: 24, language: "Java", desc: "Drone network optimization in Java" },
    { name: "OWASP-Juice-Shop-DevSecOps", stars: 31, language: "Docker / GitLab CI", desc: "Security scanning pipeline" },
    { name: "DroneDeliveryNetwork", stars: 18, language: "Java", desc: "Drone flight coordination simulation" },
    { name: "Vulnerability-Monitoring-Dashboard", stars: 22, language: "Figma / UI", desc: "Security status visualization" }
  ]
};
