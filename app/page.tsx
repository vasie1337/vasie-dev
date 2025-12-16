'use client';

import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation, usePageLoadAnimation } from "@/lib/animations";
import { useState, useEffect } from "react";

const themeConfig = {
  light: {
    bgGradient: {
      from: 'from-gray-50',
      via: 'via-gray-50',
      to: 'to-gray-50'
    },
    blobs: {
      primary: 'from-blue-400/10 to-purple-400/10',
      secondary: 'from-purple-400/10 to-pink-400/10',
      tertiary: 'from-pink-400/10 to-blue-400/10'
    },
    card: {
      bg: 'bg-white/60',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-white/80',
      hoverBorder: 'hover:border-gray-300'
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500'
    },
    accent: {
      primary: 'gray',
      secondary: 'gray',
      ring: 'ring-gray-200 hover:ring-gray-300'
    }
  },
  dark: {
    bgGradient: {
      from: 'from-black',
      via: 'via-black',
      to: 'to-black'
    },
    blobs: {
      primary: 'from-blue-500/8 to-purple-500/8',
      secondary: 'from-purple-500/8 to-pink-500/8',
      tertiary: 'from-pink-500/8 to-blue-500/8'
    },
    card: {
      bg: 'bg-white/[0.02]',
      border: 'border-white/[0.05]',
      hoverBg: 'hover:bg-white/[0.04]',
      hoverBorder: 'hover:border-white/10'
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-400',
      muted: 'text-gray-500'
    },
    accent: {
      primary: 'gray',
      secondary: 'gray',
      ring: 'ring-white/5 hover:ring-white/10'
    }
  }
};

const portfolioData = {
  hero: {
    heading: "vasie1337",
    title: "Full-Stack & Systems Engineer"
  },
  about: {
    background: "I'm a versatile software engineer with expertise spanning from low-level kernel development to modern web applications, passionate about performance optimization and clean architecture.",
    location: "The Netherlands"
  },
  sections: {
    expertise: {
      subtitle: "Core areas of my technical specialization"
    },
    projects: {
      subtitle: "Selected work showcasing my technical capabilities"
    },
    technologies: {
      subtitle: "Languages, frameworks, and tools I work with"
    }
  },
  expertise: {
    areas: [
      {
        "title": "Systems Programming",
        "description": "Expertise in building efficient and safe systems using modern programming languages.",
        "skills": [
          "Memory Safety",
          "Zero-Cost Abstractions",
          "High-Performance APIs"
        ]
      },
      {
        "title": "Kernel Development",
        "description": "Specialization in low-level system programming and architecture.",
        "skills": [
          "Driver Development",
          "Kernel Modules",
          "System Calls"
        ]
      },
      {
        "title": "Performance Optimization",
        "description": "Focus on enhancing application efficiency and speed.",
        "skills": [
          "CPU/Cache Optimization",
          "Memory Profiling",
          "Parallel Computing"
        ]
      }
    ]
  },
  technologies: [
    "Rust", "Go", "C/C++", "TypeScript", "React", "Next.js", "Node.js", "Python", "Windows Kernel", "Linux", "Docker", "Git"
  ],
  projects: [
    {
      title: "bin-obfuscator",
      category: "Binary Security Tool",
      description: "x86-64 PE binary obfuscator written in Rust. Features advanced obfuscation techniques for Windows executables including control flow obfuscation and anti-analysis measures.",
      technologies: ["Rust", "Assembly", "x86-64", "PE Format"],
      githubUrl: "https://github.com/Vasie1337/bin-obfuscator"
    },
    {
      title: "cheat-framework",
      category: "Game Development Framework",
      description: "Monorepo for game cheats with shared framework and adapter-based system access. Demonstrates advanced memory manipulation techniques and modular architecture design.",
      technologies: ["C++", "Memory Management", "DMA", "External APIs"],
      githubUrl: "https://github.com/Vasie1337/cheat-framework"
    },
    {
      title: "kernel-anticheat",
      category: "Windows Kernel Development",
      description: "A Windows kernel-mode driver designed to detect and prevent game cheats. Implements advanced detection mechanisms and security features to maintain game integrity at the kernel level.",
      technologies: ["C++", "Windows Kernel", "Driver Development"],
      githubUrl: "https://github.com/Vasie1337/kernel-anticheat"
    },
    {
      title: "sharedsection-driver",
      category: "Kernel Communication",
      description: "A Windows kernel driver that demonstrates efficient communication between kernel and user mode using shared memory sections and threading, showcasing advanced Windows driver development techniques.",
      technologies: ["C++", "Windows Kernel", "Shared Memory"],
      githubUrl: "https://github.com/Vasie1337/sharedsection-driver"
    },
    {
      title: "weather-api",
      category: "Next.js Weather App",
      description: "A modern weather statistics application built with Next.js, providing real-time weather data and statistics with an elegant user interface and responsive design.",
      technologies: ["Next.js", "React", "TypeScript"],
      githubUrl: "https://github.com/Vasie1337/weather-api"
    },
    {
      title: "todo-app",
      category: "REST API Development",
      description: "A modern todo REST API built with Rust and Actix Web, featuring SQLite database integration and clean architecture patterns for high-performance web services.",
      technologies: ["Rust", "Actix Web", "SQLite", "REST API"],
      githubUrl: "https://github.com/Vasie1337/todo-app"
    },
    {
      title: "driver-remapper",
      category: "Kernel System Integration",
      description: "A system that remaps drivers to signed sections in the Windows kernel, featuring components for kernel-mode operations, driver mapping, and a user-mode interface for system communication.",
      technologies: ["C++", "C", "Windows Kernel"],
      githubUrl: "https://github.com/Vasie1337/driver-remapper"
    },
    {
      title: "cs2-parser",
      category: "Game Physics Visualization",
      description: "A tool for parsing and visualizing Counter-Strike 2 physics files (.vmdl). Extracts collision meshes from CS2 maps and renders them in a 3D environment, useful for game analysis and development.",
      technologies: ["C++", "DirectX 11", "3D Rendering"],
      githubUrl: "https://github.com/Vasie1337/cs2-parser"
    }
  ],
  contact: {
    links: [
      {
        name: "GitHub",
        url: "https://github.com/vasie1337",
        icon: "github"
      },
      {
        name: "Email",
        url: "mailto:contact@vasie.dev",
        icon: "mail"
      }
    ],
    copyright: "Vasie All rights reserved."
  }
};

export default function Home() {
  const getyear = () => {
    return new Date().getFullYear();
  }

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: expertiseRef, isVisible: expertiseVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();
  const isPageLoaded = usePageLoadAnimation();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const theme = isDark ? themeConfig.dark : themeConfig.light;

  return (
    <>
      <div className={`fixed inset-0 bg-gradient-to-br ${theme.bgGradient.from} ${theme.bgGradient.via} ${theme.bgGradient.to} flex items-center justify-center z-[9999] transition-all duration-300 ${isPageLoaded ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
        <div className={`w-8 h-8 border-2 ${isDark ? 'border-white/10 border-t-white/40' : 'border-gray-200 border-t-gray-600'} rounded-full animate-spin`}></div>
      </div>

      <div className={`min-h-screen relative overflow-hidden scroll-smooth transition-all duration-800 ${isPageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgGradient.from} ${theme.bgGradient.via} ${theme.bgGradient.to} transition-colors duration-500`}></div>
          <div className={`absolute top-0 -left-1/4 w-96 h-96 bg-gradient-to-br ${theme.blobs.primary} rounded-full blur-3xl animate-blob transition-colors duration-500`}></div>
          <div className={`absolute top-0 -right-1/4 w-96 h-96 bg-gradient-to-br ${theme.blobs.secondary} rounded-full blur-3xl animate-blob animation-delay-2000 transition-colors duration-500`}></div>
          <div className={`absolute -bottom-8 left-1/3 w-96 h-96 bg-gradient-to-br ${theme.blobs.tertiary} rounded-full blur-3xl animate-blob animation-delay-4000 transition-colors duration-500`}></div>
          <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]'} transition-opacity duration-500`}></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">

          <div className="md:col-span-1 space-y-6">
            <section ref={heroRef as React.RefObject<HTMLElement>}>
            <div className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-xl border ${theme.card.border} ${theme.card.hoverBorder} p-6 lg:p-8 rounded-2xl lg:sticky lg:top-6 transition-all duration-300 ${heroVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 -translate-x-10 blur-sm'}`}>
              <div className="space-y-6">
                <div className="flex justify-center animate-in zoom-in-75 duration-1000 delay-300">
                  <div className="relative">
                    <Image
                      src="/avatar.jpg"
                      alt="Profile Avatar"
                      width={120}
                      height={120}
                      className={`rounded-full ring-2 ${theme.accent.ring} transition-all duration-300`}
                      priority
                    />
                  </div>
                </div>

                <div className="text-center space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                  <h1 className={`text-2xl lg:text-3xl font-bold ${theme.text.primary} animate-in fade-in slide-in-from-bottom-2 duration-800 delay-600 transition-colors duration-500`}>{portfolioData.hero.heading}</h1>
                  <p className={`${theme.text.secondary} text-sm lg:text-base animate-in fade-in slide-in-from-bottom-2 duration-800 delay-700 transition-colors duration-500`}>{portfolioData.hero.title}</p>
                </div>

                <p className={`text-sm ${theme.text.muted} leading-relaxed text-center animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-800 transition-colors duration-500`}>
                  {portfolioData.about.background}
                </p>

                <div className={`space-y-3 text-sm ${theme.text.muted} animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-900 transition-colors duration-500`}>
                  <div className={`flex items-center justify-center gap-2 transition-all duration-300 hover:${theme.text.primary}`}>
                    <MapPin className="h-4 w-4" />
                    {portfolioData.about.location}
                  </div>
                  <div className={`flex items-center justify-center gap-2 transition-all duration-300 hover:${theme.text.primary}`}>
                    <Mail className="h-4 w-4" />
                    <a href="mailto:contact@vasie.dev" className={`hover:${theme.text.primary} transition-colors duration-300`}>
                      contact@vasie.dev
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
                  <Button size="sm" asChild className={`w-full ${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-md border ${theme.card.border} ${theme.card.hoverBorder} ${theme.text.primary} transition-all duration-200 rounded-lg`}>
                    <a href="https://github.com/vasie1337" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild className={`w-full ${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-md border ${theme.card.border} ${theme.card.hoverBorder} ${theme.text.primary} transition-all duration-200 rounded-lg`}>
                    <a href="mailto:contact@vasie.dev">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            </section>
          </div>

          <div className="md:col-span-2 lg:col-span-3 space-y-8 lg:space-y-12">

            <section ref={expertiseRef as React.RefObject<HTMLElement>}>
              <div className="mb-6">
                <p className={`${theme.text.secondary} text-base transition-all duration-300 ${expertiseVisible ? 'opacity-100' : 'opacity-0'}`}>{portfolioData.sections.expertise.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {portfolioData.expertise.areas.map((area, index) => (
                <div
                  key={index}
                  className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-xl border ${theme.card.border} ${theme.card.hoverBorder} p-5 rounded-xl transition-all duration-200 h-full`}
                >
                  <div className="space-y-3">
                    <h3 className={`font-semibold text-base ${theme.text.primary} transition-colors duration-300`}>{area.title}</h3>
                    <p className={`text-sm ${theme.text.secondary} leading-relaxed transition-colors duration-500`}>
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`text-xs ${isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'} border px-2.5 py-1 rounded-md transition-colors duration-200`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </section>

            <section ref={projectsRef as React.RefObject<HTMLElement>}>
              <div className="mb-6">
                <p className={`${theme.text.secondary} text-base transition-all duration-300 ${projectsVisible ? 'opacity-100' : 'opacity-0'}`}>{portfolioData.sections.projects.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {portfolioData.projects.map((project, index) => (
                <div
                  key={index}
                  className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-xl border ${theme.card.border} ${theme.card.hoverBorder} rounded-xl transition-all duration-200 group h-full`}
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="space-y-0.5">
                        <h3 className={`text-base font-semibold ${theme.text.primary} transition-colors duration-300`}>{project.title}</h3>
                        <p className={`text-xs ${theme.text.muted} transition-colors duration-300`}>
                          {project.category}
                        </p>
                      </div>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${theme.text.muted} hover:${theme.text.primary} transition-colors duration-200`}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <p className={`text-sm ${theme.text.secondary} mb-4 leading-relaxed transition-colors duration-500`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`text-xs ${isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'} border px-2.5 py-1 rounded-md transition-colors duration-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </section>

            <section ref={techRef as React.RefObject<HTMLElement>}>
              <div className="mb-6">
                <p className={`${theme.text.secondary} text-base transition-all duration-300 ${techVisible ? 'opacity-100' : 'opacity-0'}`}>{portfolioData.sections.technologies.subtitle}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {portfolioData.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`${theme.card.bg} ${theme.card.hoverBg} border ${theme.card.border} ${theme.card.hoverBorder} text-center py-2.5 px-3 rounded-lg ${theme.text.secondary} text-sm transition-all duration-200`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <footer className={`mt-12 px-6 py-4 text-center transition-all duration-300`}>
          <p className={`text-xs ${theme.text.muted} transition-colors duration-300`}>© {getyear()} {portfolioData.contact.copyright}</p>
        </footer>
      </div>
    </div>
    </>
  );
}