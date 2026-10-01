import { ArrowRight } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { FloatingHearts } from "./FloatingHearts";

const { hero, herName } = birthdayData;

export function BirthdayHero() {
  return (
    <section
      id="home"
      className="bg-dawn relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28 text-center"
    >
      <FloatingHearts count={16} />

      <div className="animate-soft-in relative z-10 flex w-full max-w-3xl flex-col items-center">
        <p className="font-hand text-2xl text-accent">{birthdayData.birthday}</p>
        <h1 className="font-script mt-2 text-5xl leading-[1.1] text-primary sm:text-7xl">
          {hero.title},<br />
          {herName} ❤️
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{hero.subtitle}</p>

        <div className="tape mt-10 w-full max-w-md rotate-[-1.5deg] rounded-3xl bg-card p-3 shadow-lift">
          <img
            src={hero.photo}
            alt={`${herName}'s favourite picture`}
            width={1024}
            height={1280}
            className="h-auto w-full rounded-2xl object-cover"
          />
          <p className="font-hand py-3 text-xl text-primary">the birthday girl ❤️</p>
        </div>

        <button
          onClick={() =>
            document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-round mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lift transition-transform duration-200 hover:scale-105"
        >
          {hero.cta} <ArrowRight size={18} />
        </button>

        <p className="font-hand mt-10 text-xl text-muted-foreground">{hero.footnote}</p>
      </div>
    </section>
  );
}
