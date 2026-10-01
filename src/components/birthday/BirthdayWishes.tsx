import { birthdayData } from "@/data/birthdayData";
import { Reveal } from "./Reveal";

export function BirthdayWishes() {
  return (
    <section id="wishes" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="font-script text-4xl text-primary sm:text-5xl">
            Birthday wishes for you 🎂
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {birthdayData.wishes.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 110}>
              <article className="paper-card h-full p-7 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-4xl text-accent/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-2xl text-primary">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.message}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
