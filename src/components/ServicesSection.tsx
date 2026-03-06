import { content, type Lang } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Check, Users, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const borderColors: Record<string, string> = {
  primary: "border-t-[hsl(233,100%,74%)]",
  accent: "border-t-[hsl(43,87%,63%)] border-[hsl(43,87%,63%,0.3)]",
  secondary: "border-t-[hsl(175,58%,55%)]",
};

const hoverGlows: Record<string, string> = {
  primary: "hover:shadow-[0_0_30px_-5px_hsl(233,100%,74%,0.15)]",
  accent: "hover:shadow-[0_0_30px_-5px_hsl(43,87%,63%,0.2)]",
  secondary: "hover:shadow-[0_0_30px_-5px_hsl(175,58%,55%,0.15)]",
};

const ServicesSection = ({ lang }: { lang: Lang }) => {
  const t = content.services;

  return (
    <section id="services" className="py-24 bg-deep relative overflow-hidden">
      {/* Floating glow orb */}
      <div className="glow-orb-primary w-[500px] h-[500px] -top-40 -right-40" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="font-headline font-black text-3xl md:text-5xl text-center mb-16">
            {t.title[lang]}
          </h2>
        </AnimatedSection>
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
          {t.tiers.map((tier, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div
                className={`relative bg-[#12152A] rounded-xl border border-[rgba(124,140,255,0.15)] hover:border-[rgba(124,140,255,0.4)] border-t-4 ${borderColors[tier.borderColor]} ${hoverGlows[tier.borderColor]} transition-all duration-200 hover:-translate-y-1 h-full flex flex-col ${
                  tier.popular ? "lg:scale-[1.03]" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 right-6 bg-accent text-accent-foreground text-xs font-body font-bold px-4 py-1 rounded-full">
                    {lang === "en" ? "Most Popular" : "Más Popular"}
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  <p className="text-primary font-body font-semibold text-sm uppercase tracking-wider mb-1">
                    {tier.label[lang]}
                  </p>
                  <h3 className="font-headline font-black text-2xl mb-2">{tier.name[lang]}</h3>
                  <p className="text-accent font-body font-light text-sm italic mb-4">
                    {tier.partnership[lang]}
                  </p>
                  {/* Removed intro paragraph below yellow sentence */}

                  {/* What you get */}
                  <p className="font-body font-semibold text-xs uppercase tracking-wider text-foreground mb-3">
                    {lang === "en" ? "What you get:" : "Lo que obtienes:"}
                  </p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.items[lang].map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                        <Check className="text-primary mt-0.5 shrink-0" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground font-body text-sm">
                    <Clock size={14} className="text-primary shrink-0" />
                    {tier.duration[lang]}
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    {tier.pricePrefix[lang] && (
                      <p className="font-body font-semibold text-sm text-accent">{tier.pricePrefix[lang]}</p>
                    )}
                    <p className="font-headline font-black text-3xl text-primary">{tier.price}</p>
                    <p className="font-body font-light text-xs text-muted-foreground mt-1">{tier.priceNote[lang]}</p>
                  </div>

                  {/* Squad assigned */}
                  <div className="flex items-center gap-2 mb-6 text-[#666E9A] font-body font-light text-sm italic">
                    <Users size={14} className="shrink-0" />
                    {tier.squadAssigned[lang]}
                  </div>

                  <Button variant={tier.popular ? "cta" : "heroGhost"} className="w-full" asChild>
                    <a
                      href="#contact"
                      className="w-full font-body font-bold text-base bg-accent text-[#12152A] rounded-full py-3 px-6 transition-all duration-200 shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      {tier.cta[lang]}
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
