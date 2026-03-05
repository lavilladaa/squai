export type Lang = "en" | "es";

export const content = {
  nav: {
    links: {
      en: ["Services", "How It Works", "Industries", "Contact"],
      es: ["Servicios", "Cómo Funciona", "Industrias", "Contacto"],
    },
    sections: ["services", "how-it-works", "industries", "contact"],
  },
  hero: {
    headline: {
      en: "We Work With Your Team So AI Can Too.",
      es: "Trabajamos Con tu Equipo Para que la IA También Pueda.",
    },
    sub: {
      en: "A real ops squad that works alongside your team, maps your processes, and brings in AI that actually sticks.",
      es: "Un equipo real de operaciones que trabaja junto a ti, mapea tus procesos e integra IA que realmente funciona.",
    },
    cta1: { en: "Book a Free Discovery Call", es: "Agenda una Llamada Gratuita" },
    cta2: { en: "See Our Services", es: "Ver Nuestros Servicios" },
  },
  problems: {
    title: { en: "Sound Familiar?", es: "¿Te Suena Familiar?" },
    items: [
      {
        en: "Your processes live in people's heads, not in systems.",
        es: "Tus procesos viven en la cabeza de tu equipo, no en sistemas.",
      },
      {
        en: "You know AI matters but don't know where to start.",
        es: "Sabes que la IA importa, pero no sabes por dónde empezar.",
      },
      {
        en: "You can't afford a big consulting firm — and you don't need one.",
        es: "No puedes pagar una gran consultora — y tampoco la necesitas.",
      },
    ],
  },
  services: {
    title: { en: "Our Services", es: "Nuestros Servicios" },
    tiers: [
      {
        label: { en: "Tier 1", es: "Nivel 1" },
        name: { en: "Assess", es: "Diagnóstico" },
        duration: { en: "2 weeks", es: "2 semanas" },
        items: {
          en: ["Bottleneck analysis", "AI opportunity map", "Written report", "Presentation walkthrough"],
          es: ["Análisis de cuellos de botella", "Mapa de oportunidades de IA", "Informe escrito", "Presentación de resultados"],
        },
        popular: false,
      },
      {
        label: { en: "Tier 2", es: "Nivel 2" },
        name: { en: "Build", es: "Construcción" },
        duration: { en: "4 weeks", es: "4 semanas" },
        items: {
          en: ["3–5 processes mapped", "3–5 SOPs delivered", "Up to 3 AI implementations", "1-week support"],
          es: ["3–5 procesos mapeados", "3–5 SOPs entregados", "Hasta 3 implementaciones de IA", "1 semana de soporte"],
        },
        popular: true,
      },
      {
        label: { en: "Tier 3", es: "Nivel 3" },
        name: { en: "Transform", es: "Transformación" },
        duration: { en: "8 weeks", es: "8 semanas" },
        items: {
          en: ["8–10 processes mapped", "8–10 SOPs", "Up to 8 AI implementations", "Team training", "2-week support"],
          es: ["8–10 procesos mapeados", "8–10 SOPs", "Hasta 8 implementaciones de IA", "Capacitación del equipo", "2 semanas de soporte"],
        },
        popular: false,
      },
    ],
    cta: { en: "Get Started", es: "Comenzar" },
  },
  howItWorks: {
    title: { en: "How It Works", es: "Cómo Funciona" },
    steps: {
      en: ["Discovery Call", "Proposal in 48hrs", "Kickoff", "Mapping & Building", "Delivery", "Support Period"],
      es: ["Llamada de Diagnóstico", "Propuesta en 48hrs", "Kickoff", "Mapeo y Construcción", "Entrega", "Período de Soporte"],
    },
  },
  industries: {
    title: { en: "Industries We Serve", es: "Industrias que Atendemos" },
    items: {
      en: ["SaaS & Tech Startups", "E-Learning & Education", "Professional Services", "Digital E-Commerce", "Agencies & Consultancies"],
      es: ["SaaS y Startups", "E-Learning y Educación", "Servicios Profesionales", "E-Commerce Digital", "Agencias y Consultoras"],
    },
  },
  whySquai: {
    title: { en: "Why Squai", es: "¿Por Qué Squai?" },
    items: [
      {
        title: { en: "A squad, not a solo consultant", es: "Un equipo, no un consultor solo" },
        desc: {
          en: "Real people with defined roles working inside your business — not a chatbot or a framework.",
          es: "Personas reales con roles definidos trabajando en tu negocio — no un chatbot ni un marco teórico.",
        },
      },
      {
        title: { en: "We speak your language — literally", es: "Hablamos tu idioma — literalmente" },
        desc: {
          en: "English or Spanish, Notion or Confluence — we adapt to how you work.",
          es: "Inglés o español, Notion o Confluence — nos adaptamos a cómo trabajas.",
        },
      },
      {
        title: { en: "Practical AI, not theoretical", es: "IA práctica, no teórica" },
        desc: {
          en: "We implement tools matched to your team's actual comfort level. No generic slide decks.",
          es: "Implementamos herramientas según el nivel real de tu equipo. Sin presentaciones genéricas.",
        },
      },
      {
        title: { en: "We leave you independent", es: "Te dejamos independiente" },
        desc: {
          en: "Our goal is to give your team the processes, tools, and confidence to run without us.",
          es: "Nuestro objetivo es darte los procesos, herramientas y confianza para funcionar sin nosotros.",
        },
      },
    ],
  },
  ctaSection: {
    headline: { en: "Ready to meet your squad?", es: "¿Listo para conocer tu squad?" },
    sub: {
      en: "A real squad, a free 30-minute call. No commitment. No pressure. Just clarity.",
      es: "Un equipo real, una llamada gratuita de 30 minutos. Sin compromiso. Sin presión. Solo claridad.",
    },
    cta: { en: "Book Your Free Call", es: "Agenda tu Llamada Gratis" },
  },
  footer: {
    tagline: {
      en: "We Work With Your Team So AI Can Too.",
      es: "Trabajamos Con tu Equipo Para que la IA También Pueda.",
    },
    links: {
      en: ["Services", "How It Works", "Contact"],
      es: ["Servicios", "Cómo Funciona", "Contacto"],
    },
    sections: ["services", "how-it-works", "contact"],
    copyright: "© 2026 Squai. All rights reserved.",
  },
};
