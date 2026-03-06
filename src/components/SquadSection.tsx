import { content, type Lang } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";

const borderColorMap: Record<string, string> = {
  primary: "border-l-[hsl(233,100%,74%)]",
  accent: "border-l-[hsl(43,87%,63%)]",
  secondary: "border-l-[hsl(175,58%,55%)]",
};

const pillColorMap: Record<string, string> = {
  primary: "border-[rgba(124,140,255,0.3)] text-primary",
  accent: "border-[rgba(124,140,255,0.3)] text-primary",
  secondary: "border-[hsl(175,58%,55%,0.3)] text-secondary",
};

const hoverGlowMap: Record<string, string> = {
  primary: "hover:shadow-[0_0_25px_-5px_hsl(233,100%,74%,0.15)]",
  accent: "hover:shadow-[0_0_25px_-5px_hsl(43,87%,63%,0.15)]",
  secondary: "hover:shadow-[0_0_25px_-5px_hsl(175,58%,55%,0.15)]",
};

const SquadSection = ({ lang }: { lang: Lang }) => {
  const t = content.squad;

  return (
    <section id="squad" className="py-24 bg-deep relative overflow-hidden">
      {/* Floating glow orb */}
      <div className="glow-orb-gold w-[400px] h-[400px] -top-32 -right-32" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <p className="eyebrow text-center">{t.eyebrow[lang]}</p>
          <h2 className="font-headline font-black text-3xl md:text-5xl text-center mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-16">
            {t.sub[lang]}
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.members.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div
                className={`bg-[#12152A] border-l-4 ${borderColorMap[member.borderColor]} border border-[rgba(124,140,255,0.15)] hover:border-[rgba(124,140,255,0.4)] rounded-xl p-6 h-full flex flex-col transition-all duration-200 hover:-translate-y-1 ${hoverGlowMap[member.borderColor]}`}
              >
                <h3 className="font-headline font-extrabold text-lg text-foreground mb-1">
                  {member.role[lang]}
                </h3>
                <p className="font-body font-bold text-xs uppercase tracking-wider text-accent mb-3">
                  {member.specialty[lang]}
                </p>
                <p className="font-body font-normal text-sm text-muted-foreground mb-5 flex-1">
                  {member.desc[lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.tiers[lang].map((tier) => (
                    <span
                      key={tier}
                      className={`text-xs font-body font-medium px-3 py-1 rounded-full border bg-[#1A1E38] ${pillColorMap[member.borderColor]}`}
                    >
                      {tier}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SquadSection;
