import React, { useState } from 'react';
import {
  Mail,
  FileText,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Wrench,
  Globe,
} from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData.ts';
import type { Language } from './types/portfolio.ts';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const content = PORTFOLIO_DATA[lang];
  const { profile, projects, experiences, educations, skills, nav, buttons, sections } = content;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Navegación Simple y Uniforme con Selector de Idioma */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#sobre-mi" className="font-bold text-white tracking-tight text-lg">
            {profile.name}
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
              <a href="#sobre-mi" className="hover:text-white transition-colors">
                {nav.about}
              </a>
              <a href="#proyectos" className="hover:text-white transition-colors">
                {nav.projects}
              </a>
              <a href="#experiencia" className="hover:text-white transition-colors">
                {nav.experience}
              </a>
              <a href="#habilidades" className="hover:text-white transition-colors">
                {nav.skills}
              </a>
              <a href="#contacto" className="hover:text-white transition-colors">
                {nav.contact}
              </a>
            </nav>

            {/* Selector de Idioma ES / EN */}
            <div
              className="inline-flex items-center rounded-lg bg-slate-900 border border-slate-800 p-1"
              role="group"
              aria-label="Language selector"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-colors cursor-pointer ${lang === 'es'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-colors cursor-pointer ${lang === 'en'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        {/* 1. Inicio & Sobre mí */}
        <section id="sobre-mi" className="pt-4 space-y-6 scroll-mt-20">
          <div className="space-y-2">
            <p className="text-sm font-medium text-indigo-400">{profile.location}</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {profile.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-slate-300">
              {profile.mainSkill}
            </h2>
          </div>

          <p className="text-slate-400 leading-relaxed max-w-2xl text-base">
            {profile.about}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn
            </a>

            <a
              href={profile.cvUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-sm font-medium transition-colors"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              {buttons.downloadCv}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              GitHub
            </a>
          </div>
        </section>

        {/* 2. Proyectos Principales */}
        <section id="proyectos" className="space-y-6 scroll-mt-20">
          <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
            <FolderGit2 className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">{sections.projectsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video w-full bg-slate-900 border-b border-slate-800 overflow-hidden flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xs font-mono text-slate-500 p-4 text-center">
                        [{buttons.previewPlaceholder}: {project.title}]
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-indigo-400 mt-0.5">{project.role}</p>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {buttons.viewProject}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        {buttons.sourceCode}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Experiencia Laboral y Formación */}
        <section id="experiencia" className="space-y-10 scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{sections.experienceTitle}</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-semibold text-white">
                      {exp.role} · <span className="text-indigo-400">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{sections.educationTitle}</h2>
            </div>

            <div className="space-y-6">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-start justify-between gap-5"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                      <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                    </div>
                    <p className="text-sm text-indigo-400">{edu.institution}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{edu.details}</p>
                  </div>

                  {edu.image && (
                    <a
                      href="/DIPLOMA 02 GUSTAVO BERNE - JULIO 2022.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-52 aspect-[4/3] rounded-lg bg-white border border-slate-800 overflow-hidden shrink-0 flex items-center justify-center group"
                      title={edu.degree}
                    >
                      <img
                        src={edu.image}
                        alt={edu.degree}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Habilidades Técnicas */}
        <section id="habilidades" className="space-y-6 scroll-mt-20">
          <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
            <Wrench className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">{sections.skillsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3"
              >
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Contacto Final */}
        <section
          id="contacto"
          className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 scroll-mt-20"
        >
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">{sections.contactTitle}</h2>
            <p className="text-sm text-slate-400">{sections.contactSubtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        {profile.name} · {sections.footerNote}
      </footer>
    </div>
  );
};
