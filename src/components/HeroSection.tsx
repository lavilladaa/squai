import { content, type Lang } from "@/lib/content";
import { Button } from "@/components/ui/button";

const HeroSection = ({ lang }: { lang: Lang }) => {
  const t = content.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 glow-radial" />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <h1 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 animate-fade-in-up">
          {t.headline[lang]}
        </h1>

        {/* Gradient bar */}
        <div className="w-24 h-1 gradient-bar mx-auto rounded-full mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }} />

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {t.sub[lang]}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">{t.cta1[lang]}</a>
          </Button>
          <Button variant="heroGhost" size="lg" asChild>
            <a href="#services">{t.cta2[lang]}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
