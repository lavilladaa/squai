import { content, type Lang } from "@/lib/content";
import { Users, Globe, Zap, Rocket } from "lucide-react";

const icons = [Users, Globe, Zap, Rocket];

const WhySquaiSection = ({ lang }: { lang: Lang }) => {
  const t = content.whySquai;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-center mb-16">
          {t.title[lang]}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-headline font-extrabold text-lg mb-2">{item.title[lang]}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySquaiSection;
