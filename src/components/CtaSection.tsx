import { content, type Lang } from "@/lib/content";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const CtaSection = ({ lang }: { lang: Lang }) => {
  const t = content.ctaSection;

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 gradient-cta-overlay" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-headline font-black text-3xl md:text-5xl mb-6">
            {t.headline[lang]}
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-10">
            {t.sub[lang]}
          </p>
          <Button variant="cta" size="lg">
            {t.cta[lang]}
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CtaSection;
