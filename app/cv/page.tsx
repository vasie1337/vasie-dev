'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  personalInfo,
  about,
  skills,
  experience,
  internships,
  education,
  projects,
  languages,
  references,
  themeConfig,
} from "@/lib/data";

export default function CVPage() {
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

  const handleDownloadPDF = () => {
    window.print();
  };

  const cvProjects = projects.filter(p => p.cvDescription && p.cvDescription.length > 0);

  return (
    <>
      <style jsx global>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }

        @media print {
          html, body {
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 297mm;
            overflow: hidden;
          }

          .no-print {
            display: none !important;
            visibility: hidden !important;
          }

          .cv-container {
            margin: 0 !important;
            padding: 12mm 15mm !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

      {/* Navigation bar - hidden when printing */}
      <div className={`no-print fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-md border ${theme.card.border} ${theme.card.hoverBorder} ${theme.text.primary} transition-all duration-200 rounded-lg`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <Button 
            onClick={handleDownloadPDF}
            size="sm"
            className={`${theme.card.bg} ${theme.card.hoverBg} backdrop-blur-md border ${theme.card.border} ${theme.card.hoverBorder} ${theme.text.primary} transition-all duration-200 rounded-lg`}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* CV Content */}
      <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-gray-100'} pt-20 pb-12 print:pt-0 print:pb-0 print:bg-white`}>
        <div 
          className="cv-container max-w-[210mm] mx-auto bg-white shadow-lg print:shadow-none"
          style={{
            fontFamily: "'Calibri', 'Arial', sans-serif",
            lineHeight: 1.4,
            color: '#000',
            width: '210mm',
            minHeight: '297mm',
            padding: '14mm 16mm',
            boxSizing: 'border-box',
          }}
        >
          {/* Header */}
          <div className="text-center mb-2.5 border-b-2 border-black pb-2">
            <h1 className="m-0 mb-1 text-2xl font-bold uppercase tracking-wide">
              {personalInfo.name}
            </h1>
            <div className="text-xs font-semibold mb-1">
              {personalInfo.title}
            </div>
            <div className="text-[10px] leading-relaxed">
              {personalInfo.location} | <a href={`mailto:${personalInfo.email}`} className="text-black no-underline">{personalInfo.email}</a><br />
              Portfolio: <a href={`https://${personalInfo.website}`} className="text-black no-underline">{personalInfo.website}</a> | GitHub: <a href={personalInfo.githubUrl} className="text-black no-underline">{personalInfo.github}</a>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              PROFILE
            </div>
            <div className="text-[10px] leading-relaxed">
              {about.summary}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              TECHNICAL SKILLS
            </div>
            <div className="text-[10px] leading-relaxed">
              <strong>Programming Languages:</strong> {skills.technical.languages.join(", ")}<br />
              <strong>Web Frameworks & Tools:</strong> {skills.technical.frameworks.join(", ")}<br />
              <strong>Systems & Platforms:</strong> {skills.technical.systems.join(", ")}<br />
              <strong>Graphics & Rendering:</strong> {skills.technical.graphics.join(", ")}<br />
              <strong>Security & Low-Level:</strong> {skills.technical.security.join(", ")}<br />
              <strong>Development Tools:</strong> {skills.technical.tools.join(", ")}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              SKILLS
            </div>
            <div className="text-[10px] leading-relaxed grid grid-cols-2 gap-x-4 gap-y-1">
              {skills.proficiency.map((skill, index) => (
                <div key={index}><strong>{skill.name}:</strong> {skill.level}</div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              INTERNSHIPS
            </div>
            {internships.map((internship, index) => (
              <div key={index} className={`flex justify-between items-baseline ${index > 0 ? 'mt-2' : ''} mb-0.5`}>
                <div>
                  <div className="font-bold text-[11px]">{internship.title}</div>
                  <div className="font-semibold text-[11px]">{internship.company}, {internship.location}</div>
                </div>
                <div className="text-[10px] italic">{internship.startDate} — {internship.endDate}</div>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              WORK EXPERIENCE
            </div>
            {experience.map((job, index) => (
              <div key={index} className="flex justify-between items-baseline mb-0.5">
                <div>
                  <div className="font-bold text-[11px]">{job.title}</div>
                  <div className="font-semibold text-[11px]">{job.company}, {job.location}</div>
                </div>
                <div className="text-[10px] italic">{job.startDate} — {job.endDate}</div>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              PROJECTS
            </div>
            {cvProjects.map((project, index) => (
              <div key={index}>
                <div className="font-bold text-[11px] mt-1">
                  {project.title} – {project.category}
                </div>
                <ul className="my-0.5 ml-5 p-0 text-[10px]">
                  {project.cvDescription?.map((desc, descIndex) => (
                    <li key={descIndex} className="mb-0.5">{desc}</li>
                  ))}
                  <li className="mb-0.5"><strong>GitHub:</strong> {project.githubUrl.replace('https://', '')}</li>
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              EDUCATION
            </div>
            {education.map((edu, index) => (
              <div key={index} className={`flex justify-between items-baseline ${index > 0 ? 'mt-2' : ''} mb-0.5`}>
                <div>
                  <div className="font-bold text-[11px]">{edu.degree}</div>
                  <div className="font-semibold text-[11px]">{edu.institution}, {edu.location}</div>
                </div>
                <div className="text-[10px] italic">{edu.startDate} — {edu.endDate}</div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              LANGUAGES
            </div>
            <div className="text-[10px] leading-relaxed">
              {languages.map((lang, index) => (
                <span key={index}>
                  <strong>{lang.name}:</strong> {lang.level}
                  {index < languages.length - 1 && ' | '}
                </span>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="mb-2.5">
            <div className="text-[13px] font-bold uppercase my-2 border-b-[1.5px] border-black pb-0.5 tracking-wide">
              REFERENCES
            </div>
            <div className="text-[10px] leading-relaxed">
              {references.map((ref, index) => (
                <div key={index}>
                  <strong>{ref.name}</strong>, {ref.company} — <a href={`mailto:${ref.email}`} className="text-black no-underline">{ref.email}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
