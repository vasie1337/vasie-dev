// Centralized data for portfolio and CV

export const personalInfo = {
  name: "Vasco Smith",
  displayName: "Vasco Smith",
  title: "Software Developer",
  email: "mail@vasie.dev",
  location: "Zutphen, Netherlands",
  website: "vasie.dev",
  github: "github.com/vasie1337",
  githubUrl: "https://github.com/vasie1337",
  linkedinUrl: "https://www.linkedin.com/in/vasco-smith-463503332/",
};

export const about = {
  summary: "Driven software developer with expertise in systems programming and security research. Experienced in Rust, C++, Go, and TypeScript with a focus on low-level Windows development and full-stack web applications. Strong in international collaboration through experience with English-speaking developers and clients. Looking for a challenging position where I can apply my technical knowledge and continue to grow in an innovative environment.",
  shortBio: "I'm a versatile software engineer with expertise spanning from low-level kernel development to modern web applications, passionate about performance optimization and clean architecture.",
};

export const skills = {
  technical: {
    languages: ["Rust", "C/C++", "Go", "TypeScript", "JavaScript", "Python", "Assembly (x86-64)"],
    frameworks: ["React", "Next.js", "Node.js", "Actix Web", "REST APIs"],
    systems: ["Windows Kernel", "Linux", "Driver Development", "PE Format", "Memory Management"],
    graphics: ["DirectX 11", "3D Rendering", "Physics Visualization"],
    security: ["Binary Obfuscation", "Anti-Analysis", "Control Flow Obfuscation", "Reverse Engineering"],
    tools: ["Git", "Docker", "Cargo", "npm", "Visual Studio", "VS Code"],
  },
  proficiency: [
    { name: "Systems Programming", level: "Expert" },
    { name: "Full-Stack Web Development", level: "Experienced" },
    { name: "Reverse Engineering & Security", level: "Expert" },
    { name: "Cross-platform Development", level: "Experienced" },
    { name: "Independent Project Management", level: "Experienced" },
    { name: "International Collaboration", level: "Experienced" },
  ],
  technologies: [
    "Rust", "Go", "C/C++", "TypeScript", "React", "Next.js", "Node.js", "Python", "Windows Kernel", "Linux", "Docker", "Git"
  ],
};

export const expertise = [
  {
    title: "Systems Programming",
    description: "Expertise in building efficient and safe systems using modern programming languages.",
    skills: ["Memory Safety", "Zero-Cost Abstractions", "High-Performance APIs"],
  },
  {
    title: "Kernel Development",
    description: "Specialization in low-level system programming and architecture.",
    skills: ["Driver Development", "Kernel Modules", "System Calls"],
  },
  {
    title: "Performance Optimization",
    description: "Focus on enhancing application efficiency and speed.",
    skills: ["CPU/Cache Optimization", "Memory Profiling", "Parallel Computing"],
  },
];

export const experience: {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}[] = [];

export const internships = [
  {
    title: "Software Developer Intern",
    company: "ByteZero",
    location: "Deventer",
    startDate: "Sep. 2025",
    endDate: "Feb. 2026",
    description: [
      "Developed proxy management systems and web scraping solutions using Rust and Go",
      "Built internal tooling and dashboards with Next.js for monitoring proxy infrastructure",
      "Collaborated on production microservices architecture for high-throughput data collection",
    ],
  },
  {
    title: "Founder",
    company: "Easystage.nl",
    location: "Zutphen",
    startDate: "Dec. 2025",
    endDate: "Present",
    description: [
      "Built a centralized internship search platform for MBO, HBO, and WO students in the Netherlands",
      "Aggregated 150,000+ internship listings from multiple platforms using Python web scrapers",
      "Implemented full-text search using Meilisearch for fast, relevant results",
      "Deployed containerized infrastructure with Docker and Next.js frontend",
    ],
  },
];

export const education = [
  {
    degree: "MBO Software Development Level 4",
    institution: "Aventus",
    location: "Deventer",
    startDate: "Aug. 2024",
    endDate: "Present",
  },
  {
    degree: "HAVO TTO (Bilingual Education)",
    institution: "Isendoorn College",
    location: "Zutphen",
    startDate: "Aug. 2019",
    endDate: "Jun. 2024",
  },
];

export const projects = [
  {
    title: "bin-obfuscator",
    category: "Binary Security Tool",
    description: "x86-64 PE binary obfuscator written in Rust. Features advanced obfuscation techniques for Windows executables including control flow obfuscation and anti-analysis measures.",
    cvDescription: [
      "Production-grade x86-64 PE binary obfuscator in Rust for Windows executables",
      "Implements control flow obfuscation, anti-analysis measures, and code transformation passes",
      "26 GitHub stars — recognized tool in the security research space",
    ],
    technologies: ["Rust", "Assembly", "x86-64", "PE Format"],
    githubUrl: "https://github.com/Vasie1337/bin-obfuscator",
  },
  {
    title: "kernel-anticheat",
    category: "Kernel Security Research",
    description: "A Windows kernel-mode driver for driver integrity testing and security research. Implements hypervisor detection, NMI callbacks, and advanced kernel-level monitoring techniques.",
    cvDescription: [
      "Windows kernel-level security tool for driver integrity testing and security research",
      "Implements hypervisor detection, NMI callbacks, and advanced kernel monitoring techniques",
      "181 GitHub stars, 32 forks — widely adopted in the security research community",
    ],
    technologies: ["C++", "Windows Kernel", "Driver Development"],
    githubUrl: "https://github.com/Vasie1337/kernel-anticheat",
  },
  {
    title: "cheat-framework",
    category: "Memory Analysis Framework",
    description: "Modular framework for memory analysis and adapter-based system access research. Demonstrates advanced low-level process interaction techniques and modular architecture design.",
    cvDescription: [
      "Modular framework for memory analysis and adapter-based system access research",
      "Demonstrates advanced low-level process interaction techniques and clean architecture patterns",
    ],
    technologies: ["C++", "Memory Management", "DMA", "Systems Programming"],
    githubUrl: "https://github.com/Vasie1337/cheat-framework",
  },
  {
    title: "cs2-parser",
    category: "Game Physics Visualization",
    description: "A tool for parsing and visualizing Counter-Strike 2 physics files (.vmdl). Extracts collision meshes from CS2 maps and renders them in a 3D environment, useful for game analysis and development.",
    cvDescription: [
      "Tool for parsing and visualizing CS2 physics files with DirectX 11 3D rendering",
    ],
    technologies: ["C++", "DirectX 11", "3D Rendering"],
    githubUrl: "https://github.com/Vasie1337/cs2-parser",
  },
  {
    title: "driver-remapper",
    category: "Kernel System Integration",
    description: "A system that remaps drivers to signed sections in the Windows kernel, featuring components for kernel-mode operations, driver mapping, and a user-mode interface for system communication.",
    cvDescription: [
      "System for remapping drivers to signed sections in the Windows kernel",
    ],
    technologies: ["C++", "C", "Windows Kernel"],
    githubUrl: "https://github.com/Vasie1337/driver-remapper",
  },
  {
    title: "sharedsection-driver",
    category: "Kernel Communication",
    description: "A Windows kernel driver that demonstrates efficient communication between kernel and user mode using shared memory sections and threading, showcasing advanced Windows driver development techniques.",
    cvDescription: [
      "Windows kernel driver demonstrating efficient kernel-user mode communication",
      "Implements shared memory sections and threading for high-performance data exchange",
      "82 GitHub stars, 16 forks — popular reference implementation for driver developers",
    ],
    technologies: ["C++", "Windows Kernel", "Shared Memory"],
    githubUrl: "https://github.com/Vasie1337/sharedsection-driver",
  },
  {
    title: "weather-api",
    category: "Next.js Weather App",
    description: "A modern weather statistics application built with Next.js, providing real-time weather data and statistics with an elegant user interface and responsive design.",
    technologies: ["Next.js", "React", "TypeScript"],
    githubUrl: "https://github.com/Vasie1337/weather-api",
  },
  {
    title: "todo-app",
    category: "REST API Development",
    description: "A modern todo REST API built with Rust and Actix Web, featuring SQLite database integration and clean architecture patterns for high-performance web services.",
    technologies: ["Rust", "Actix Web", "SQLite", "REST API"],
    githubUrl: "https://github.com/Vasie1337/todo-app",
  },
];

export const languages = [
  { name: "Dutch", level: "Native" },
  { name: "English", level: "C2" },
];

export const references = [
  {
    name: "Daan Jumelet",
    company: "ByteZero",
    email: "daan@bytezero.io",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/vasie1337",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:mail@vasie.dev",
    icon: "mail",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vasco-smith-463503332/",
    icon: "linkedin",
  },
  {
    name: "CV",
    url: "/cv",
    icon: "file-text",
  },
];

export const themeConfig = {
  light: {
    bgGradient: {
      from: 'from-gray-50',
      via: 'via-gray-50',
      to: 'to-gray-50',
    },
    blobs: {
      primary: 'from-blue-400/10 to-purple-400/10',
      secondary: 'from-purple-400/10 to-pink-400/10',
      tertiary: 'from-pink-400/10 to-blue-400/10',
    },
    card: {
      bg: 'bg-white/60',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-white/80',
      hoverBorder: 'hover:border-gray-300',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
    },
    accent: {
      primary: 'gray',
      secondary: 'gray',
      ring: 'ring-gray-200 hover:ring-gray-300',
    },
  },
  dark: {
    bgGradient: {
      from: 'from-black',
      via: 'via-black',
      to: 'to-black',
    },
    blobs: {
      primary: 'from-blue-500/8 to-purple-500/8',
      secondary: 'from-purple-500/8 to-pink-500/8',
      tertiary: 'from-pink-500/8 to-blue-500/8',
    },
    card: {
      bg: 'bg-white/[0.02]',
      border: 'border-white/[0.05]',
      hoverBg: 'hover:bg-white/[0.04]',
      hoverBorder: 'hover:border-white/10',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-400',
      muted: 'text-gray-500',
    },
    accent: {
      primary: 'gray',
      secondary: 'gray',
      ring: 'ring-white/5 hover:ring-white/10',
    },
  },
};
