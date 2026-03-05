import { content, type Lang } from "@/lib/content";
import { Brain, AlertTriangle, DollarSign } from "lucide-react";

const icons = [Brain, AlertTriangle, DollarSign];

const ProblemSection = ({ lang }: { lang: Lang }) => {
  const t = content.problems;

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-center mb-16">
          {t.title[lang]}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                <p className="text-muted-foreground font-body text-base leading-relaxed">
                  {item[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
