export type Language = 'es' | 'en';

export interface Profile {
  name: string;
  availabilityBadge: string;
  location: string;
  remoteStatus: string;
  mainSkill: string;
  about: string;
  email: string;
  cvUrl: string;
  github: string;
  linkedin: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  companyUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface PortfolioContent {
  nav: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
  };
  buttons: {
    contactMe: string;
    downloadCv: string;
    viewProject: string;
    sourceCode: string;
    companyWebsite: string;
    previewPlaceholder: string;
  };
  sections: {
    projectsTitle: string;
    experienceTitle: string;
    educationTitle: string;
    skillsTitle: string;
    contactTitle: string;
    contactSubtitle: string;
    footerNote: string;
  };
  profile: Profile;
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
  skills: SkillCategory[];
}
