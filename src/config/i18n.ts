export type SupportedLocale = "es" | "en";

export interface Translations {
  nav: {
    services: string;
    solutions: string;
    projects: string;
    process: string;
    about: string;
    estimator: string;
    contact: string;
    brand: string;
    quoteCta: string;
    themeToggle: string;
    langToggle: string;
  };
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    quoteBtn: string;
    projectsBtn: string;
    specs: {
      uptime: string;
      uptimeLabel: string;
      latency: string;
      latencyLabel: string;
      codeOwnership: string;
      codeOwnershipLabel: string;
    };
  };
  trust: {
    heading: string;
    subheading: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    expandBtn: string;
    collapseBtn: string;
    deliverablesLabel: string;
    technologiesLabel: string;
    casesLabel: string;
  };
  solutions: {
    tag: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    solutionLabel: string;
    modulesLabel: string;
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    allFilter: string;
    searchPlaceholder: string;
    viewCaseStudy: string;
    confidentialTag: string;
    architectureDiagram: string;
    clientNda: string;
    resultsLabel: string;
    stackLabel: string;
  };
  process: {
    tag: string;
    title: string;
    subtitle: string;
    durationLabel: string;
    deliverablesLabel: string;
  };
  principles: {
    tag: string;
    title: string;
    subtitle: string;
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    foundersTitle: string;
    methodologyTitle: string;
  };
  estimator: {
    tag: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step6: string;
    modulesLabel: string;
    usersLabel: string;
    platformLabel: string;
    complexityLabel: string;
    extrasLabel: string;
    timelineLabel: string;
    supportLabel: string;
    contactTitle: string;
    resultTitle: string;
    estWeeks: string;
    estHours: string;
    estInvestment: string;
    monthlySupport: string;
    downloadPdf: string;
    copyLink: string;
    sendLead: string;
    openWhatsapp: string;
    scheduleMeeting: string;
    copiedNotice: string;
    disclaimerNotice: string;
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    inquiryTypeLabel: string;
    messageLabel: string;
    submitBtn: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    addressLabel: string;
    hoursLabel: string;
    mapLoadBtn: string;
    directionsBtn: string;
  };
  brandPage: {
    tag: string;
    title: string;
    subtitle: string;
    downloadAssets: string;
    copySvg: string;
    colorPalette: string;
    typography: string;
    applications: string;
    uiKit: string;
  };
  cmdPalette: {
    placeholder: string;
    navigate: string;
    theme: string;
    language: string;
    calculator: string;
  };
  aiAssistant: {
    badge: string;
    title: string;
    status: string;
    welcomeMsg: string;
    inputPlaceholder: string;
    sendBtn: string;
    loadToEstimator: string;
    disclaimer: string;
  };
  footer: {
    rigor: string;
    rights: string;
    privacy: string;
    terms: string;
    brandLink: string;
  };
}

export const translations: Record<SupportedLocale, Translations> = {
  es: {
    nav: {
      services: "Servicios",
      solutions: "Soluciones",
      projects: "Proyectos",
      process: "Proceso",
      about: "Nosotros",
      estimator: "Cotizador",
      contact: "Contacto",
      brand: "Marca",
      quoteCta: "Cotizar proyecto",
      themeToggle: "Cambiar tema",
      langToggle: "Idioma",
    },
    hero: {
      tag: "Ingeniería de software de alta precisión",
      title: "Ingeniería de software con precisión de arquitectura.",
      subtitle:
        "Construimos sistemas a medida, plataformas distribuidas y arquitectura de datos para industrias que no admiten fallos. Estructuras sólidas, trazabilidad matemática y código auditable.",
      quoteBtn: "Cotizar proyecto",
      projectsBtn: "Ver proyectos técnicos",
      specs: {
        uptime: "99.98%",
        uptimeLabel: "Disponibilidad en producción",
        latency: "<85ms",
        latencyLabel: "Latencia p95 en APIs",
        codeOwnership: "100%",
        codeOwnershipLabel: "Propiedad del cliente",
      },
    },
    trust: {
      heading: "ESTÁNDARES, LENGUAJES Y PROTOCOLOS",
      subheading: "Sin dependencias opacas. Arquitectura verificable sobre tecnologías consolidadas de nivel industrial.",
    },
    services: {
      tag: "Capacidades técnicas",
      title: "Servicios de ingeniería",
      subtitle:
        "No ofrecemos plantillas ni soluciones genéricas. Cada proyecto se diseña desde sus fundamentos con especificaciones matemáticas y rigor técnico.",
      expandBtn: "Ver especificación y entregables",
      collapseBtn: "Cerrar panel",
      deliverablesLabel: "Entregables técnicos",
      technologiesLabel: "Tecnologías clave",
      casesLabel: "Casos de aplicación",
    },
    solutions: {
      tag: "Escala industrial",
      title: "Soluciones por industria",
      subtitle:
        "Arquitectura de software adaptada a los requerimientos de disponibilidad, volumen de datos y normativas de cada sector estratégico.",
      problemLabel: "Desafío común",
      solutionLabel: "Enfoque arquitectónico",
      modulesLabel: "Módulos de ingeniería",
    },
    projects: {
      tag: "Registro de casos",
      title: "Proyectos ejecutados",
      subtitle:
        "Sistemas en operación real. Cada caso documenta el reto inicial, la topología de la arquitectura y las métricas obtenidas.",
      allFilter: "Todos",
      searchPlaceholder: "Buscar por tecnología, sector o palabra clave...",
      viewCaseStudy: "Estudiar arquitectura",
      confidentialTag: "Cliente bajo NDA",
      architectureDiagram: "Diagrama de arquitectura",
      clientNda: "Este caso opera bajo acuerdo de confidencialidad estricta. Ciertas métricas y nombres han sido anonimizados.",
      resultsLabel: "Impacto medible",
      stackLabel: "Stack tecnológico",
    },
    process: {
      tag: "Metodología",
      title: "Ciclo de ingeniería riguroso",
      subtitle:
        "De la formalización de requisitos a la evolución continua. Sin improvisación: fases acotadas, entregables medibles y verificación continua.",
      durationLabel: "Plazo orientativo",
      deliverablesLabel: "Entregable formal",
    },
    principles: {
      tag: "Código deontológico",
      title: "Principios técnicos innegociables",
      subtitle: "Los fundamentos sobre los que modelamos cada línea de código y cada infraestructura de datos.",
    },
    about: {
      tag: "Organización",
      title: "Ingeniería orientada a resultados",
      subtitle:
        "Fundada para llevar la precisión de la ingeniería estructural al desarrollo de software y la analítica corporativa.",
      foundersTitle: "Liderazgo técnico",
      methodologyTitle: "Cómo trabajamos",
    },
    estimator: {
      tag: "Herramienta interactiva",
      title: "Cotizador de arquitectura de software",
      subtitle:
        "Configura los parámetros de tu proyecto técnico para obtener una estimación objetiva de horas, plazos y rango de inversión en tiempo real.",
      step1: "1. Tipo de proyecto",
      step2: "2. Alcance y escala",
      step3: "3. Componentes adicionales",
      step4: "4. Plazo y criticidad",
      step5: "5. Soporte y evolución",
      step6: "6. Resumen y contacto",
      modulesLabel: "Cantidad de módulos funcionales",
      usersLabel: "Usuarios estimados concurrentes",
      platformLabel: "Plataforma objetivo",
      complexityLabel: "Nivel de complejidad técnica",
      extrasLabel: "Extras arquitectónicos y calidad",
      timelineLabel: "Régimen de entrega",
      supportLabel: "Cobertura post-despliegue",
      contactTitle: "Datos para formalizar la estimación",
      resultTitle: "Estimación orientativa de ingeniería",
      estWeeks: "Plazo estimado",
      estHours: "Horas de ingeniería",
      estInvestment: "Rango de inversión",
      monthlySupport: "Abono mensual de soporte",
      downloadPdf: "Descargar informe (PDF)",
      copyLink: "Copiar enlace con configuración",
      sendLead: "Solicitar propuesta técnica",
      openWhatsapp: "Consultar por WhatsApp",
      scheduleMeeting: "Agendar sesión de descubrimiento",
      copiedNotice: "Enlace copiado al portapapeles",
      disclaimerNotice:
        "Estimación paramétrica orientativa basada en histórico de proyectos. No constituye presupuesto final vinculante sin análisis previo de especificaciones.",
    },
    faq: {
      tag: "Claridad contractual",
      title: "Preguntas frecuentes",
      subtitle:
        "Respuestas directas y transparentes sobre propiedad intelectual, plazos, modalidades de contratación y metodologías de trabajo.",
    },
    contact: {
      tag: "Canal directo",
      title: "Iniciar conversación técnica",
      subtitle:
        "Habla directamente con arquitectos de software e ingenieros de datos. Sin comerciales intermediarios.",
      nameLabel: "Nombre y apellido",
      emailLabel: "Correo corporativo",
      companyLabel: "Empresa u organización",
      inquiryTypeLabel: "Tipo de requerimiento",
      messageLabel: "Descripción del desafío técnico",
      submitBtn: "Enviar solicitud técnica",
      sending: "Procesando envío...",
      successTitle: "Solicitud registrada",
      successMessage: "Hemos recibido tus datos técnicos. Un socio fundador se pondrá en contacto en menos de 24 horas hábiles.",
      addressLabel: "Ubicación técnica",
      hoursLabel: "Atención técnica",
      mapLoadBtn: "Cargar mapa interactivo (OpenStreetMap)",
      directionsBtn: "Cómo llegar (Google Maps)",
    },
    brandPage: {
      tag: "Sistema de diseño",
      title: "Identidad visual de ingeniería",
      subtitle:
        "Especificaciones del imagotipo, paleta cobre técnico, geometría de construcción, aplicaciones en piezas físicas y kit de componentes UI.",
      downloadAssets: "Descargar paquete de assets",
      copySvg: "Copiar código SVG",
      colorPalette: "Paleta cromática y contrastes",
      typography: "Especificación tipográfica",
      applications: "Aplicaciones en objetos reales",
      uiKit: "Kit de interfaz y componentes",
    },
    cmdPalette: {
      placeholder: "Escribe un comando o busca una sección (ej. cotizador, proyectos, tema)...",
      navigate: "Navegación",
      theme: "Apariencia",
      language: "Idioma",
      calculator: "Herramientas",
    },
    aiAssistant: {
      badge: "Asistente Técnico IA",
      title: "L'Ejarque Copilot",
      status: "En línea · Modelo de ingeniería",
      welcomeMsg:
        "Hola. Soy el asistente de ingeniería de L'Ejarque Software. Puedo responder dudas sobre nuestra arquitectura, explicar nuestros servicios o preconfigurar el cotizador según tus necesidades técnicas. ¿En qué proyecto estás trabajando?",
      inputPlaceholder: "Pregunta sobre un servicio o describe tu proyecto...",
      sendBtn: "Enviar",
      loadToEstimator: "Cargar especificación en el cotizador",
      disclaimer: "Asistente automatizado con base en el catálogo de servicios de L'Ejarque Software.",
    },
    footer: {
      rigor: "Hecho con rigor arquitectónico.",
      rights: "Todos los derechos reservados.",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
      brandLink: "Sistema de marca y UI",
    },
  },
  en: {
    nav: {
      services: "Services",
      solutions: "Solutions",
      projects: "Projects",
      process: "Process",
      about: "About",
      estimator: "Estimator",
      contact: "Contact",
      brand: "Brand",
      quoteCta: "Estimate project",
      themeToggle: "Toggle theme",
      langToggle: "Language",
    },
    hero: {
      tag: "High precision software engineering",
      title: "Software engineering with architectural precision.",
      subtitle:
        "We build custom systems, distributed platforms, and data architectures for mission-critical industries. Robust structures, mathematical traceability, and fully auditable code.",
      quoteBtn: "Estimate project",
      projectsBtn: "View technical projects",
      specs: {
        uptime: "99.98%",
        uptimeLabel: "Production uptime",
        latency: "<85ms",
        latencyLabel: "API p95 latency",
        codeOwnership: "100%",
        codeOwnershipLabel: "Client code ownership",
      },
    },
    trust: {
      heading: "STANDARDS, LANGUAGES & PROTOCOLS",
      subheading: "No black boxes. Verifiable architecture built on robust, industry-grade technologies.",
    },
    services: {
      tag: "Technical capabilities",
      title: "Engineering services",
      subtitle:
        "We do not build generic templates. Each project is engineered from first principles with mathematical rigor and strict quality controls.",
      expandBtn: "View specs & deliverables",
      collapseBtn: "Close panel",
      deliverablesLabel: "Technical deliverables",
      technologiesLabel: "Core technologies",
      casesLabel: "Use cases",
    },
    solutions: {
      tag: "Industrial scale",
      title: "Solutions by industry",
      subtitle:
        "Tailored architectures addressing high-availability, high data volume, and regulatory constraints in mission-critical industries.",
      problemLabel: "Typical challenge",
      solutionLabel: "Architectural approach",
      modulesLabel: "Engineered modules",
    },
    projects: {
      tag: "Case registry",
      title: "Delivered systems",
      subtitle:
        "Production-grade systems in active operation. Each study details the core challenge, architectural topology, and validated metrics.",
      allFilter: "All",
      searchPlaceholder: "Search by technology, industry or keywords...",
      viewCaseStudy: "Inspect architecture",
      confidentialTag: "Client under NDA",
      architectureDiagram: "Architecture diagram",
      clientNda: "This case operates under strict confidentiality. Certain metrics and identifiers have been sanitized.",
      resultsLabel: "Measured impact",
      stackLabel: "Tech stack",
    },
    process: {
      tag: "Methodology",
      title: "Rigorous engineering cycle",
      subtitle:
        "From requirements formalization to long-term lifecycle evolution. Zero improvisation: bounded iterations, measurable milestones, and continuous QA.",
      durationLabel: "Indicative timeline",
      deliverablesLabel: "Formal deliverable",
    },
    principles: {
      tag: "Engineering code",
      title: "Non-negotiable technical principles",
      subtitle: "The foundational standards governing every line of code and every distributed data pipeline.",
    },
    about: {
      tag: "Organization",
      title: "Engineering committed to results",
      subtitle:
        "Founded to bring the rigor of structural engineering to software development and industrial data analytics.",
      foundersTitle: "Technical leadership",
      methodologyTitle: "Engineering workflow",
    },
    estimator: {
      tag: "Interactive tool",
      title: "Software architecture estimator",
      subtitle:
        "Configure your project parameters to calculate an objective estimation of engineering hours, timelines, and investment range in real time.",
      step1: "1. Project type",
      step2: "2. Scope & scale",
      step3: "3. Architectural extras",
      step4: "4. Timeline & priority",
      step5: "5. Support & lifecycle",
      step6: "6. Summary & submit",
      modulesLabel: "Number of functional modules",
      usersLabel: "Estimated concurrent users",
      platformLabel: "Target platform",
      complexityLabel: "Technical complexity level",
      extrasLabel: "Architecture extras & quality",
      timelineLabel: "Delivery model",
      supportLabel: "Post-deployment coverage",
      contactTitle: "Details to formalize estimation",
      resultTitle: "Engineering budget estimate",
      estWeeks: "Estimated timeline",
      estHours: "Engineering hours",
      estInvestment: "Investment range",
      monthlySupport: "Monthly support fee",
      downloadPdf: "Download report (PDF)",
      copyLink: "Copy link with config",
      sendLead: "Request technical proposal",
      openWhatsapp: "Inquire via WhatsApp",
      scheduleMeeting: "Book discovery session",
      copiedNotice: "Link copied to clipboard",
      disclaimerNotice:
        "Parametric estimate based on historical project data. Does not constitute a binding contract without an engineering discovery phase.",
    },
    faq: {
      tag: "Contractual clarity",
      title: "Frequently asked questions",
      subtitle:
        "Straightforward answers regarding intellectual property, delivery timeframes, engagement models, and engineering practices.",
    },
    contact: {
      tag: "Direct channel",
      title: "Start a technical discussion",
      subtitle: "Direct communication with system architects and data engineers. Zero intermediary sales reps.",
      nameLabel: "Full name",
      emailLabel: "Corporate email",
      companyLabel: "Company / Organization",
      inquiryTypeLabel: "Requirement type",
      messageLabel: "Technical challenge description",
      submitBtn: "Send technical inquiry",
      sending: "Processing submission...",
      successTitle: "Inquiry registered",
      successMessage: "We have received your technical inquiry. A founding partner will respond within 24 business hours.",
      addressLabel: "Engineering office",
      hoursLabel: "Working hours",
      mapLoadBtn: "Load interactive map (OpenStreetMap)",
      directionsBtn: "Get directions (Google Maps)",
    },
    brandPage: {
      tag: "Design system",
      title: "Engineering visual identity",
      subtitle:
        "Imagotype specifications, technical copper palette, geometric construction grid, real-world mockups, and UI design kit.",
      downloadAssets: "Download asset bundle",
      copySvg: "Copy SVG markup",
      colorPalette: "Chromatic palette & contrast",
      typography: "Typography specification",
      applications: "Physical mockups",
      uiKit: "UI kit & component library",
    },
    cmdPalette: {
      placeholder: "Type a command or search a section (e.g. estimator, projects, theme)...",
      navigate: "Navigation",
      theme: "Theme",
      language: "Language",
      calculator: "Tools",
    },
    aiAssistant: {
      badge: "AI Technical Assistant",
      title: "L'Ejarque Copilot",
      status: "Online · Engineering model",
      welcomeMsg:
        "Hello. I am the technical assistant of L'Ejarque Software. I can answer inquiries about our architecture, explain services, or configure the estimator for your project. What technical challenge are you solving?",
      inputPlaceholder: "Ask about a service or describe your project...",
      sendBtn: "Send",
      loadToEstimator: "Load specification into estimator",
      disclaimer: "Automated assistant based on L'Ejarque Software service catalog.",
    },
    footer: {
      rigor: "Built with architectural rigor.",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of service",
      brandLink: "Brand system & UI",
    },
  },
};
