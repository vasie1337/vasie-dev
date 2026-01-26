'use client';

import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink, MapPin, FileText, Linkedin } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation, usePageLoadAnimation } from "@/lib/animations";
import { useState, useEffect } from "react";
import { 
  personalInfo, 
  about, 
  expertise, 
  projects, 
  skills, 
  socialLinks, 
  themeConfig 
} from "@/lib/data";

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
                  <h1 className={`text-2xl lg:text-3xl font-bold ${theme.text.primary} animate-in fade-in slide-in-from-bottom-2 duration-800 delay-600 transition-colors duration-500`}>{personalInfo.displayName}</h1>
                  <p className={`${theme.text.secondary} text-sm lg:text-base animate-in fade-in slide-in-from-bottom-2 duration-800 delay-700 transition-colors duration-500`}>{personalInfo.title}</p>
                </div>

                <p className={`text-sm ${theme.text.muted} leading-relaxed text-center animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-800 transition-colors duration-500`}>
                  {about.shortBio}
                </p>

                <div className={`space-y-3 text-sm ${theme.text.muted} animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-900 transition-colors duration-500`}>
                  <div className={`flex items-center justify-center gap-2 transition-all duration-300 hover:${theme.text.primary}`}>
                    <MapPin className="h-4 w-4" />
                    {personalInfo.location}
                  </div>
                  <div className={`flex items-center justify-center gap-2 transition-all duration-300 hover:${theme.text.primary}`}>
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${personalInfo.email}`} className={`hover:${theme.text.primary} transition-colors duration-300`}>
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
                  {socialLinks.map((link, index) => {
                    const iconMap: Record<string, React.ReactNode> = {
                      'github': <Github className="mr-2 h-4 w-4" />,
                      'mail': <Mail className="mr-2 h-4 w-4" />,
                      'linkedin': <Linkedin className="mr-2 h-4 w-4" />,
                      'file-text': <FileText className="mr-2 h-4 w-4" />
                    };
                    const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto:');
                    return (
                      <Button key={index} size="sm" asChild className={`w-full ${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-md border ${theme.card.border} ${theme.card.hoverBorder} ${theme.text.primary} transition-all duration-200 rounded-lg`}>
                        <a href={link.url} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                          {iconMap[link.icon]}
                          {link.name}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
            </section>
          </div>

          <div className="md:col-span-2 lg:col-span-3 space-y-8 lg:space-y-12">

            <section ref={expertiseRef as React.RefObject<HTMLElement>}>
              <div className="mb-6">
                <p className={`${theme.text.secondary} text-base transition-all duration-300 ${expertiseVisible ? 'opacity-100' : 'opacity-0'}`}>Core areas of my technical specialization</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {expertise.map((area, index) => (
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
                <p className={`${theme.text.secondary} text-base transition-all duration-300 ${projectsVisible ? 'opacity-100' : 'opacity-0'}`}>Selected work showcasing my technical capabilities</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects.map((project, index) => (
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
                <p className={`${theme.text.secondary} text-base transition-all duration-300 ${techVisible ? 'opacity-100' : 'opacity-0'}`}>Languages, frameworks, and tools I work with</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.technologies.map((tech, index) => (
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
          <p className={`text-xs ${theme.text.muted} transition-colors duration-300`}>© {getyear()} {personalInfo.displayName}. All rights reserved.</p>
        </footer>
      </div>
    </div>
    </>
  );
}
