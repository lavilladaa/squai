import { content, type Lang } from "@/lib/content";
import { motion } from "framer-motion";

const HowItWorksSection = ({ lang }: { lang: Lang }) => {
  const t = content.howItWorks;
  // Step names and descriptions
  const stepNames = {
    en: [
      "Discovery Call",
      "Proposal in 48hrs",
      "Kickoff",
      "Mapping & Building",
      "Delivery",
      "Support Period",
    ],
    es: [
      "Llamada de Diagnóstico",
      "Propuesta en 48hrs",
      "Kickoff",
      "Mapeo y Construcción",
      "Entrega",
      "Período de Soporte",
    ],
  };
  const stepDescriptions = {
    en: [
      "A free 30-minute call with your Operations Strategist. We learn about your business and recommend the right engagement.",
      "You receive a clear proposal within 48 hours — exact scope, deliverables, timeline, squad members, and investment. No ambiguity.",
      "Once approved we schedule a kickoff session with your key stakeholders. This is where the work officially begins.",
      "The squad works through the engagement week by week. Regular check-ins and early previews — no big reveals at the end.",
      "All deliverables handed off in your preferred tools and formats. We adapt to how your team works — not the other way around.",
      "1 to 2 weeks of post-delivery support for questions, adjustments, and onboarding your team to new processes and tools.",
    ],
    es: [
      "Una llamada gratuita de 30 minutos con tu Operations Strategist. Aprendemos sobre tu negocio y recomendamos el proyecto adecuado.",
      "Recibes una propuesta clara en 48 horas — alcance exacto, entregables, cronograma, miembros del squad e inversión. Sin ambigüedad.",
      "Una vez aprobado, agendamos una sesión de kickoff con tus stakeholders clave. Aquí comienza el trabajo oficialmente.",
      "El squad trabaja semana a semana. Check-ins regulares y avances tempranos — sin grandes sorpresas al final.",
      "Todos los entregables en tus herramientas y formatos preferidos. Nos adaptamos a cómo trabaja tu equipo — no al revés.",
      "1 a 2 semanas de soporte post-entrega para preguntas, ajustes y onboarding de tu equipo a los nuevos procesos y herramientas.",
    ],
  };
  // SVG icons for each step
  const stepIcons = [
    // Step 1: Speech bubble/phone
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" key="1"><path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16c0 2.21.597 4.28 1.64 6.06L4 28l5.94-1.64A11.96 11.96 0 0 0 16 28Z" stroke="#7C8CFF" strokeWidth="2"/><path d="M11 15h10M11 19h6" stroke="#7C8CFF" strokeWidth="2" strokeLinecap="round"/></svg>,
    // Step 2: Document/checklist
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" key="2"><rect x="6" y="6" width="20" height="20" rx="3" stroke="#7C8CFF" strokeWidth="2"/><path d="M10 12h12M10 16h8M10 20h4" stroke="#7C8CFF" strokeWidth="2" strokeLinecap="round"/></svg>,
    // Step 3: Rocket
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" key="3"><path d="M16 4l4 8-4 16-4-16 4-8Z" stroke="#7C8CFF" strokeWidth="2"/><circle cx="16" cy="24" r="2" fill="#7C8CFF"/></svg>,
    // Step 4: Flowchart/wrench
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" key="4"><path d="M8 8h16v16H8V8Z" stroke="#7C8CFF" strokeWidth="2"/><path d="M16 16l6 6M16 16l-6 6" stroke="#7C8CFF" strokeWidth="2"/></svg>,
    // Step 5: Box/checkmark circle
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" key="5"><rect x="8" y="8" width="16" height="16" rx="3" stroke="#7C8CFF" strokeWidth="2"/><circle cx="16" cy="16" r="6" stroke="#7C8CFF" strokeWidth="2"/><path d="M14 16l2 2 4-4" stroke="#7C8CFF" strokeWidth="2" strokeLinecap="round"/></svg>,
    // Step 6: Headset/shield
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" key="6"><circle cx="16" cy="16" r="12" stroke="#7C8CFF" strokeWidth="2"/><path d="M12 20v-2a4 4 0 0 1 8 0v2" stroke="#7C8CFF" strokeWidth="2"/></svg>,
  ];

  return (
    <section id="how-it-works" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline font-black text-3xl md:text-5xl">
            {t.title[lang]}
          </h2>
        </motion.div>

        {/* Desktop: 3x2 grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#12152A] border-t-4 border-[#7C8CFF] rounded-xl p-6 flex flex-col h-full group shadow-sm hover:shadow-[0_0_25px_-5px_#7C8CFF] transition-all duration-200"
              style={{ gridRow: i < 3 ? 1 : 2 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-headline font-black text-2xl text-[#7C8CFF]">{i + 1}</span>
                <span>{stepIcons[i]}</span>
              </div>
              <div className="mb-2 font-headline font-extrabold text-lg text-[#F0F2FF]">{stepNames[lang][i]}</div>
              <div className="font-body text-sm text-[#A8AECE] leading-relaxed">{stepDescriptions[lang][i]}</div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#12152A] border-t-4 border-[#7C8CFF] rounded-xl p-5 flex flex-col group shadow-sm hover:shadow-[0_0_25px_-5px_#7C8CFF] transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-headline font-black text-xl text-[#7C8CFF]">{i + 1}</span>
                <span>{stepIcons[i]}</span>
              </div>
              <div className="mb-2 font-headline font-extrabold text-base text-[#F0F2FF]">{stepNames[lang][i]}</div>
              <div className="font-body text-sm text-[#A8AECE] leading-relaxed">{stepDescriptions[lang][i]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
