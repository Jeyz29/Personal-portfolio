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
    <div className="min-h-screen bg-[#f9f9fb] text-[#1a1c1d] font-sans">
      {/* Navegación Editorial con Selector de Idioma */}
      <header className="sticky top-0 z-50 bg-[#f9f9fb]/90 backdrop-blur-md border-b border-[#c8c5cb]/50">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a
            href="#sobre-mi"
            className="font-semibold text-[#1a1c1d] tracking-tight text-lg hover:text-[#4b41e1] transition-colors"
          >
            {profile.name}
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-7 text-[13px] text-[#47464b]">
              <a href="#sobre-mi" className="hover:text-[#1a1c1d] transition-colors">
                {nav.about}
              </a>
              <a href="#proyectos" className="hover:text-[#1a1c1d] transition-colors">
                {nav.projects}
              </a>
              <a href="#experiencia" className="hover:text-[#1a1c1d] transition-colors">
                {nav.experience}
              </a>
              <a href="#habilidades" className="hover:text-[#1a1c1d] transition-colors">
                {nav.skills}
              </a>
              <a href="#contacto" className="hover:text-[#1a1c1d] transition-colors">
                {nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={profile.cvUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-1.25 py-0.5 rounded-[4px] border border-[#c8c5cb] text-[#1a1c1d] hover:border-[#000000] hover:bg-[#f3f3f5] transition-all text-[13px] leading-[20px]"
              >
                <span className="material-symbols-outlined text-[16px]">description</span>
                <span>{lang === 'en' ? 'Resume' : 'CV'}</span>
              </a>

              {/* Selector de Idioma ES / EN */}
              <div
                className="inline-flex items-center rounded-md bg-[#f3f3f5] border border-[#c8c5cb]/70 p-0.5"
                role="group"
                aria-label="Language selector"
              >
                <Globe className="w-3.5 h-3.5 text-[#47464b] ml-1.5 mr-1" />
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium tracking-wider transition-colors cursor-pointer ${lang === 'es'
                    ? 'bg-[#000000] text-white'
                    : 'text-[#47464b] hover:text-[#1a1c1d]'
                    }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium tracking-wider transition-colors cursor-pointer ${lang === 'en'
                    ? 'bg-[#000000] text-white'
                    : 'text-[#47464b] hover:text-[#1a1c1d]'
                    }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full">
        {/* 1. Inicio & Sobre mí */}
        <section
          id="sobre-mi"
          className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 pt-12 pb-16 scroll-mt-20"
        >
          <div className="flex flex-col gap-6 max-w-4xl">
            {/* Availability Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white border border-[#e5e7eb] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="font-mono text-[11px] font-medium text-[#47464b] uppercase tracking-[0.06em]">
                {profile.availabilityBadge}
              </span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-[56px] sm:leading-[64px] text-[#1a1c1d] tracking-[-0.02em] font-normal">
                {profile.name}
              </h1>
              <h2 className="font-display italic text-xl sm:text-[28px] sm:leading-[36px] text-[#4b41e1] font-normal">
                {profile.mainSkill}
              </h2>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-[18px] sm:leading-[30px] text-[#47464b] max-w-2xl">
              {profile.about}
            </p>

            {/* Botones Principales */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000000] hover:bg-[#4b41e1] text-white text-[13px] font-semibold shadow-sm transition-colors duration-150"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#edeef0] text-[#1a1c1d] border border-[#c8c5cb]/80 text-[13px] font-semibold shadow-xs transition-colors duration-150"
              >
                <FileText className="w-4 h-4 text-[#4b41e1]" />
                {buttons.downloadCv}
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#edeef0] text-[#1a1c1d] border border-[#c8c5cb]/80 text-[13px] font-semibold shadow-xs transition-colors duration-150"
              >
                <svg className="w-4 h-4 fill-current text-[#1a1c1d]" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* 2. Proyectos Principales */}
        <section
          id="proyectos"
          className="w-full bg-[#f3f3f5] border-y border-[#e5e7eb] py-16 scroll-mt-16"
        >
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 space-y-10">
            <div className="flex items-center gap-2.5">
              <FolderGit2 className="w-5 h-5 text-[#4b41e1]" />
              <h2 className="font-display text-3xl sm:text-[40px] sm:leading-[48px] text-[#1a1c1d] tracking-[-0.015em] font-normal">
                {sections.projectsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-xl bg-white border border-[#e5e7eb] hover:border-[#1a1c1d]/30 transition-colors shadow-xs overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-video w-full bg-[#f3f3f5] border-b border-[#e5e7eb] overflow-hidden flex items-center justify-center">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-xs font-mono text-[#77767b] p-4 text-center">
                          [{buttons.previewPlaceholder}: {project.title}]
                        </span>
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="space-y-1">
                        <p className="font-mono text-[11px] font-medium text-[#4b41e1] uppercase tracking-[0.06em]">
                          {project.role}
                        </p>
                        <h3 className="text-[19px] font-semibold text-[#1a1c1d] leading-snug tracking-[-0.01em]">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-[15px] leading-6 text-[#47464b]">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#edeef0] font-mono text-[11px] font-medium text-[#47464b]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-3 border-t border-[#e5e7eb]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4b41e1] hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {buttons.viewProject}
                        </a>
                      )}
                      {project.companyUrl && (
                        <a
                          href={project.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4b41e1] hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {buttons.companyWebsite}
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1a1c1d] hover:text-[#4b41e1] transition-colors"
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
          </div>
        </section>

        {/* 3. Experiencia Laboral y Formación */}
        <section
          id="experiencia"
          className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 py-16 space-y-16 scroll-mt-16"
        >
          {/* Experiencia Laboral */}
          <div className="space-y-8">
            <div className="flex items-center gap-2.5">
              <Briefcase className="w-5 h-5 text-[#4b41e1]" />
              <h2 className="font-display text-3xl sm:text-[40px] sm:leading-[48px] text-[#1a1c1d] tracking-[-0.015em] font-normal">
                {sections.experienceTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white p-6 sm:p-7 rounded-xl border border-[#e5e7eb] shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8"
                >
                  <div className="flex flex-col md:w-1/3 shrink-0">
                    <span className="font-mono text-[11px] font-medium text-[#4b41e1] uppercase tracking-[0.06em]">
                      {exp.period}
                    </span>
                    <h3 className="text-[18px] font-semibold text-[#1a1c1d] pt-1 leading-snug">
                      {exp.role}
                    </h3>
                    <span className="text-[14px] text-[#47464b] mt-0.5">{exp.company}</span>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-[15px] leading-relaxed text-[#47464b]">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formación */}
          <div className="space-y-8">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#4b41e1]" />
              <h2 className="font-display text-3xl sm:text-[40px] sm:leading-[48px] text-[#1a1c1d] tracking-[-0.015em] font-normal">
                {sections.educationTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white p-6 sm:p-7 rounded-xl border border-[#e5e7eb] shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  <div className="flex flex-col md:w-1/3 shrink-0">
                    <span className="font-mono text-[11px] font-medium text-[#4b41e1] uppercase tracking-[0.06em]">
                      {edu.period}
                    </span>
                    <h3 className="text-[18px] font-semibold text-[#1a1c1d] pt-1 leading-snug">
                      {edu.degree}
                    </h3>
                    <span className="text-[14px] text-[#47464b] mt-0.5">{edu.institution}</span>
                  </div>

                  <div className="md:w-2/3 flex flex-col sm:flex-row items-start justify-between gap-6">
                    <p className="text-[15px] leading-relaxed text-[#47464b] flex-1">
                      {edu.details}
                    </p>

                    {edu.image && (
                      <a
                        href="/DIPLOMA 02 GUSTAVO BERNE - JULIO 2022.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-52 aspect-[4/3] rounded-lg bg-[#f9f9fb] border border-[#e5e7eb] hover:border-[#4b41e1] overflow-hidden shrink-0 flex items-center justify-center group shadow-xs transition-colors"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Habilidades Técnicas */}
        <section
          id="habilidades"
          className="w-full bg-[#f3f3f5] border-y border-[#e5e7eb] py-16 scroll-mt-16"
        >
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 space-y-10">
            <div className="flex items-center gap-2.5">
              <Wrench className="w-5 h-5 text-[#4b41e1]" />
              <h2 className="font-display text-3xl sm:text-[40px] sm:leading-[48px] text-[#1a1c1d] tracking-[-0.015em] font-normal">
                {sections.skillsTitle}
              </h2>
            </div>

            {/* Skills Matrix 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="bg-white p-7 rounded-xl border border-[#e5e7eb] shadow-xs flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4b41e1] text-[20px]">
                        {group.icon}
                      </span>
                      <h3 className="text-[18px] leading-[26px] font-semibold text-[#1a1c1d]">
                        {group.category}
                      </h3>
                    </div>

                    <ul className="flex flex-col gap-2 text-[13px] leading-[20px] text-[#47464b]">
                      {group.items.map((skill, index) => (
                        <li
                          key={skill}
                          className={
                            index === 0
                              ? 'flex items-center py-1 bg-[#f3f3f5] px-2 rounded font-semibold text-[#1a1c1d]'
                              : 'flex items-center py-1 px-2'
                          }
                        >
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Contacto Final (Editorial Dark Card) */}
        <section
          id="contacto"
          className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 py-16 scroll-mt-16"
        >
          <div className="bg-[#000000] text-white rounded-xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <h2 className="font-display text-3xl sm:text-[44px] sm:leading-[52px] text-white tracking-tight font-normal">
                {sections.contactTitle}
              </h2>
              <p className="text-base sm:text-[18px] text-white/80 leading-relaxed">
                {sections.contactSubtitle}
              </p>

              {/* Ubicación, Zona Horaria y Disponibilidad */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1 font-mono text-[11px] text-[#858387]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#059669]" />
                  <span className="text-white/90">{profile.location}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>{profile.remoteStatus}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#4b41e1] hover:bg-[#645efb] text-white text-[13px] font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1b1b1e] hover:bg-[#2f3132] text-white border border-white/15 text-[13px] font-semibold transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1b1b1e] hover:bg-[#2f3132] text-white border border-white/15 text-[13px] font-semibold transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-white border-t border-[#c8c5cb]/50 mt-12">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[#47464b]">
              © 2026 {profile.name}. {sections.footerNote}
            </p>

            <div className="flex items-center gap-7">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] font-medium text-[#47464b] hover:text-[#4b41e1] uppercase tracking-[0.06em] transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] font-medium text-[#47464b] hover:text-[#4b41e1] uppercase tracking-[0.06em] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-[11px] font-medium text-[#47464b] hover:text-[#4b41e1] uppercase tracking-[0.06em] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
