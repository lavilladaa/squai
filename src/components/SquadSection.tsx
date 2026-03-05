import { content, type Lang } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";

const SquadSection = ({ lang }: { lang: Lang }) => {
  const t = content.squad;

  return (
    <section id="squad" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-center mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-16">
            {t.sub[lang]}
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.members.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-card border-l-4 border-l-primary border border-border rounded-xl p-6 h-full flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
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
                  {member.tiers.map((tier) => (
                    <span
                      key={tier}
                      className="text-xs font-body font-medium px-3 py-1 rounded-full border border-primary/30 text-primary bg-[hsl(234,30%,16%)]"
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
