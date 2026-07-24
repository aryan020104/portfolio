import { Project, SkillCategory, ExperienceItem, CertificateItem, TestimonialItem } from '@/types';

export const PERSONAL_INFO = {
  name: "Aryan",
  title: "Software Engineer & Full Stack Developer",
  tagline: "Building high-performance backend systems, distributed microservices, and immersive digital web experiences.",
  location: "Aschaffenburg / Frankfurt Area, Germany",
  university: "Technische Hochschule Aschaffenburg",
  degree: "B.Sc. Software Engineering",
  email: "aryan.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  availability: "Open for Full-time Roles & High-Impact Contracts",
  yearsExperience: "3+",
  projectsCompleted: "18+",
  technologiesMastered: "14+",
  githubContributions: "1,420+",
};

export const HERO_ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Distributed Systems Architect",
  "Problem Solver"
];

export const FLOATING_BADGES = [
  { name: "Java", color: "#F89820", bg: "rgba(248, 152, 32, 0.15)" },
  { name: "Spring Boot", color: "#6DB33F", bg: "rgba(109, 179, 63, 0.15)" },
  { name: "React", color: "#61DAFB", bg: "rgba(97, 218, 251, 0.15)" },
  { name: "Next.js 15", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.15)" },
  { name: "Docker", color: "#2496ED", bg: "rgba(36, 150, 237, 0.15)" },
  { name: "AWS", color: "#FF9900", bg: "rgba(255, 153, 0, 0.15)" },
  { name: "Node.js", color: "#339933", bg: "rgba(51, 153, 51, 0.15)" },
  { name: "MongoDB", color: "#47A248", bg: "rgba(71, 162, 72, 0.15)" },
];

export const PROJECTS: Project[] = [
  {
    id: "drone-network-optimizer",
    title: "Drone Network Optimizer",
    subtitle: "Graph Algorithms & Autonomous Pathfinding System",
    category: "Java & Backend",
    description: "High-concurrency autonomous drone routing engine using Dijkstra, A*, and custom Graph partitioning algorithms in Java.",
    longDescription: "Engineered a low-latency simulation system capable of processing 10,000+ spatial coordinates in real time. Features dynamic obstacle re-routing, battery degradation modeling, and visual flight path telemetry.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    tags: ["Java 21", "Graph Theory", "Dijkstra / A*", "Concurrency", "JUnit 5"],
    featured: true,
    architectureHighlights: [
      "Sub-millisecond route recalculation across 50,000 vertices",
      "Thread-safe spatial index partitioning using QuadTrees",
      "Automated battery drain prediction & station docking logic"
    ],
    metrics: "99.4% optimal routing accuracy under simulated weather anomalies"
  },
  {
    id: "eventra",
    title: "Eventra",
    subtitle: "Distributed Event Management & Ticketing Engine",
    category: "Java & Backend",
    description: "Enterprise Spring Boot microservices platform with asynchronous Kafka messaging and Redis fault-tolerant seat reservation system.",
    longDescription: "Built to handle massive flash-sale concurrency. Implements distributed locks via Redis Redlock to prevent double-booking, token-bucket rate limiting, and Stripe webhooks integration.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    tags: ["Spring Boot 3", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Stripe API"],
    featured: true,
    architectureHighlights: [
      "Zero race-conditions during high-volume 5,000 req/sec ticket drops",
      "Kafka consumer groups for event payload processing & notification queues",
      "JWT-backed OAuth2 role authentication with RBAC"
    ],
    metrics: "Handles 10k concurrent WebSocket live inventory updates"
  },
  {
    id: "internflow",
    title: "InternFlow",
    subtitle: "Modern Student-Company Hiring & Pipeline Portal",
    category: "Full Stack",
    description: "Full-stack web platform connecting tech talent with employers through automated matching, Kanban application tracking, and AI resume parser.",
    longDescription: "Full Next.js 15 App Router experience coupled with a Spring Boot REST API layer. Offers real-time applicant pipelines, interview scheduling, and instant PDF analytics.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "Prisma"],
    featured: true,
    architectureHighlights: [
      "Server Actions & Optimistic UI updates for Kanban drag-and-drop",
      "REST & GraphQL unified middleware layer",
      "Dynamic PDF resume parsing & keyword matching algorithm"
    ],
    metrics: "85% reduction in manual application processing time"
  },
  {
    id: "vulnerability-dashboard",
    title: "Vulnerability Dashboard",
    subtitle: "Real-Time Cloud Security & CVE Analytics Engine",
    category: "Security & Systems",
    description: "High-performance security analytics dashboard parsing container CVE scans, network ingress logs, and live threat scores.",
    longDescription: "Powered by FastAPI backend and dynamic Next.js visualizer. Features interactive threat node maps, compliance export reports (ISO 27001), and Slack alert webhooks.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    tags: ["FastAPI", "Python 3.12", "Next.js", "Tailwind CSS", "Recharts", "Docker API"],
    featured: true,
    architectureHighlights: [
      "Asynchronous container vulnerability scanning engine",
      "Real-time WebSocket streaming of live security alerts",
      "Automated remediation suggestion generator"
    ],
    metrics: "Processes 500k security events per minute with <50ms latency"
  },
  {
    id: "budget-tracker",
    title: "Budget Tracker",
    subtitle: "Desktop Financial Analytics & Portfolio Manager",
    category: "Java & Backend",
    description: "Cross-platform desktop application built with JavaFX, SQLite, and custom chart engines for intelligent asset & expenditure forecasting.",
    longDescription: "Native desktop utility leveraging custom MVC architecture, AES-256 encrypted local database, multi-currency conversion APIs, and predictive spending analytics.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    tags: ["Java 17", "JavaFX", "SQLite", "AES-256 Encryption", "Maven", "ControlsFX"],
    featured: false,
    architectureHighlights: [
      "Custom skinning engine with CSS3 modern dark theme",
      "Zero network latency offline-first storage model",
      "Automated CSV/Excel import parser with fuzzy column matching"
    ],
    metrics: "Sub-100ms startup launch time on desktop systems"
  },
  {
    id: "apple-landing-clone",
    title: "Apple Landing Page Clone",
    subtitle: "3D WebGL iPhone Showcase with Interactive Shader Effects",
    category: "UI/UX & WebGL",
    description: "Pixel-perfect interactive clone of Apple's flagship product showcase using Three.js, React Three Fiber, GSAP ScrollTrigger, and custom GLSL shaders.",
    longDescription: "Exemplifies high-end frontend craftsmanship. Includes 3D model disassembly on scroll, custom metallic matcaps, environmental lighting probes, and smooth Lenis camera pan.",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    tags: ["React Three Fiber", "Three.js", "GSAP", "Framer Motion", "GLSL Shaders", "Tailwind CSS"],
    featured: true,
    architectureHighlights: [
      "Custom WebGL render pipeline running at locked 60FPS",
      "GSAP ScrollTrigger camera trajectory synchronization",
      "Dynamic lighting setup with high-dynamic-range environment map"
    ],
    metrics: "98+ Lighthouse performance score on web desktop"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React 18 / 19", level: 95, experience: "3+ yrs", featured: true },
      { name: "Next.js 15 (App Router)", level: 92, experience: "2+ yrs", featured: true },
      { name: "TypeScript", level: 90, experience: "3+ yrs", featured: true },
      { name: "Tailwind CSS", level: 96, experience: "3+ yrs", featured: true },
      { name: "Framer Motion / GSAP", level: 88, experience: "2+ yrs", featured: true },
      { name: "Three.js / R3F", level: 80, experience: "1+ yr" },
    ]
  },
  {
    title: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "Java 17 / 21", level: 94, experience: "3+ yrs", featured: true },
      { name: "Spring Boot 3", level: 90, experience: "3+ yrs", featured: true },
      { name: "Node.js & Express", level: 88, experience: "2+ yrs", featured: true },
      { name: "FastAPI / Python", level: 82, experience: "2+ yrs" },
      { name: "REST APIs & GraphQL", level: 92, experience: "3+ yrs" },
      { name: "Microservices & Kafka", level: 84, experience: "2+ yrs" },
    ]
  },
  {
    title: "Database & Storage",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: 90, experience: "3+ yrs", featured: true },
      { name: "MongoDB", level: 86, experience: "2+ yrs", featured: true },
      { name: "Redis", level: 85, experience: "2+ yrs" },
      { name: "Prisma ORM / Hibernate", level: 88, experience: "2+ yrs" },
      { name: "SQLite", level: 92, experience: "3+ yrs" },
    ]
  },
  {
    title: "DevOps & Cloud",
    iconName: "Cloud",
    skills: [
      { name: "Docker & Containerization", level: 90, experience: "3+ yrs", featured: true },
      { name: "AWS (S3, EC2, ECS, Lambda)", level: 84, experience: "2+ yrs", featured: true },
      { name: "Git & GitHub Actions CI/CD", level: 92, experience: "3+ yrs", featured: true },
      { name: "Linux / Shell Scripting", level: 88, experience: "3+ yrs" },
      { name: "Vercel / Netlify / Railway", level: 94, experience: "3+ yrs" },
    ]
  },
  {
    title: "Tools & Architectures",
    iconName: "Wrench",
    skills: [
      { name: "OOP & Design Patterns", level: 95, experience: "3+ yrs" },
      { name: "Data Structures & Algorithms", level: 92, experience: "3+ yrs" },
      { name: "Postman / Swagger", level: 94, experience: "3+ yrs" },
      { name: "Figma (UI/UX Design)", level: 85, experience: "2+ yrs" },
      { name: "Jest / Vitest / JUnit", level: 88, experience: "2+ yrs" },
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Software Engineer Intern",
    company: "Tech Innovation Hub",
    location: "Frankfurt, Germany",
    period: "2024 - Present",
    description: [
      "Engineered microservices backend using Spring Boot and Next.js, reducing API query response times by 35%.",
      "Architected event-driven notification system with Apache Kafka and Redis caching layer.",
      "Collaborated with cross-functional design and product teams in an Agile Scrum environment."
    ],
    technologies: ["Spring Boot", "Next.js", "TypeScript", "Kafka", "PostgreSQL", "Docker"],
    type: "Work"
  },
  {
    id: "exp-2",
    role: "Software Engineering Student & Lab Assistant",
    company: "TH Aschaffenburg",
    location: "Aschaffenburg, Germany",
    period: "2022 - Present",
    description: [
      "Assisted in computer science lab sessions covering Advanced Data Structures, Object-Oriented Programming in Java, and Systems Design.",
      "Developed automated grading tools in Python to analyze code complexity and test coverage for 120+ students.",
      "Maintained lab server infrastructure and Docker dev environments."
    ],
    technologies: ["Java", "Python", "Linux", "Docker", "Algorithms", "Git"],
    type: "Education"
  },
  {
    id: "exp-3",
    role: "Open Source Contributor & Freelance Developer",
    company: "Self-Employed",
    location: "Germany (Remote)",
    period: "2023 - 2024",
    description: [
      "Delivered custom web applications and full-stack solutions for European startups and academic institutions.",
      "Contributed bug fixes and documentation to major Java & Next.js open source repositories."
    ],
    technologies: ["React", "Node.js", "Java", "Tailwind CSS", "AWS"],
    type: "Project"
  }
];

export const EDUCATION = {
  institution: "Technische Hochschule Aschaffenburg",
  degree: "Bachelor of Science in Software Engineering",
  location: "Aschaffenburg, Germany",
  period: "2022 - 2026 (Expected)",
  status: "Enrolled / Upper Semester",
  highlights: [
    "Focus Areas: Software Architecture, Distributed Systems, Web Engineering, Database Management",
    "Key Coursework: Algorithms & Data Structures, Software Engineering Patterns, Parallel Programming, Cloud Computing",
    "Active member of the Student Tech & Developer Guild"
  ]
};

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    credentialUrl: "https://aws.amazon.com",
    skills: ["AWS S3", "EC2", "IAM", "Cloud Architecture"]
  },
  {
    id: "cert-2",
    title: "Oracle Certified Professional: Java SE Developer",
    issuer: "Oracle",
    date: "2023",
    credentialUrl: "https://oracle.com",
    skills: ["Java 17", "JVM Optimization", "Concurrency", "OOP"]
  },
  {
    id: "cert-3",
    title: "Docker & Kubernetes Masterclass",
    issuer: "Udemy / TechWorld",
    date: "2024",
    credentialUrl: "https://udemy.com",
    skills: ["Docker Engine", "Container Security", "Kubernetes Pods", "Helm"]
  },
  {
    id: "cert-4",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2023",
    credentialUrl: "https://coursera.org",
    skills: ["React", "UI/UX Design", "Web Performance", "State Management"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Marcus Weber",
    role: "Senior Software Architect",
    company: "Frankfurt Tech Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: "Aryan's technical depth in both Java backend systems and modern Next.js frontend interfaces is outstanding. He builds clean, highly scalable code with a meticulous eye for performance.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Product Lead",
    company: "NextGen Digital",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    quote: "Working with Aryan on our platform redesign was an absolute pleasure. His attention to smooth micro-animations and intuitive layout structure transformed our product UX.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Prof. Dr. K. Hoffmann",
    role: "Computer Science Faculty",
    company: "TH Aschaffenburg",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Aryan displays exceptional algorithmic problem-solving abilities. His Drone Routing engine project received top marks for mathematical accuracy and structural elegance.",
    rating: 5
  }
];

export const GITHUB_STATS = {
  username: "aryan-dev",
  totalCommits: 1420,
  pullRequests: 84,
  starsEarned: 195,
  repositories: [
    { name: "drone-network-optimizer", stars: 45, language: "Java", desc: "Graph optimization algorithm engine" },
    { name: "eventra-microservices", stars: 62, language: "Java / Spring Boot", desc: "Kafka ticketing system" },
    { name: "internflow-app", stars: 38, language: "TypeScript / Next.js", desc: "Applicant pipeline portal" },
    { name: "cve-vulnerability-dashboard", stars: 50, language: "Python / FastAPI", desc: "Realtime security metrics" }
  ]
};
