import { ArrowRight } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { Reveal } from "./Reveal";

const { story } = birthdayData;

export function OurStory() {
  return (
    <section id="story" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="rotate-[1.5deg] rounded-3xl bg-card p-3 shadow-lift">
            <img
              src={story.photo}
              alt="A moment from our story"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-script text-4xl text-primary sm:text-5xl">{story.heading}</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <button
            onClick={() =>
              document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-round mt-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-secondary/60 px-6 py-3 text-sm font-bold text-primary transition-transform duration-200 hover:scale-105"
          >
            {story.cta} <ArrowRight size={16} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
