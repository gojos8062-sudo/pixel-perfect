import { Heart } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { Reveal } from "./Reveal";

const items = birthdayData.timeline;

export function Timeline() {
  return (
    <section id="timeline" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="font-script text-4xl leading-tight text-primary sm:text-5xl">
            Little moments that became big memories ❤️
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-10 sm:pl-0">
          <span className="absolute left-[14px] top-0 h-full w-px bg-border sm:left-1/2" />

          {items.map((it, i) => (
            <Reveal key={it.title} className="relative mb-12 last:mb-0">
              <span className="absolute -left-10 top-2 text-accent sm:left-1/2 sm:-translate-x-1/2">
                <Heart size={18} fill="currentColor" strokeWidth={1.5} />
              </span>

              <div
                className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"}`}
              >
                <p className="font-hand text-xl text-accent">{it.date}</p>
                <h3 className="mt-1 text-2xl text-primary">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {it.description}
                </p>
                {it.image && (
                  <img
                    src={it.image}
                    alt={it.title}
                    loading="lazy"
                    className="mt-4 aspect-[3/2] w-full rounded-2xl object-cover shadow-soft"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
