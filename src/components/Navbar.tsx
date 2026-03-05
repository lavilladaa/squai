import { useState } from "react";
import SquaiLogo from "./SquaiLogo";
import { content, type Lang } from "@/lib/content";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const links = content.nav.links[lang];
  const sections = content.nav.sections;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <SquaiLogo height={32} />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((label, i) => (
            <a
              key={i}
              href={`#${sections[i]}`}
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-body font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
          >
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
            <span className="text-border">|</span>
            <span className={lang === "es" ? "text-primary" : ""}>ES</span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {links.map((label, i) => (
            <a
              key={i}
              href={`#${sections[i]}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
