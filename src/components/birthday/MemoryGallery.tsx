import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { Reveal } from "./Reveal";

const memories = birthdayData.memories;
const tilts = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "1deg"];

export function MemoryGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const current = open === null ? null : memories[open];

  const step = (dir: number) =>
    setOpen((i) => (i === null ? i : (i + dir + memories.length) % memories.length));

  return (
    <section id="memories" className="relative bg-secondary/25 px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-script text-4xl text-primary sm:text-5xl">Photo memories</h2>
          <p className="font-hand mt-3 text-xl text-muted-foreground">
            tap any picture to see it properly ❤️
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {memories.map((m, i) => (
            <Reveal key={`${m.caption}-${i}`} delay={(i % 3) * 90}>
              <button
                onClick={() => setOpen(i)}
                style={{ rotate: tilts[i % tilts.length] }}
                className="group block w-full rounded-2xl bg-card p-2 pb-3 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-lift sm:p-3"
              >
                <img
                  src={m.image}
                  alt={m.caption}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
                <p className="font-hand mt-2 line-clamp-1 text-base text-primary sm:text-lg">
                  {m.caption}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="animate-soft-in fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-card p-2 text-primary"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 rounded-full bg-card/90 p-2 text-primary sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85svh] w-full max-w-lg overflow-hidden rounded-3xl bg-card p-3 shadow-lift"
          >
            <img
              src={current.image}
              alt={current.caption}
              className="max-h-[60svh] w-full rounded-2xl object-cover"
            />
            <figcaption className="px-2 py-3 text-center">
              <p className="font-hand text-2xl text-primary">{current.caption}</p>
              <p className="mt-1 text-sm text-muted-foreground">{current.date}</p>
            </figcaption>
          </figure>

          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 rounded-full bg-card/90 p-2 text-primary sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
