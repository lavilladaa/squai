import { content, type Lang } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const word: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HeroSection = ({ lang }: { lang: Lang }) => {
  const t = content.hero;
  const headline = t.headline[lang];
  const words = headline.split(" ");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 glow-radial" />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-headline font-black text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight mb-4 gradient-wave-text"
        >
          {words.map((wordText, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-3">
              {wordText}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-1 gradient-bar mx-auto rounded-full mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light"
        >
          {t.sub[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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