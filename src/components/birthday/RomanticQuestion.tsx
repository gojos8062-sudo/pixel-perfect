import { useState } from "react";
import { Heart } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { Reveal } from "./Reveal";
import { Confetti, FloatingHearts } from "./FloatingHearts";

const q = birthdayData.question;

export function RomanticQuestion() {
  const [state, setState] = useState<"ask" | "maybe" | "yes">("ask");

  return (
    <section className="relative overflow-hidden bg-secondary/25 px-5 py-24 text-center sm:py-28">
      {state === "yes" && (
        <>
          <Confetti count={46} />
          <FloatingHearts count={18} intense />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-xl">
        <Reveal>
          <p className="font-hand text-2xl text-accent">{q.heading}</p>
          <h2 className="font-script mt-3 text-4xl leading-tight text-primary sm:text-5xl">
            {q.prompt}
          </h2>
        </Reveal>

        {state === "yes" ? (
          <div className="animate-soft-in mt-10 flex flex-col items-center">
            <span className="animate-pulse-heart text-accent">
              <Heart size={56} fill="currentColor" strokeWidth={1.25} />
            </span>
            <p className="font-script mt-5 text-4xl text-primary">{q.yesResponse}</p>
            <p className="font-round mt-2 text-lg text-muted-foreground">{q.yesSub}</p>
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-4">
            {state === "maybe" && (
              <p className="font-hand animate-soft-in text-2xl text-accent">{q.maybeResponse}</p>
            )}
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => setState("yes")}
                className="font-round w-full max-w-xs rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lift transition-transform duration-200 hover:scale-105 sm:w-auto"
              >
                {q.yesLabel}
              </button>
              {state === "ask" && (
                <button
                  onClick={() => setState("maybe")}
                  className="font-round w-full max-w-xs rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-muted-foreground transition-transform duration-200 hover:scale-95 sm:w-auto"
                >
                  {q.maybeLabel}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
