import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "memories", label: "Memories" },
  { id: "timeline", label: "Timeline" },
  { id: "about-you", label: "About You" },
  { id: "wishes", label: "Wishes" },
  { id: "music", label: "Music" },
  { id: "letter", label: "Letter" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "bg-background/85 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <button onClick={() => go("home")} className="flex items-center gap-2 text-primary">
          <Heart size={18} fill="currentColor" strokeWidth={1.5} />
          <span className="font-script text-xl">for you</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="font-round rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-full border border-border bg-card p-2 text-primary lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="animate-soft-in border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="font-round w-full rounded-xl px-3 py-3 text-left text-sm font-semibold text-primary transition-colors hover:bg-secondary/60"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
