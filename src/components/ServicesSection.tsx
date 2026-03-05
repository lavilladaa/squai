import { content, type Lang } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ServicesSection = ({ lang }: { lang: Lang }) => {
  const t = content.services;

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-center mb-16">
          {t.title[lang]}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative bg-card rounded-xl p-8 border transition-all hover:-translate-y-1 ${
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
              <p className="text-muted-foreground font-body text-sm mb-6">{tier.duration[lang]}</p>
              <ul className="space-y-3 mb-8">
                {tier.items[lang].map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                    <Check className="text-primary mt-0.5 shrink-0" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.popular ? "cta" : "heroGhost"}
                className="w-full"
                asChild
              >
                <a href="#contact">{t.cta[lang]}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
