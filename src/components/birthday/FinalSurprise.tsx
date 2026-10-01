import { useState } from "react";
import { birthdayData } from "@/data/birthdayData";
import { Confetti, FloatingHearts } from "./FloatingHearts";

const { finale, herName, myName } = birthdayData;

export function FinalSurprise() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="bg-dusk relative overflow-hidden px-5 py-28 text-center">
      <FloatingHearts count={16} />
      {revealed && <Confetti count={50} />}

      <div className="relative z-10 mx-auto max-w-2xl">
        {!revealed ? (
          <div className="animate-soft-in">
            <p className="font-hand text-2xl text-secondary">{finale.teaser}</p>
            <h2 className="font-script mt-3 text-4xl text-primary-foreground sm:text-5xl">
              {finale.prompt}
            </h2>
            <button
              onClick={() => setRevealed(true)}
              className="font-round mt-9 rounded-full bg-secondary px-8 py-4 text-base font-bold text-secondary-foreground shadow-lift transition-transform duration-200 hover:scale-105"
            >
              {finale.buttonLabel}
            </button>
          </div>
        ) : (
          <div className="animate-soft-in">
            <h2 className="font-script text-4xl leading-tight text-primary-foreground sm:text-6xl">
              Happy Birthday, {herName} ❤️
            </h2>
            <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-secondary">
              {finale.message}
            </p>

            <div className="tape mx-auto mt-10 w-full max-w-sm rotate-[1deg] rounded-3xl bg-card p-3 shadow-lift">
              <img
                src={finale.photo}
                alt="Us"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>

            <p className="font-hand mt-10 text-2xl text-secondary">{finale.signoff}</p>
            <p className="font-script mt-1 text-3xl text-primary-foreground">{myName}</p>
          </div>
        )}
      </div>
    </section>
  );
}
