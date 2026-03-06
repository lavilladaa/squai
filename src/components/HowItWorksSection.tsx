import { content, type Lang } from "@/lib/content";
import { motion } from "framer-motion";

const HowItWorksSection = ({ lang }: { lang: Lang }) => {
  const t = content.howItWorks;
  const steps = t.steps[lang];

  return (
    <section id="how-it-works" className="py-24 bg-surface relative overflow-hidden dot-grid">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="eyebrow">{t.eyebrow[lang]}</p>
          <h2 className="font-headline font-black text-3xl md:text-5xl">
            {t.title[lang]}
          </h2>
        </motion.div>

        {/* Desktop: zigzag timeline */}
        <div className="hidden md:block max-w-5xl mx-auto relative">
          {/* Central vertical line in teal */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-secondary/30 -translate-x-1/2" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Connector dot in teal */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[3px] border-secondary bg-background z-10" />

                {/* Card */}
                <div
                  className={`w-[calc(50%-2.5rem)] bg-[#12152A] border border-[rgba(124,140,255,0.15)] hover:border-secondary/40 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_-5px_hsl(175,58%,55%,0.15)] group ${
                    isLeft ? "text-right mr-auto" : "text-left ml-auto"
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-2 ${isLeft ? "justify-end" : "justify-start"}`}>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/10 font-headline font-black text-secondary text-sm group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {step}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical cards */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 bg-[#12152A] border border-[rgba(124,140,255,0.15)] rounded-xl p-5"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/10 font-headline font-black text-secondary text-sm shrink-0">
                {i + 1}
              </span>
              <p className="text-muted-foreground font-body text-sm pt-1.5">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
