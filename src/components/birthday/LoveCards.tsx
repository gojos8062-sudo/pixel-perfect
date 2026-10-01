import { useState } from "react";
import { Heart, Smile, Music2, Sun, Sparkles, Eye } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const icons = [Smile, Heart, Music2, Sun, Sparkles, Eye] as const;

export function LoveCards() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="about-you" className="relative bg-secondary/25 px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="font-script text-4xl text-primary sm:text-5xl">
            Things I love about you
          </h2>
          <p className="font-hand mt-3 text-xl text-muted-foreground">
            tap a card to read the rest
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {birthdayData.loveNotes.map((note, i) => {
            const Icon = icons[i % icons.length];
            const isOpen = open === i;
            return (
              <Reveal key={note.title} delay={(i % 3) * 90}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={cn(
                    "paper-card h-full w-full p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
                    isOpen && "ring-1 ring-accent/40",
                  )}
                >
                  <span className="inline-flex rounded-full bg-secondary/70 p-3 text-primary">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 text-xl text-primary">{note.title}</h3>
                  <div
                    className={cn(
                      "grid transition-all duration-500",
                      isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                      {note.message}
                    </p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
