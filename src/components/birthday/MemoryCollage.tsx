import { Heart, Flower2 } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { Reveal } from "./Reveal";

const rotations = ["-4deg", "3deg", "-2deg"];

export function MemoryCollage() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 px-5 py-24 sm:py-28">
      <span className="animate-sway absolute left-6 top-10 text-accent/40">
        <Flower2 size={40} strokeWidth={1.2} />
      </span>
      <span className="animate-sway absolute bottom-10 right-8 text-accent/40">
        <Heart size={36} strokeWidth={1.2} fill="currentColor" />
      </span>

      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="font-script text-4xl text-primary sm:text-5xl">Our scrapbook</h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:-space-x-6">
          {birthdayData.collage.map((c, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure
                style={{ rotate: rotations[i % rotations.length] }}
                className="tape w-[16rem] bg-card p-3 pb-4 shadow-lift transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] sm:w-[18rem]"
              >
                <img
                  src={c.image}
                  alt={c.note}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="font-hand mt-3 text-center text-xl text-primary">
                  {c.note}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
