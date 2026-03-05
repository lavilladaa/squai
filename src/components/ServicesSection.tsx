import { content, type Lang } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Check, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ServicesSection = ({ lang }: { lang: Lang }) => {
  const t = content.services;

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-center mb-16">
            {t.title[lang]}
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.tiers.map((tier, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div
                className={`relative bg-card rounded-xl p-8 border transition-all hover:-translate-y-1 h-full flex flex-col ${
                  tier.popular
                    ? "border-accent shadow-lg shadow-accent/10 scale-[1.02]"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-body font-semibold px-4 py-1 rounded-full">
                    {lang === "en" ? "Most Popular" : "Más Popular"}
                  </div>
                )}
                <p className="text-primary font-body font-semibold text-sm uppercase tracking-wider mb-1">
                  {tier.label[lang]}
                </p>
                <h3 className="font-headline font-black text-2xl mb-1">{tier.name[lang]}</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">{tier.duration[lang]}</p>

                {/* Pricing */}
                <div className="mb-6">
                  {tier.pricePrefix[lang] && (
                    <p className="font-body font-semibold text-sm text-accent">{tier.pricePrefix[lang]}</p>
                  )}
                  <p className="font-headline font-black text-3xl text-primary">{tier.price}</p>
                  <p className="font-body font-light text-xs text-muted-foreground mt-1">{tier.priceNote[lang]}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {tier.items[lang].map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                      <Check className="text-primary mt-0.5 shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Squad assigned */}
                <div className="flex items-center gap-2 mb-6 text-[hsl(234,15%,50%)] font-body font-light text-sm italic">
                  <Users size={14} className="shrink-0" />
                  {tier.squadAssigned[lang]}
                </div>

                <Button variant={tier.popular ? "cta" : "heroGhost"} className="w-full" asChild>
                  <a href="#contact">{t.cta[lang]}</a>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
