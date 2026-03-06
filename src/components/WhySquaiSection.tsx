import { content, type Lang } from "@/lib/content";
import { Users, Globe, Zap, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const icons = [Users, Globe, Zap, Rocket];

const WhySquaiSection = ({ lang }: { lang: Lang }) => {
  const t = content.whySquai;

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-headline font-black text-3xl md:text-5xl text-center mb-16">
            {t.title[lang]}
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[#12152A] rounded-xl p-8 border border-[rgba(124,140,255,0.15)] hover:border-[rgba(124,140,255,0.4)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_-5px_hsl(233,100%,74%,0.15)] group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-headline font-extrabold text-lg mb-2">{item.title[lang]}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {item.desc[lang]}
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

export default WhySquaiSection;
