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
    headlineHighlight: {
      en: "So AI Can Too.",
      es: "Para que la IA También Pueda.",
    },
    sub: {
      en: "A real ops squad that works alongside your team, maps your processes, and brings in AI that actually sticks.",
      es: "Un equipo real de operaciones que trabaja junto a ti, mapea tus procesos e integra IA que realmente funciona.",
    },
    cta1: { en: "Book a Free Discovery Call", es: "Agenda una Llamada Gratuita" },
    cta2: { en: "See Our Services", es: "Ver Nuestros Servicios" },
  },
  problems: {
    eyebrow: { en: "THE PROBLEM", es: "EL PROBLEMA" },
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
    eyebrow: { en: "OUR SERVICES", es: "NUESTROS SERVICIOS" },
    title: { en: "Our Services", es: "Nuestros Servicios" },
    tiers: [
      {
        label: { en: "Tier 1", es: "Nivel 1" },
        name: { en: "Diagnostic", es: "Diagnóstico" },
        borderColor: "primary",
        partnership: {
          en: "The smartest first step before changing anything.",
          es: "El primer paso más inteligente antes de cambiar cualquier cosa.",
        },
        description: {
          en: "Every Squai engagement starts here. We get inside your business, study how your team actually works, identify what's slowing you down, and map where AI can make a real difference. At the end we sit down together, review the findings, and agree on the path forward.",
          es: "Todo proyecto de Squai empieza aquí. Nos adentramos en tu negocio, estudiamos cómo trabaja tu equipo, identificamos qué te está frenando y mapeamos dónde la IA puede marcar una diferencia real. Al final nos sentamos juntos, revisamos los hallazgos y acordamos el camino a seguir.",
        },
        items: {
          en: [
            "A deep dive into your operations — how your team works today, where the friction is, and what's costing you time and money",
            "An AI opportunity map — specific areas where AI can help based on your tools, team, budget, and readiness",
            "A written findings report with clear, prioritized recommendations",
            "A live alignment session where we review everything together and agree on next steps",
          ],
          es: [
            "Un análisis profundo de tus operaciones — cómo trabaja tu equipo hoy, dónde está la fricción y qué te está costando tiempo y dinero",
            "Un mapa de oportunidades de IA — áreas específicas donde la IA puede ayudar según tus herramientas, equipo, presupuesto y preparación",
            "Un reporte escrito con hallazgos claros y recomendaciones priorizadas",
            "Una sesión de alineación en vivo donde revisamos todo juntos y acordamos los próximos pasos",
          ],
        },
        duration: { en: "2 weeks", es: "2 semanas" },
        popular: false,
        pricePrefix: { en: "", es: "" },
        price: "$1,500",
        priceNote: {
          en: "Fixed price. Included in all tiers — never skipped, never rushed.",
          es: "Precio fijo. Incluido en todos los niveles — nunca omitido, nunca apresurado.",
        },
        squadAssigned: { en: "2 of 6 squad members", es: "2 de 6 miembros del squad" },
        cta: { en: "Start with a Diagnostic", es: "Comenzar con un Diagnóstico" },
      },
      {
        label: { en: "Tier 2", es: "Nivel 2" },
        name: { en: "Foundation", es: "Fundación" },
        borderColor: "accent",
        partnership: {
          en: "Turn your most critical workflows into systems your team can actually follow.",
          es: "Convierte tus flujos de trabajo más críticos en sistemas que tu equipo pueda seguir.",
        },
        description: {
          en: "We take the findings from the Diagnostic and get to work. Together we decide which workflows matter most right now — then we document them properly, make them accessible to your whole team, and bring in AI where it makes the most sense for how your business actually operates.",
          es: "Tomamos los hallazgos del Diagnóstico y nos ponemos a trabajar. Juntos decidimos qué flujos de trabajo importan más ahora mismo — los documentamos correctamente, los hacemos accesibles a todo tu equipo e integramos IA donde tiene más sentido para cómo opera realmente tu negocio.",
        },
        items: {
          en: [
            "Everything in Diagnostic",
            "3–5 core workflows fully mapped and documented — clear enough that anyone on your team can follow them",
            "Operational playbooks delivered in the tools your team already uses",
            "AI implementations across your priority workflows — type and scope defined together during the Diagnostic phase",
            "A handoff session so your team owns everything we build",
            "1 week of post-delivery support",
          ],
          es: [
            "Todo lo del Diagnóstico",
            "3–5 flujos de trabajo principales completamente mapeados y documentados — lo suficientemente claros para que cualquiera en tu equipo pueda seguirlos",
            "Playbooks operativos entregados en las herramientas que tu equipo ya usa",
            "Implementaciones de IA en tus flujos prioritarios — tipo y alcance definidos juntos durante la fase de Diagnóstico",
            "Una sesión de entrega para que tu equipo sea dueño de todo lo que construimos",
            "1 semana de soporte post-entrega",
          ],
        },
        duration: { en: "4–6 weeks", es: "4–6 semanas" },
        popular: true,
        pricePrefix: { en: "From", es: "Desde" },
        price: "$5,500",
        priceNote: {
          en: "Final scope and price confirmed after the Diagnostic alignment session.",
          es: "Alcance y precio final confirmados después de la sesión de alineación del Diagnóstico.",
        },
        squadAssigned: { en: "4 of 6 squad members", es: "4 de 6 miembros del squad" },
        cta: { en: "Build Your Foundation", es: "Construir tu Fundación" },
      },
      {
        label: { en: "Tier 3", es: "Nivel 3" },
        name: { en: "Transformation", es: "Transformación" },
        borderColor: "secondary",
        partnership: {
          en: "A complete operational system — so your business runs on process, not on people.",
          es: "Un sistema operativo completo — para que tu negocio funcione con procesos, no con personas.",
        },
        description: {
          en: "This is the full picture. We go deep across your entire operation — mapping all your critical workflows, building a complete playbook your business can run on, and implementing AI across every area where it creates real leverage. We train your team hands-on so they're fully equipped to operate and grow independently long after we're done.",
          es: "Esta es la imagen completa. Profundizamos en toda tu operación — mapeando todos tus flujos críticos, construyendo un playbook completo con el que tu negocio puede operar, e implementando IA en cada área donde genera verdadero apalancamiento. Entrenamos a tu equipo de forma práctica para que estén completamente equipados para operar y crecer de forma independiente.",
        },
        items: {
          en: [
            "Everything in Diagnostic",
            "6–10 core workflows fully mapped, documented, and interconnected",
            "A complete operational playbook covering your entire business",
            "AI implementations across all priority workflows — type and scope defined collaboratively during the Diagnostic phase",
            "A data integrity review — ensuring your decisions are built on reliable, well-connected data",
            "An information security review — ensuring your processes and tools handle sensitive data responsibly",
            "Full team training — hands-on, role-specific, and practical",
            "2 weeks of post-delivery support",
          ],
          es: [
            "Todo lo del Diagnóstico",
            "6–10 flujos de trabajo principales completamente mapeados, documentados e interconectados",
            "Un playbook operativo completo que cubre todo tu negocio",
            "Implementaciones de IA en todos los flujos prioritarios — tipo y alcance definidos de forma colaborativa durante la fase de Diagnóstico",
            "Una revisión de integridad de datos — asegurando que tus decisiones estén basadas en datos confiables y bien conectados",
            "Una revisión de seguridad de la información — asegurando que tus procesos y herramientas manejen datos sensibles de forma responsable",
            "Entrenamiento completo del equipo — práctico, específico por rol y aplicado",
            "2 semanas de soporte post-entrega",
          ],
        },
        duration: { en: "8–12 weeks", es: "8–12 semanas" },
        popular: false,
        pricePrefix: { en: "From", es: "Desde" },
        price: "$12,000",
        priceNote: {
          en: "Final scope and price confirmed after the Diagnostic alignment session.",
          es: "Alcance y precio final confirmados después de la sesión de alineación del Diagnóstico.",
        },
        squadAssigned: { en: "Full squad · All 6 members", es: "Squad completo · Los 6 miembros" },
        cta: { en: "Start Your Transformation", es: "Comenzar tu Transformación" },
      },
    ],
  },
  howItWorks: {
    eyebrow: { en: "HOW IT WORKS", es: "CÓMO FUNCIONA" },
    title: { en: "How It Works", es: "Cómo Funciona" },
    steps: {
      en: ["Discovery Call", "Proposal in 48hrs", "Kickoff", "Mapping & Building", "Delivery", "Support Period"],
      es: ["Llamada de Diagnóstico", "Propuesta en 48hrs", "Kickoff", "Mapeo y Construcción", "Entrega", "Período de Soporte"],
    },
  },
  industries: {
    eyebrow: { en: "WHO WE SERVE", es: "A QUIÉN SERVIMOS" },
    title: { en: "Industries We Serve", es: "Industrias que Atendemos" },
    items: {
      en: ["SaaS & Tech Startups", "E-Learning & Education", "Professional Services", "Digital E-Commerce", "Agencies & Consultancies"],
      es: ["SaaS y Startups", "E-Learning y Educación", "Servicios Profesionales", "E-Commerce Digital", "Agencias y Consultoras"],
    },
  },
  whySquai: {
    eyebrow: { en: "WHY SQUAI", es: "POR QUÉ SQUAI" },
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
  squad: {
    eyebrow: { en: "THE SQUAD", es: "EL SQUAD" },
    title: { en: "Meet Your Squad", es: "Conoce a tu Squad" },
    sub: {
      en: "Every engagement assigns the right people to your specific needs. You're never handed off to a junior — this is the team.",
      es: "Cada proyecto asigna las personas correctas según tus necesidades. Nunca te pasamos a un junior — este es el equipo.",
    },
    members: [
      {
        role: { en: "Operations Strategist", es: "Estratega de Operaciones" },
        specialty: { en: "Strategy & Direction", es: "Estrategia y Dirección" },
        desc: {
          en: "Diagnoses your business, defines the operational roadmap, and leads the engagement from start to finish. Translates your real problems into structured solutions — and makes sure everything the squad delivers is aligned to your actual goals, not just the symptoms.",
          es: "Diagnostica tu negocio, define la hoja de ruta operativa y lidera el proyecto de principio a fin. Traduce tus problemas reales en soluciones estructuradas — alineadas con tus objetivos reales, no solo con los síntomas.",
        },
        tiers: { en: ["Diagnostic", "Foundation", "Transformation"], es: ["Diagnóstico", "Fundación", "Transformación"] },
        borderColor: "accent",
      },
      {
        role: { en: "AI Engineer", es: "Ingeniero de IA" },
        specialty: { en: "Automation Specialist", es: "Especialista en Automatización" },
        desc: {
          en: "Builds and configures the AI tools, automations, and integrations identified during the engagement. Custom implementations — not off-the-shelf advice.",
          es: "Construye y configura las herramientas de IA, automatizaciones e integraciones identificadas durante el proyecto. Implementaciones a medida — no consejos genéricos.",
        },
        tiers: { en: ["Foundation", "Transformation"], es: ["Fundación", "Transformación"] },
        borderColor: "secondary",
      },
      {
        role: { en: "Business Process Analyst", es: "Analista de Procesos de Negocio" },
        specialty: { en: "Process Design & Strategy", es: "Diseño y Estrategia de Procesos" },
        desc: {
          en: "Maps your real workflows, identifies bottlenecks, and aligns every process improvement to your actual business goals — not just what looks broken on the surface.",
          es: "Mapea tus flujos reales, identifica cuellos de botella y alinea cada mejora de proceso con tus objetivos reales de negocio — no solo lo que parece roto en la superficie.",
        },
        tiers: { en: ["Diagnostic", "Foundation", "Transformation"], es: ["Diagnóstico", "Fundación", "Transformación"] },
        borderColor: "primary",
      },
      {
        role: { en: "Knowledge Manager", es: "Gestor de Conocimiento" },
        specialty: { en: "Systems & Knowledge Design", es: "Diseño y Gestión de Conocimiento" },
        desc: {
          en: "Ensures all workflows, playbooks, and documentation are clear, structured, and accessible across your team's tools — so knowledge stays in systems, not in people's heads.",
          es: "Garantiza que todos los flujos, playbooks y documentación sean claros, estructurados y accesibles en las herramientas de tu equipo — para que el conocimiento viva en sistemas, no en cabezas.",
        },
        tiers: { en: ["Foundation", "Transformation"], es: ["Fundación", "Transformación"] },
        borderColor: "primary",
      },
      {
        role: { en: "Data Analyst", es: "Analista de Datos" },
        specialty: { en: "Data Integrity & Connections", es: "Integridad y Conexiones de Datos" },
        desc: {
          en: "Ensures your data flows correctly across your processes and tools. Validates data integrity, identifies where information is incomplete or misused, and makes sure your operations are built on reliable, well-connected data.",
          es: "Garantiza que tus datos fluyan correctamente a través de tus procesos y herramientas. Valida la integridad de los datos e identifica dónde la información está incompleta o mal usada.",
        },
        tiers: { en: ["Transformation"], es: ["Transformación"] },
        borderColor: "primary",
      },
      {
        role: { en: "Information Security Analyst", es: "Analista de Seguridad de la Información" },
        specialty: { en: "Security & Risk Management", es: "Gestión de Seguridad y Riesgos" },
        desc: {
          en: "Ensures your processes, tools, and documentation follow information security best practices — so your business handles sensitive data responsibly and stays protected as it grows.",
          es: "Garantiza que tus procesos, herramientas y documentación sigan las mejores prácticas de seguridad de la información — para que tu negocio maneje datos sensibles de forma responsable y esté protegido a medida que crece.",
        },
        tiers: { en: ["Foundation", "Transformation"], es: ["Fundación", "Transformación"] },
        borderColor: "primary",
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
