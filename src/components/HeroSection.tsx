import { content, type Lang } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const orbs = [
  {
    size: 420,
    x: "-10%",
    y: "-20%",
    color: "hsl(233 100% 74% / 0.12)",
    duration: 14,
    delay: 0,
  },
  {
    size: 320,
    x: "70%",
    y: "10%",
    color: "hsl(43 87% 63% / 0.09)",
    duration: 18,
    delay: 2,
  },
  {
    size: 260,
    x: "20%",
    y: "60%",
    color: "hsl(175 58% 55% / 0.08)",
    duration: 16,
    delay: 4,
  },
  {
    size: 200,
    x: "80%",
    y: "65%",
    color: "hsl(233 100% 74% / 0.07)",
    duration: 20,
    delay: 1,
  },
];

const HeroSection = ({ lang }: { lang: Lang }) => {
  const t = content.hero;
  const headline = t.headline[lang];
  const highlight = t.headlineHighlight[lang];
  const beforeHighlight = headline.replace(highlight, "");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 glow-radial" />

      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            y: ["0%", "4%", "-4%", "0%"],
            x: ["0%", "3%", "-2%", "0%"],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-headline font-black text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight mb-4"
        >
          {beforeHighlight}
          <span className="text-primary">{highlight}</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-1 gradient-bar mx-auto rounded-full mb-8 origin-left"
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