import { content, type Lang } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = ({ lang }: { lang: Lang }) => {
  const t = content.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 glow-radial" />
      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-headline font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
        >
          {t.headline[lang]}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-24 h-1 gradient-bar mx-auto rounded-full mb-8 origin-left"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light"
        >
          {t.sub[lang]}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">{t.cta1[lang]}</a>
          </Button>
          <Button variant="heroGhost" size="lg" asChild>
            <a href="#services">{t.cta2[lang]}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
