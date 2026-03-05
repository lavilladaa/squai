import { content, type Lang } from "@/lib/content";
import { Code, GraduationCap, Briefcase, ShoppingCart, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const icons = [Code, GraduationCap, Briefcase, ShoppingCart, Users];

const IndustriesSection = ({ lang }: { lang: Lang }) => {
  const t = content.industries;

  return (
    <section id="industries" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-center mb-16">
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
                  className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 hover:border-primary/40 hover:bg-primary/5 transition-all group cursor-default"
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
