/**
 * ============================================================================
 * DATOS CENTRALES DEL NEGOCIO · L'EJARQUE SOFTWARE
 * Modifica este único archivo para cambiar el nombre de marca, datos de contacto,
 * fundadores, enlaces sociales y parámetros globales del sitio web.
 * ============================================================================
 */

export interface Founder {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface SiteConfig {
  brand: {
    name: string; // Por defecto "L’Ejarque"
    legalName: string;
    descriptor: string; // "SOFTWARE"
    tagline: string;
    description: string;
    sector: string;
    sinceYear: number;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string; // formato internacional para wa.me sin signos
    whatsappDisplay: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
    hours: string;
    timezone: string;
  };
  social: {
    linkedin: string;
    github: string;
    instagram: string;
  };
  founders: Founder[];
  i18n: {
    defaultLocale: "es" | "en";
    locales: Array<"es" | "en">;
  };
  pricingDefaults: {
    currency: "USD" | "ARS";
    usdToArsRate: number; // Tipo de cambio referencial [EDITAR]
  };
  seo: {
    siteUrl: string;
    ogImage: string;
    twitterHandle: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "L’Ejarque",
    legalName: "L’Ejarque Software S.A. [EDITAR]",
    descriptor: "SOFTWARE",
    tagline: "Ingeniería de software con precisión de arquitectura.",
    description:
      "Ingeniería de sistemas, desarrollo de software a medida, arquitectura de datos, integraciones industriales, automatización e IA. Proyección a escala industrial.",
    sector:
      "Ingeniería de sistemas, desarrollo de software a medida, arquitectura de datos, integraciones, automatización e IA",
    sinceYear: 2024,
  },
  contact: {
    email: "contacto@lejarque.com",
    phone: "+54 11 5263-8890",
    whatsapp: "5491152638890",
    whatsappDisplay: "+54 9 11 5263-8890",
    address: {
      street: "Av. del Libertador 4980, Piso 12 [EDITAR]",
      city: "Ciudad Autónoma de Buenos Aires",
      state: "Buenos Aires",
      country: "Argentina",
      postalCode: "C1426BWT",
      coordinates: {
        lat: -34.5684,
        lng: -58.4312,
      },
    },
    hours: "Lunes a Viernes de 09:00 a 18:00 (UTC-3)",
    timezone: "America/Argentina/Buenos_Aires (ART, UTC-3)",
  },
  social: {
    linkedin: "https://linkedin.com/company/lejarque-software",
    github: "https://github.com/Jaejarque/lejarque",
    instagram: "https://instagram.com/lejarque.software",
  },
  founders: [
    {
      name: "[Nombre] Leiva [EDITAR]",
      role: "Socio Fundador & Director de Arquitectura de Sistemas [EDITAR]",
      bio: "Especialista en sistemas distribuidos, optimización de infraestructura de misión crítica y diseño de arquitecturas con tolerancia a fallos.",
      initials: "NL",
    },
    {
      name: "[Nombre] Ejarque [EDITAR]",
      role: "Socio Fundador & Director de Ingeniería de Software [EDITAR]",
      bio: "Especialista en desarrollo a medida, plataformas de ingeniería de datos a escala industrial y automatización inteligente.",
      initials: "NE",
    },
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  pricingDefaults: {
    currency: "USD",
    usdToArsRate: 1350, // Cotización editable [EDITAR]
  },
  seo: {
    siteUrl: "https://lejarque.com",
    ogImage: "/brand/og-image.png",
    twitterHandle: "@lejarque_soft",
  },
};

export default siteConfig;
