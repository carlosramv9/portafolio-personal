export const languages = {
  es: 'Español',
  en: 'English'
} as const;

export type Language = keyof typeof languages;

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Ing. Sistemas Computacionales',
      // subtitle: 'Desarrollador Full-Stack | .NET + React/Next.js',
      subtitle: 'Desarrollador Full Stack especializado en sistemas empresariales (ERP, POS, automatización)',
      description: '+5 años desarrollando sistemas reales. Especializado en ERP, portales operativos y soluciones mobile. Construcción de sistemas robustos con enfoque en procesos de negocio y experiencia de usuario.',
      cta: 'Contrátame',
      ctaSecondary: 'Ver Proyectos',
      availability: 'Disponible para tiempo completo'
    },
    about: {
      title: 'Sobre Mí',
      description: 'Soy desarrollador full-stack especializado en .NET y React/Next.js, con experiencia construyendo ERPs y portales orientados a procesos reales de negocio. He trabajado en flujos de logística/EDI, integraciones con APIs y automatización de reportes, cuidando la consistencia de datos y la trazabilidad.',
      focus: 'Me enfoco en entregar soluciones robustas, escalables y fáciles de mantener, con atención a performance, seguridad y experiencia de usuario. También me interesa llevar estas capacidades a soluciones mobile/PWA, especialmente para equipos operativos y escenarios offline-first.',
      servicesTitle: 'Servicios',
      services: 'Busco proyectos de ERP y portales operativos, especialmente en logística/EDI e integraciones con sistemas existentes, donde el objetivo sea estandarizar procesos y unificar datos de forma confiable. También me interesan proyectos mobile/PWA para operación en campo (levantamientos, CRM, logística), con enfoque offline-first, sincronización segura y una experiencia de usuario clara.',
      strengthsTitle: 'Fortalezas'
    },
    experience: {
      title: 'Experiencia',
      present: 'Presente'
    },
    projects: {
      title: 'Proyectos Destacados',
      viewMore: 'Ver proyecto',
      repo: 'Repositorio',
      stack: 'Stack',
      highlights: 'Logros destacados',
      metrics: 'Métricas',
      confidential: 'Proyecto confidencial'
    },
    skills: {
      title: 'Habilidades Técnicas'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Trabajo de extremo a extremo: API, UI, datos y despliegue.',
      description: 'Si necesitas reforzar un sistema operativo, integraciones o una app mobile/PWA, estoy disponible para conversar.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'Descargar CV',
      sendMessage: 'Enviar Mensaje'
    },
    footer: {
      rights: 'Todos los derechos reservados',
      madeWith: 'Hecho con',
      and: 'y'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Computer Systems Engineer',
      // subtitle: 'Full-Stack Developer | .NET + React/Next.js',
      subtitle: 'Full-Stack Developer specialized in enterprise systems (ERP, POS, automation)',
      description: '+5 years developing real systems. Specialized in ERP, operational portals, and mobile solutions. Building robust systems with a focus on business processes and user experience.',
      cta: 'Hire Me',
      ctaSecondary: 'View Projects',
      availability: 'Available for full-time'
    },
    about: {
      title: 'About Me',
      description: 'I\'m a full-stack developer specialized in .NET and React/Next.js, with experience building ERPs and portals oriented to real business processes. I\'ve worked on logistics/EDI flows, API integrations, and report automation, ensuring data consistency and traceability.',
      focus: 'I focus on delivering robust, scalable, and maintainable solutions, with attention to performance, security, and user experience. I\'m also interested in bringing these capabilities to mobile/PWA solutions, especially for operational teams and offline-first scenarios.',
      servicesTitle: 'Services',
      services: 'Looking for ERP and operational portal projects, especially in logistics/EDI and integrations with existing systems, where the goal is to standardize processes and unify data reliably. I\'m also interested in mobile/PWA projects for field operations (surveys, CRM, logistics), with an offline-first approach, secure synchronization, and clear user experience.',
      strengthsTitle: 'Strengths'
    },
    experience: {
      title: 'Experience',
      present: 'Present'
    },
    projects: {
      title: 'Featured Projects',
      viewMore: 'View project',
      repo: 'Repository',
      stack: 'Stack',
      highlights: 'Key highlights',
      metrics: 'Metrics',
      confidential: 'Confidential project'
    },
    skills: {
      title: 'Technical Skills'
    },
    contact: {
      title: 'Contact',
      subtitle: 'End-to-end work: API, UI, data, and deployment.',
      description: 'If you need to strengthen an operational system, integrations, or a mobile/PWA app, I\'m available to talk.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'Download CV',
      sendMessage: 'Send Message'
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
      and: 'and'
    }
  }
};

export const personalInfo = {
  name: 'Carlos Ramírez',
  title: {
    es: 'Ing. Sistemas Computacionales',
    en: 'Computer Systems Engineer'
  },
  role: {
    es: 'Desarrollador Full-Stack',
    en: 'Full-Stack Developer'
  },
  email: 'carlos.ramv97@gmail.com',
  github: 'https://github.com/carlosramv9',
  linkedin: 'https://www.linkedin.com/in/carlos-ramirezv97/',
  cv: '/assets/cv.pdf', // User will place their CV here
  availability: {
    es: 'Disponible para tiempo completo',
    en: 'Available for full-time'
  }
};

export const strengths = [
  {
    title: {
      es: 'Sistemas ERP y procesos de negocio',
      en: 'ERP Systems and business processes'
    },
    description: {
      es: 'Diseño módulos completos (ventas, inventario, facturación, operaciones), flujos multiempresa y permisos por roles, cuidando trazabilidad y reporteo.',
      en: 'Design complete modules (sales, inventory, billing, operations), multi-company flows and role-based permissions, ensuring traceability and reporting.'
    },
    icon: '🏢'
  },
  {
    title: {
      es: 'Integraciones y EDI / logística',
      en: 'Integrations and EDI / logistics'
    },
    description: {
      es: 'Experiencia conectando sistemas con APIs externas y flujos EDI (documentos, validaciones, automatización), orientado a compliance y consistencia de datos.',
      en: 'Experience connecting systems with external APIs and EDI flows (documents, validations, automation), focused on compliance and data consistency.'
    },
    icon: '🔄'
  },
  {
    title: {
      es: 'Arquitectura .NET + despliegue a producción (IIS/CI-CD)',
      en: '.NET Architecture + production deployment (IIS/CI-CD)'
    },
    description: {
      es: 'Construcción de APIs robustas, buenas prácticas, y despliegues estables (IIS, pipelines, configuración por ambiente), optimizando performance y mantenibilidad.',
      en: 'Building robust APIs, best practices, and stable deployments (IIS, pipelines, environment configuration), optimizing performance and maintainability.'
    },
    icon: '⚙️'
  }
];

export const projects = [
  {
    id: 6,
    name: {
      es: 'Chatbot de Atención al Cliente con IA Local (n8n + Ollama + Google Docs)',
      en: 'Local AI Customer Service Chatbot (n8n + Ollama + Google Docs)'
    },
    summary: {
      es: 'Sistema conversacional automatizado que responde preguntas de clientes utilizando documentos empresariales. Ejecución 100% local sin costos de APIs externas.',
      en: 'Automated conversational system that answers customer queries using business documents. 100% local execution with no external API costs.'
    },
    stack: ['n8n', 'Ollama (Local LLM)', 'Google Docs API', 'JavaScript', 'Prompt Engineering'],
    role: {
      es: 'Fullstack Developer',
      en: 'Fullstack Developer'
    },
    highlights: [
      {
        es: 'Integración de Google Docs como base de conocimiento dinámica para respuestas contextualizadas.',
        en: 'Integration of Google Docs as a dynamic knowledge base for contextualized responses.'
      },
      {
        es: 'Uso de modelos locales (Ollama) garantizando privacidad y reduciendo costos operativos a cero.',
        en: 'Use of local models (Ollama) ensuring privacy and reducing operational costs to zero.'
      },
      {
        es: 'Arquitectura en n8n preparada para escalar a un sistema RAG (Retrieval-Augmented Generation) avanzado.',
        en: 'n8n architecture scalable to an advanced RAG (Retrieval-Augmented Generation) system.'
      }
    ],
    metrics: [
      {
        label: { es: 'Costo en llamadas a API', en: 'API call costs' },
        value: '$0.00'
      },
      {
        label: { es: 'Privacidad de datos', en: 'Data privacy' },
        value: '100% Local'
      }
    ],
    confidential: false,
    link: null,
    github: null,
    image: '/assets/projects/chatbot-n8n-flow.png'
  },
  {
    id: 1,
    name: {
      es: 'Sistema POS multiempresa (SaaS / híbrido)',
      en: 'Multi-company POS System (SaaS / hybrid)'
    },
    summary: {
      es: 'Plataforma de punto de venta pensada para operación multi-sucursal, multiempresa y control de accesos por roles/permisos.',
      en: 'Point-of-sale platform designed for multi-branch, multi-company operation and role/permission-based access control.'
    },
    stack: ['Next.js (PWA)', 'NestJS', 'Supabase (PostgreSQL)', 'Auth/RBAC'],
    role: {
      es: 'Desarrollador Full-Stack',
      en: 'Full-Stack Developer'
    },
    highlights: [
      {
        es: 'Arquitectura multi-tenant (multiempresa) con separación de datos y permisos por rol/usuario',
        en: 'Multi-tenant architecture with data separation and role/user-based permissions'
      },
      {
        es: 'Flujo de autenticación + autorización (RBAC) para operación segura por sucursal/usuario',
        en: 'Authentication + authorization (RBAC) flow for secure operation per branch/user'
      },
      {
        es: 'Diseño listo para evolucionar a app de escritorio (PWA + posible Electron)',
        en: 'Design ready to evolve into desktop app (PWA + possible Electron)'
      }
    ],
    metrics: [
      {
        label: { es: 'Tiempo de alta empresa/sucursal', en: 'Company/branch setup time' },
        value: '~5 min'
      },
      {
        label: { es: 'Roles/permisos definidos', en: 'Roles/permissions defined' },
        value: '8 roles / 45 permisos'
      },
      {
        label: { es: 'Operación concurrente', en: 'Concurrent operation' },
        value: '~100 usuarios'
      }
    ],
    confidential: false,
    link: null,
    github: 'https://github.com/carlosramv9/e-commerce-app'
  },
  {
    id: 2,
    name: {
      es: 'Sistema EDI/ASN en .NET (on-prem con IIS)',
      en: 'EDI/ASN System in .NET (on-prem with IIS)'
    },
    summary: {
      es: 'Backend y portal web para recepción/validación de archivos EDI y gestión de ASN, desplegado on-premise en IIS.',
      en: 'Backend and web portal for EDI file reception/validation and ASN management, deployed on-premise on IIS.'
    },
    stack: ['.NET Web API', 'React (Vite)', 'SQL Server', 'IIS', 'Jobs/Services'],
    role: {
      es: 'Desarrollador Backend + Frontend',
      en: 'Backend + Frontend Developer'
    },
    highlights: [
      {
        es: 'Procesamiento de archivos .edi desde carpeta local del servidor (flujo automatizado)',
        en: 'Processing .edi files from server local folder (automated flow)'
      },
      {
        es: 'Validaciones de negocio + persistencia en SQL Server para trazabilidad de eventos y estados',
        en: 'Business validations + SQL Server persistence for event and state traceability'
      },
      {
        es: 'Portal para seguimiento operativo (consultas, estatus, correcciones y reintentos)',
        en: 'Portal for operational tracking (queries, status, corrections, and retries)'
      }
    ],
    metrics: [
      {
        label: { es: 'Archivos procesados/día', en: 'Files processed/day' },
        value: '~150'
      },
      {
        label: { es: 'Reducción de errores', en: 'Error reduction' },
        value: '~40%'
      },
      {
        label: { es: 'Tiempo de procesamiento', en: 'Processing time' },
        value: '~3 seg/archivo'
      }
    ],
    confidential: true,
    link: null
  },
  {
    id: 3,
    name: {
      es: 'Mapeo/implementación EDI ANSI X12 004010 — Transacción 862 (SIA/Subaru)',
      en: 'EDI ANSI X12 004010 Mapping/Implementation — Transaction 862 (SIA/Subaru)'
    },
    summary: {
      es: 'Implementación y mapeo de reglas de transacción 862 para cumplimiento EDI, con enfoque en segmentos, convenciones y validaciones.',
      en: 'Implementation and mapping of transaction 862 rules for EDI compliance, with a focus on segments, conventions, and validations.'
    },
    stack: ['EDI X12 004010', '.NET (parsing/mapping)', 'SQL Server', 'Validation'],
    role: {
      es: 'Desarrollador EDI',
      en: 'EDI Developer'
    },
    highlights: [
      {
        es: 'Diseño de mapeo por segmentos con reglas de validación para evitar rechazos de intercambio',
        en: 'Segment-based mapping design with validation rules to prevent interchange rejections'
      },
      {
        es: 'Normalización de datos para integrarse con procesos internos (operación y reporteo)',
        en: 'Data normalization to integrate with internal processes (operation and reporting)'
      },
      {
        es: 'Definición de convenciones de parsing/transformación para mantenibilidad',
        en: 'Definition of parsing/transformation conventions for maintainability'
      }
    ],
    metrics: [
      {
        label: { es: 'Rechazos evitados / compliance', en: 'Rejections avoided / compliance' },
        value: '~95%'
      },
      {
        label: { es: 'Segmentos críticos cubiertos', en: 'Critical segments covered' },
        value: '12 segmentos / 35 reglas'
      },
      {
        label: { es: 'Tiempo de respuesta ante cambios', en: 'Change response time' },
        value: '~2-4 hrs'
      }
    ],
    confidential: true,
    link: null
  },
  {
    id: 4,
    name: {
      es: 'Portal Next.js de programación de envíos + etiquetas + ASN',
      en: 'Next.js Portal for shipment scheduling + labels + ASN'
    },
    summary: {
      es: 'Portal web para planear envíos, generar etiquetas y administrar el flujo de ASN con enfoque en operación diaria.',
      en: 'Web portal to plan shipments, generate labels, and manage ASN flow with a focus on daily operations.'
    },
    stack: ['Next.js', 'Backend API', 'DB relacional', 'PDF/labels generation'],
    role: {
      es: 'Desarrollador Full-Stack',
      en: 'Full-Stack Developer'
    },
    highlights: [
      {
        es: 'Organización por módulos/rutas y documentación del flujo para adopción del usuario',
        en: 'Organization by modules/routes and flow documentation for user adoption'
      },
      {
        es: 'Generación de etiquetas/formatos y soporte a operación de envíos',
        en: 'Label/format generation and shipment operation support'
      },
      {
        es: 'Enfoque en UX para reducir fricción y errores operativos',
        en: 'UX focus to reduce friction and operational errors'
      }
    ],
    metrics: [
      {
        label: { es: 'Tiempo de generación por envío/ASN', en: 'Generation time per shipment/ASN' },
        value: '~2 min'
      },
      {
        label: { es: 'Errores por captura manual reducidos', en: 'Manual entry errors reduced' },
        value: '~60%'
      },
      {
        label: { es: 'Usuarios operativos / áreas', en: 'Operational users / areas' },
        value: '~25 usuarios / 4 áreas'
      }
    ],
    confidential: true,
    link: null
  },
  {
    id: 5,
    name: {
      es: 'CRM App en React Native (Expo)',
      en: 'CRM App in React Native (Expo)'
    },
    summary: {
      es: 'App móvil para operación interna (CRM/seguimiento), con mejoras de UI (safe area), manejo de assets y build/release Android.',
      en: 'Mobile app for internal operation (CRM/tracking), with UI improvements (safe area), asset handling, and Android build/release.'
    },
    stack: ['React Native (Expo)', 'Android build', 'API REST', 'Zustand/Axios'],
    role: {
      es: 'Desarrollador Mobile',
      en: 'Mobile Developer'
    },
    highlights: [
      {
        es: 'Corrección de comportamientos de UI en dispositivos reales (safe area/status bar)',
        en: 'UI behavior fixes on real devices (safe area/status bar)'
      },
      {
        es: 'Preparación de release y resolución de errores de build Android (CMake/Gradle/env)',
        en: 'Release preparation and Android build error resolution (CMake/Gradle/env)'
      },
      {
        es: 'Estrategia para distribución privada (APK) y control de versiones/actualizaciones',
        en: 'Strategy for private distribution (APK) and version/update control'
      }
    ],
    metrics: [
      {
        label: { es: 'Tiempo de release (build + entrega)', en: 'Release time (build + delivery)' },
        value: '~15 min'
      },
      {
        label: { es: 'Crash/build issues reducidos', en: 'Crash/build issues reduced' },
        value: '~80%'
      },
      {
        label: { es: 'Dispositivos soportados (Android)', en: 'Supported devices (Android)' },
        value: 'API 24-34'
      }
    ],
    confidential: true,
    link: null
  }
];

export const skillCategories = [
  {
    category: { es: 'Mobile', en: 'Mobile' },
    skills: ['React Native', 'Expo', 'API consumption', 'Android builds', 'UX/UI']
  },
  {
    category: { es: 'Frontend', en: 'Frontend' },
    skills: ['React', 'Next.js', 'Vite / CRACO', 'Zustand', 'Responsive UI', 'Forms & Dashboards']
  },
  {
    category: { es: 'Backend', en: 'Backend' },
    skills: ['C# / .NET', 'Entity Framework', 'REST APIs', 'Layered Architecture', 'JWT / RBAC']
  },
  {
    category: { es: 'Bases de Datos', en: 'Databases' },
    skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'Supabase', 'Modeling & Optimization']
  },
  {
    category: { es: 'DevOps/Cloud', en: 'DevOps/Cloud' },
    skills: ['IIS', 'CI/CD (GitHub Actions)', 'Environment management', 'SSL/Certificates']
  },
  {
    category: { es: 'Automatización / Data / AI', en: 'Automation / Data / AI' },
    skills: ['Python', 'FastAPI', 'scikit-learn', 'XGBoost', 'Ollama (LLM)']
  },
  {
    category: { es: 'Herramientas', en: 'Tools' },
    skills: ['Git / GitHub', 'Docker', 'Postman', 'Debugging', 'Technical Documentation']
  }
];

export const experience = [
  {
    id: 1,
    company: {
      es: 'Freelance / Proyectos Privados',
      en: 'Freelance / Private Projects'
    },
    position: {
      es: 'Desarrollador Full-Stack',
      en: 'Full-Stack Developer'
    },
    period: {
      es: '2022 - Presente',
      en: '2022 - Present'
    },
    description: {
      es: 'Desarrollo de sistemas ERP, portales EDI/logística y aplicaciones mobile para diversos clientes. Enfoque en arquitectura robusta, integraciones y deployment a producción.',
      en: 'Development of ERP systems, EDI/logistics portals, and mobile applications for various clients. Focus on robust architecture, integrations, and production deployment.'
    },
    achievements: [
      {
        es: 'Implementación completa de sistema POS multi-tenant con RBAC',
        en: 'Complete implementation of multi-tenant POS system with RBAC'
      },
      {
        es: 'Desarrollo de pipeline EDI con validación automática y trazabilidad',
        en: 'Development of EDI pipeline with automatic validation and traceability'
      },
      {
        es: 'Despliegue de aplicaciones en IIS con CI/CD y configuración por ambiente',
        en: 'Deployment of applications on IIS with CI/CD and environment-specific configuration'
      }
    ]
  }
];
