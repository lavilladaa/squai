import { content, type Lang } from "@/lib/content";

const HowItWorksSection = ({ lang }: { lang: Lang }) => {
  const t = content.howItWorks;
  const steps = t.steps[lang];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-center mb-16">
          {t.title[lang]}
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Desktop horizontal */}
          <div className="hidden md:grid grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-headline font-black text-primary text-lg mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {i + 1}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-snug">{step}</p>
                {i < steps.length - 1 && (
                  <div className="absolute" />
                )}
              </div>
            ))}
          </div>
          {/* Connecting line desktop */}
          <div className="hidden md:block relative -mt-[4.5rem] mb-8 mx-auto" style={{ width: "calc(100% - 5rem)" }}>
            <div className="h-0.5 bg-border w-full" />
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-headline font-black text-primary text-sm shrink-0">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <p className="text-muted-foreground font-body">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
