'use client';

import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation, usePageLoadAnimation } from "@/lib/animations";
import { useState, useEffect } from "react";

const themeConfig = {
  light: {
    bgGradient: {
      from: 'from-blue-50',
      via: 'via-purple-50',
      to: 'to-pink-50'
    },
    blobs: {
      primary: 'from-blue-400/20 to-purple-400/20',
      secondary: 'from-purple-400/20 to-pink-400/20',
      tertiary: 'from-pink-400/20 to-blue-400/20'
    },
    card: {
      bg: 'bg-white/40',
      border: 'border-white/60',
      hoverBg: 'hover:bg-white/50',
      hoverBorder: 'hover:border-white/70'
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      muted: 'text-gray-600'
    },
    accent: {
      primary: 'purple',
      secondary: 'blue',
      ring: 'ring-purple-400/20 hover:ring-purple-400/30'
    }
  },
  dark: {
    bgGradient: {
      from: 'from-black',
      via: 'via-black',
      to: 'to-black'
    },
    blobs: {
      primary: 'from-blue-600/20 to-purple-600/20',
      secondary: 'from-purple-600/20 to-pink-600/20',
      tertiary: 'from-pink-600/20 to-blue-600/20'
    },
    card: {
      bg: 'bg-white/5',
      border: 'border-white/10',
      hoverBg: 'hover:bg-white/10',
      hoverBorder: 'hover:border-white/20'
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-200',
      muted: 'text-gray-400'
    },
    accent: {
      primary: 'purple',
      secondary: 'blue',
      ring: 'ring-purple-400/20 hover:ring-purple-400/30'
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
      <div className={`fixed inset-0 bg-gradient-to-br ${theme.bgGradient.from} ${theme.bgGradient.via} ${theme.bgGradient.to} backdrop-blur-xl flex items-center justify-center z-[9999] transition-all duration-500 ${isPageLoaded ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
        <div className={`w-10 h-10 border-3 ${isDark ? 'border-gray-900 border-t-purple-400' : 'border-purple-200 border-t-purple-600'} rounded-full animate-spin`}></div>
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
            <div className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-2xl border ${theme.card.border} ${theme.card.hoverBorder} p-6 lg:p-8 rounded-3xl lg:sticky lg:top-6 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-700 ease-out ${heroVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 -translate-x-10 blur-sm'}`}>
              <div className="space-y-6">
                <div className="flex justify-center animate-in zoom-in-75 duration-1000 delay-300">
                  <div className="relative">
                    <Image
                      src="/avatar.jpg"
                      alt="Profile Avatar"
                      width={120}
                      height={120}
                      className={`rounded-full ring-4 ${theme.accent.ring} shadow-2xl transition-all duration-500 hover:scale-105`}
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

                <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
                  <Button size="sm" asChild className={`w-full ${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-md border ${theme.card.border} ${theme.card.hoverBorder} ${theme.text.primary} hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl`}>
                    <a href="https://github.com/vasie1337" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild className={`w-full ${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-md border ${theme.card.border} ${theme.card.hoverBorder} ${theme.text.primary} hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl`}>
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
              <div className="mb-8">
                <div className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-2xl border ${theme.card.border} ${theme.card.hoverBorder} p-6 rounded-2xl mb-6 shadow-xl transition-all duration-700 ease-out ${expertiseVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-10 blur-sm'}`}>
                  <p className={`${theme.text.secondary} text-lg transition-all duration-800 ${expertiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{portfolioData.sections.expertise.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolioData.expertise.areas.map((area, index) => (
                <div
                  key={index}
                  className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-xl border ${theme.card.border} ${theme.card.hoverBorder} p-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-500 h-full animate-in fade-in slide-in-from-bottom-8 zoom-in-95`}
                  style={{animationDelay: `${0.1 + index * 0.1}s`}}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${theme.accent.primary}-500 rounded-full animate-pulse`}></div>
                      <h3 className={`font-semibold text-lg ${theme.text.primary} transition-colors duration-500`}>{area.title}</h3>
                    </div>
                    <p className={`text-sm ${theme.text.secondary} leading-relaxed transition-colors duration-500`}>
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`text-xs ${isDark ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-800/30 text-gray-300 hover:from-purple-900/50 hover:to-pink-900/50' : 'bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200 text-gray-700 hover:from-purple-200 hover:to-pink-200'} backdrop-blur-sm border px-2 py-1 rounded-md transition-all duration-300 hover:scale-105`}
                          style={{animationDelay: `${0.5 + index * 0.1 + skillIndex * 0.05}s`}}
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
              <div className="mb-8">
                <div className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-2xl border ${theme.card.border} ${theme.card.hoverBorder} p-6 rounded-2xl mb-6 shadow-xl transition-all duration-700 ease-out ${projectsVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-10 blur-sm'}`}>
                  <p className={`${theme.text.secondary} text-lg transition-all duration-800 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{portfolioData.sections.projects.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, index) => (
                <div
                  key={index}
                  className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-xl border ${theme.card.border} ${theme.card.hoverBorder} rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-500 group h-full animate-in fade-in slide-in-from-bottom-8 zoom-in-95`}
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-1">
                        <h3 className={`text-lg font-semibold ${theme.text.primary} transition-colors duration-500`}>{project.title}</h3>
                        <p className={`text-xs ${theme.text.muted} font-mono uppercase tracking-wider transition-colors duration-500`}>
                          {project.category}
                        </p>
                      </div>
                      <button className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-sm border ${theme.card.border} ${theme.card.hoverBorder} ${theme.text.secondary} hover:scale-110 active:scale-95 transition-all duration-300 p-2 rounded-lg shadow-md`}>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </button>
                    </div>

                    <p className={`text-sm ${theme.text.secondary} mb-4 leading-relaxed transition-colors duration-500`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`text-xs ${isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-800/30 text-gray-300 hover:from-blue-900/50 hover:to-purple-900/50' : 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200 text-gray-700 hover:from-blue-200 hover:to-purple-200'} backdrop-blur-sm border px-2 py-1 rounded-md transition-all duration-300 hover:scale-105`}
                          style={{animationDelay: `${0.7 + index * 0.1 + techIndex * 0.03}s`}}
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
              <div className="mb-8">
                <div className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-2xl border ${theme.card.border} ${theme.card.hoverBorder} p-6 rounded-2xl mb-6 shadow-xl transition-all duration-700 ease-out ${techVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-10 blur-sm'}`}>
                  <p className={`${theme.text.secondary} text-lg transition-all duration-800 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{portfolioData.sections.technologies.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {portfolioData.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-sm border ${theme.card.border} ${theme.card.hoverBorder} text-center py-3 px-4 rounded-lg ${theme.text.secondary} font-medium hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in-95`}
                    style={{animationDelay: `${0.1 + index * 0.05}s`}}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <footer className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-2xl border ${theme.card.border} ${theme.card.hoverBorder} mt-12 px-6 py-6 rounded-2xl text-center shadow-xl animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-1500 transition-all duration-500`}>
          <p className={`text-sm ${theme.text.muted} transition-colors duration-500`}>© {getyear()} {portfolioData.contact.copyright}</p>
        </footer>
      </div>
    </div>
    </>
  );
}