import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ExternalLink, MapPin, Users } from "lucide-react";
import Image from "next/image";

const portfolioData = {
  hero: {
    heading: "vasie1337",
    title: "Software Engineer"
  },
  about: {
    background: "A software engineer passionate about low-level programming, modular software design, and system optimization.",
    location: "The Netherlands"
  },
  expertise: {
    areas: [
      {
        title: "C/C++",
        description: "Extensive experience with system-level programming, memory management, and performance optimization in C and C++.",
        skills: [
          "Memory Management",
          "Performance Optimization",
          "Multi-threading",
          "Low-level System Programming"
        ]
      },
      {
        title: "Kernel Development",
        description: "Specialized in OS kernel development, device drivers, and system-level architecture design.",
        skills: [
          "Driver Development",
          "Kernel Modules",
          "Interrupt Handling",
          "System Calls"
        ]
      },
      {
        title: "Performance Optimization",
        description: "Specialized in optimizing applications for maximum performance, low latency, and high throughput.",
        skills: [
          "CPU/Cache Optimization",
          "Memory Profiling",
          "Algorithmic Improvements",
          "Parallel Computing"
        ]
      }
    ]
  },
  projects: [
    {
      title: "kernel-anticheat",
      category: "Windows Kernel Development",
      description: "A Windows kernel-mode driver designed to detect and prevent game cheats. Implements advanced detection mechanisms and security features to maintain game integrity at the kernel level.",
      technologies: ["C++", "Windows Kernel", "Driver Development"],
      githubUrl: "https://github.com/Vasie1337/kernel-anticheat"
    },
    {
      title: "weather-api",
      category: "Next.js Weather App",
      description: "A modern weather statistics application built with Next.js, providing real-time weather data and statistics with an elegant user interface and responsive design.",
      technologies: ["Next.js", "React", "TypeScript"],
      githubUrl: "https://github.com/Vasie1337/weather-api"
    },
    {
      title: "sharedsection-driver",
      category: "Kernel Communication",
      description: "A Windows kernel driver that demonstrates efficient communication between kernel and user mode using shared memory sections and threading, showcasing advanced Windows driver development techniques.",
      technologies: ["C++", "Windows Kernel", "Shared Memory"],
      githubUrl: "https://github.com/Vasie1337/sharedsection-driver"
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
    },
    {
      title: "todo-app",
      category: "Todo API",
      description: "A simple todo api built with Rust and Actix Web",
      technologies: ["Rust", "Actix Web"],
      githubUrl: "https://github.com/Vasie1337/todo-app"
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

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: 'url(/wallpaper.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          <div className="lg:col-span-1 space-y-6">
            <div className="apple-glass-strong p-6 rounded-3xl">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src="/avatar.jpg"
                      alt="Profile Avatar"
                      width={120}
                      height={120}
                      className="rounded-full ring-4 ring-white/20 ring-offset-4 ring-offset-transparent"
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold text-white">{portfolioData.hero.heading}</h1>
                  <p className="text-white/80 text-sm">{portfolioData.hero.title}</p>
                </div>

                <p className="text-sm text-white/70 leading-relaxed text-center">
                  {portfolioData.about.background}
                </p>

                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {portfolioData.about.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:contact@vasie.dev" className="hover:text-white transition-colors">contact@vasie.dev</a>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" asChild className="flex-1 apple-glass-badge border-0 text-white hover:apple-glass-hover transition-all">
                    <a href="https://github.com/vasie1337" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.expertise.areas.map((area, index) => (
                <div key={index} className="apple-glass p-6 rounded-2xl hover:apple-glass-hover transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <h3 className="font-semibold text-lg text-white">{area.title}</h3>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs apple-glass-badge text-white/80 px-2 py-1 rounded-md transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6">
            {portfolioData.projects.map((project, index) => (
                <div key={index} className="apple-glass rounded-2xl apple-glass-hover transition-all duration-300 group">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        <p className="text-xs text-white/60 font-mono uppercase tracking-wider">
                          {project.category}
                        </p>
                      </div>
                      <button className="apple-glass-badge text-white/70 hover:text-white transition-all border-0 p-2 rounded-lg">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </button>
                    </div>

                    <p className="text-sm text-white/80 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs apple-glass-badge text-white/80 px-2 py-1 rounded-md transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>

        <footer className="apple-glass mt-8 px-6 py-4 rounded-2xl text-center text-xs text-white/60">
          © {getyear()} {portfolioData.contact.copyright}
        </footer>
      </div>
    </div>
  );
}