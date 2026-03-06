import { content, type Lang } from "@/lib/content";
import { Code, GraduationCap, Briefcase, ShoppingCart, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const icons = [Code, GraduationCap, Briefcase, ShoppingCart, Users];

const IndustriesSection = ({ lang }: { lang: Lang }) => {
  const t = content.industries;

  return (
    <section id="industries" className="py-24 bg-deep">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <p className="eyebrow text-center">{t.eyebrow[lang]}</p>
          <h2 className="font-headline font-black text-3xl md:text-5xl text-center mb-16">
            {t.title[lang]}
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {t.items[lang].map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#12152A] border border-[rgba(124,140,255,0.15)] rounded-full px-6 py-3 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group cursor-default"
                >
                  <Icon className="text-primary group-hover:text-accent transition-colors" size={18} />
                  <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IndustriesSection;
