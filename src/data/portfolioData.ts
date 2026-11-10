import type { Language, PortfolioContent } from '../types/portfolio.ts';

export const PORTFOLIO_DATA: Record<Language, PortfolioContent> = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    buttons: {
      contactMe: 'Contactar',
      downloadCv: 'Descargar CV (PDF)',
      viewProject: 'Ver pagina del proyecto',
      sourceCode: 'Código',
      companyWebsite: 'Sitio de la Empresa',
      previewPlaceholder: 'Vista previa',
    },
    sections: {
      projectsTitle: 'Proyectos Principales',
      experienceTitle: 'Experiencia Laboral',
      educationTitle: 'Formación',
      skillsTitle: 'Habilidades Técnicas',
      contactTitle: '¡Listo para aportar soluciones a cualquier tipo de problemas!',
      contactSubtitle:
        'Abierto a roles full-time como Desarrollador Junior Full-Stack o Frontend, oportunidades en etapas tempranas de alto impacto y proyectos por contrato. Ubicado en Miranda, Venezuela, con total disponibilidad para equipos remotos.',
      footerNote: 'Desarrollado con cuidado y dedicación.',
    },
    profile: {
      name: 'Gustavo Berne',
      availabilityBadge: 'Disponible para roles full-time y por contrato',
      location: 'Miranda, Venezuela • VET (UTC-4)',
      remoteStatus: 'Listo para trabajo remoto',
      mainSkill: 'Desarrollador Full-Stack Junior',
      about:
        'Estudiante de Ciencias de la Computación (8.° Semestre) en la Universidad Central de Venezuela (UCV) con experiencia práctica desarrollando aplicaciones web en producción, plataformas Multi-LLM y sistemas Full-Stack en TypeScript.',
      email: 'gbernev@gmail.com',
      cvUrl: '/Gustavo-Berne-CV-ES.pdf',
      github: 'https://github.com/Jeyz29',
      linkedin: 'https://www.linkedin.com/in/gustavo-berne-454b67434/',
    },
    projects: [
      {
        id: 'kromaticos-multi-llm-hub',
        title: 'Plataforma Multi-LLM y Hub de Generación de IA',
        role: 'Desarrollador Frontend · Kromaticos',
        description:
          'Aplicación web centralizada que unifica múltiples Modelos de Lenguaje (LLMs) de texto y motores de generación de imágenes en un único espacio de trabajo con memoria de contexto dinámica.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'APIs de LLMs', 'Figma'],
        image: '/projects/LLM.png',
        companyUrl: 'https://www.kromaticos.com/',
      },
      {
        id: 'ucv-serverless-course-registration',
        title: 'Sistema de Registro de Cursos y Pagos Serverless',
        role: 'Desarrollador Full-Stack · Facultad de Ciencias UCV',
        description:
          'Plataforma transaccional SPA en producción real ($0 costo operativo) que automatiza la inscripción de estudiantes, validación de cupos y resguardo de comprobantes de pago.',
        technologies: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Google Apps Script', 'Google Drive API', 'Google Sheets DB'],
        image: '/projects/UCV.png',
        liveUrl: 'https://extensionciencias.ucv.ve/cursos/',
      },
      {
        id: 'multi-currency-expense-tracker',
        title: 'Gestor de Gastos y Suscripciones Multimoneda',
        role: 'Proyecto de Ingeniería Full-Stack',
        description:
          'Plataforma de finanzas personales y suscripciones (USD, EUR, VES) con sincronización automática de tasas oficiales del BCV, caché en SQLite y analítica interactiva.',
        technologies: ['TypeScript', 'React 19', 'Node.js', 'Express 5', 'SQLite', 'Tailwind CSS v4', 'Recharts'],
        image: '/projects/Gestor.png',
        repoUrl: 'https://github.com/Jeyz29/Proyecto-Gestor-de-gastos',
      },
    ],
    experiences: [
      {
        id: 'exp-ucv',
        role: 'Pasantía en Desarrollo Full-Stack',
        company: 'Coordinación de Extensión UCV — Facultad de Ciencias',
        period: 'Abril 2026 – Octubre 2026',
        description:
          'Diseño y desarrollo de una aplicación web transaccional bajo arquitectura serverless ($0 costo operativo) para automatizar la inscripción, validación de archivos y control atómico de cupos en ofertas académicas.',
        technologies: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Google Apps Script', 'Google Drive API', 'Serverless'],
      },
      {
        id: 'exp-kromaticos',
        role: 'Pasantía en Desarrollo Frontend',
        company: 'Kromaticos',
        period: 'Diciembre 2025 – Marzo 2026',
        description:
          'Desarrollo de una plataforma web centralizada para múltiples LLMs y generadores de imágenes con Next.js, React, TypeScript y Tailwind CSS, preservando el contexto de memoria del chat entre cambios de modelo.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Integración LLMs', 'Figma'],
      },
    ],
    educations: [
      {
        id: 'edu-ucv',
        degree: 'Licenciatura en Ciencias de la Computación (8.° Semestre)',
        institution: 'Facultad de Ciencias — Universidad Central de Venezuela (UCV)',
        period: '2023 – Actualmente',
        details:
          'Base sólida en Estructuras de Datos y Algoritmos, Programación Orientada a Objetos (Java, C++), Bases de Datos Relacionales y Sistemas Operativos.',
      },
      {
        id: 'edu-cva',
        degree: 'Inglés — Nivel B2 (Certificado)',
        institution: 'Centro Venezolano Americano (CVA)',
        period: 'Julio 2022',
        details:
          'Dominio intermedio-avanzado del idioma inglés (416 horas académicas — lectura técnica, redacción y conversación fluida para equipos remotos internacionales).',
        image: '/projects/Certificado.png',
      },
    ],
    skills: [
      {
        category: 'Lenguajes',
        icon: 'code_blocks',
        items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'Java', 'C++', 'HTML5 & CSS3'],
      },
      {
        category: 'Frontend',
        icon: 'web',
        items: ['React 19', 'Next.js', 'Tailwind CSS', 'Recharts', 'Figma'],
      },
      {
        category: 'Backend & APIs',
        icon: 'database',
        items: ['Node.js', 'Express', 'Django', 'APIs RESTful', 'Google Apps Script', 'APIs Multi-LLM'],
      },
      {
        category: 'Bases de Datos y Herramientas',
        icon: 'terminal',
        items: ['SQL Server', 'SQLite', 'Git & GitHub', 'Docker', 'Postman'],
      },
    ],
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    buttons: {
      contactMe: 'Contact Me',
      downloadCv: 'Download CV (PDF)',
      viewProject: 'Live Project',
      sourceCode: 'Code',
      companyWebsite: 'Company Website',
      previewPlaceholder: 'Preview',
    },
    sections: {
      projectsTitle: 'Featured Projects',
      experienceTitle: 'Work Experience',
      educationTitle: 'Education',
      skillsTitle: 'Technical Skills',
      contactTitle: 'Ready to contribute with solutions for any kind of problem!',
      contactSubtitle:
        'Open to full-time junior Full-Stack and Frontend engineering roles, high-impact early-stage opportunities, and focused contract projects. Based in Miranda, Venezuela with full availability for remote teams.',
      footerNote: 'Engineered with care and craft.',
    },
    profile: {
      name: 'Gustavo Berne',
      availabilityBadge: 'Available for full-time & contract roles',
      location: 'Miranda, Venezuela • VET (UTC-4)',
      remoteStatus: 'Remote-ready',
      mainSkill: 'Junior Full-Stack Developer ',
      about:
        'Bachelor of Science in Computer Science student (8th Semester) at the Central University of Venezuela (UCV) with hands-on experience building production web applications, Multi-LLM platforms, and Full-Stack TypeScript systems.',
      email: 'gbernev@gmail.com',
      cvUrl: '/Gustavo-Berne-Resume-EN.pdf',
      github: 'https://github.com/Jeyz29',
      linkedin: 'https://www.linkedin.com/in/gustavo-berne-454b67434/',
    },
    projects: [
      {
        id: 'kromaticos-multi-llm-hub',
        title: 'Multi-LLM Platform & AI Generation Hub',
        role: 'Frontend Developer · Kromaticos',
        description:
          'Centralized web application unifying multiple text Large Language Models (LLMs) and image generation engines within a single workspace featuring dynamic chat context memory.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'LLM APIs', 'Figma'],
        image: '/projects/LLM.png',
        companyUrl: 'https://www.kromaticos.com/',
      },
      {
        id: 'ucv-serverless-course-registration',
        title: 'Serverless Course Registration & Payment System',
        role: 'Full-Stack Developer · UCV Faculty of Sciences',
        description:
          'Transactional Single Page Application in live production ($0 operating cost) automating student enrollments, quota validation, and payment voucher storage.',
        technologies: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Google Apps Script', 'Google Drive API', 'Google Sheets DB'],
        image: '/projects/UCV.png',
        liveUrl: 'https://extensionciencias.ucv.ve/cursos/',
      },
      {
        id: 'multi-currency-expense-tracker',
        title: 'Multi-Currency Expense & Subscription Manager',
        role: 'Full-Stack Engineering Project',
        description:
          'Personal finance and recurring subscription platform (USD, EUR, VES) featuring automatic official BCV exchange rate synchronization, SQLite caching, and interactive analytics.',
        technologies: ['TypeScript', 'React 19', 'Node.js', 'Express 5', 'SQLite', 'Tailwind CSS v4', 'Recharts'],
        image: '/projects/Gestor.png',
        repoUrl: 'https://github.com/Jeyz29/Proyecto-Gestor-de-gastos',
      },
    ],
    experiences: [
      {
        id: 'exp-ucv',
        role: 'Full-Stack Development Intern',
        company: 'UCV Extension Coordination — Faculty of Sciences',
        period: 'April 2026 – October 2026',
        description:
          'Designed and developed a transactional web application on a serverless architecture ($0 operating cost) to automate course registration, file validation, and atomic quota control for academic offerings.',
        technologies: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Google Apps Script', 'Google Drive API', 'Serverless'],
      },
      {
        id: 'exp-kromaticos',
        role: 'Frontend Development Intern',
        company: 'Kromaticos',
        period: 'December 2025 – March 2026',
        description:
          'Developed a centralized web platform for multiple LLMs and image generators using Next.js, React, TypeScript, and Tailwind CSS, preserving chat memory context across model switches.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'LLM Integration', 'Figma'],
      },
    ],
    educations: [
      {
        id: 'edu-ucv',
        degree: 'Bachelor of Science in Computer Science (8th Semester)',
        institution: 'Faculty of Sciences — Central University of Venezuela (UCV)',
        period: '2023 – Present',
        details:
          'Strong foundation in Data Structures & Algorithms, Object-Oriented Programming (Java, C++), Relational Databases, and Operating Systems.',
      },
      {
        id: 'edu-cva',
        degree: 'English Proficiency — B2 Level (Certified)',
        institution: 'Centro Venezolano Americano (CVA)',
        period: 'July 2022',
        details:
          'Upper-intermediate English proficiency (416 academic hours — technical reading, written communication, and spoken fluency for international engineering teams).',
        image: '/projects/Certificado.png',
      },
    ],
    skills: [
      {
        category: 'Languages',
        icon: 'code_blocks',
        items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'Java', 'C++', 'HTML5 & CSS3'],
      },
      {
        category: 'Frontend',
        icon: 'web',
        items: ['React 19', 'Next.js', 'Tailwind CSS', 'Recharts', 'Figma'],
      },
      {
        category: 'Backend & APIs',
        icon: 'database',
        items: ['Node.js', 'Express', 'Django', 'RESTful APIs', 'Google Apps Script', 'Multi-LLM APIs'],
      },
      {
        category: 'Databases & Tools',
        icon: 'terminal',
        items: ['SQL Server', 'SQLite', 'Git & GitHub', 'Docker', 'Postman'],
      },
    ],
  },
};
