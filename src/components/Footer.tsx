import SquaiLogo from "./SquaiLogo";
import { content, type Lang } from "@/lib/content";

interface FooterProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Footer = ({ lang, setLang }: FooterProps) => {
  const t = content.footer;

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <SquaiLogo height={28} />
            <p className="text-muted-foreground font-body text-sm mt-3 max-w-xs">
              {t.tagline[lang]}
            </p>
          </div>
          <div className="flex items-center gap-6">
            {t.links[lang].map((label, i) => (
              <a
                key={i}
                href={`#${t.sections[i]}`}
                className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="text-xs font-body font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-muted-foreground/60 font-body text-xs">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
