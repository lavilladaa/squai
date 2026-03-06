import { content, type Lang } from "@/lib/content";
import { Brain, AlertTriangle, DollarSign } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const icons = [Brain, AlertTriangle, DollarSign];

const ProblemSection = ({ lang }: { lang: Lang }) => {
  const t = content.problems;

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Teal glow bottom-left */}
      <div className="glow-orb-teal w-[400px] h-[400px] -bottom-32 -left-32" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="font-headline font-black text-3xl md:text-5xl text-center mb-16">
            {t.title[lang]}
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="bg-[#12152A] rounded-xl p-8 border border-[rgba(124,140,255,0.15)] hover:border-[rgba(124,140,255,0.4)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_-5px_hsl(233,100%,74%,0.15)] group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">
                    {item[lang]}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
