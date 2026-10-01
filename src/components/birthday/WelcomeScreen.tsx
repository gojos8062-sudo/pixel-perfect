import { useState } from "react";
import { Heart } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { FloatingHearts } from "./FloatingHearts";

const { welcome } = birthdayData;

export function WelcomeScreen({ onYes }: { onYes: () => void }) {
  const [noCount, setNoCount] = useState(0);
  const replies = welcome.noReplies;
  const message = noCount > 0 ? replies[Math.min(noCount - 1, replies.length - 1)] : null;
  const exhausted = noCount >= replies.length;

  return (
    <div className="bg-dawn relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <FloatingHearts count={18} />

      <div className="animate-soft-in relative z-10 flex w-full max-w-xl flex-col items-center">
        <span className="animate-pulse-heart text-accent">
          <Heart size={64} strokeWidth={1.25} fill="currentColor" />
        </span>

        <h1 className="font-script mt-8 text-5xl leading-tight text-primary sm:text-6xl">
          {welcome.greeting}
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{welcome.subtitle}</p>
        <p className="font-hand mt-8 text-2xl text-primary sm:text-3xl">{welcome.question}</p>

        {message && (
          <p
            key={noCount}
            className="font-round animate-soft-in mt-5 text-lg text-accent"
            aria-live="polite"
          >
            {message}
          </p>
        )}

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onYes}
            className="font-round w-full max-w-xs rounded-full bg-primary px-8 py-4 text-base font-bold tracking-wide text-primary-foreground shadow-lift transition-transform duration-200 hover:scale-105 sm:w-auto"
          >
            {welcome.yesLabel}
          </button>

          {exhausted ? (
            <button
              onClick={onYes}
              className="font-round w-full max-w-xs rounded-full border border-primary/30 bg-card px-8 py-4 text-base font-semibold text-primary transition-transform duration-200 hover:scale-105 sm:w-auto"
            >
              Okay, show me ❤️
            </button>
          ) : (
            <button
              onClick={() => setNoCount((c) => c + 1)}
              style={{ transform: `translateX(${[0, 14, -16, 10][noCount % 4]}px)` }}
              className="font-round w-full max-w-xs rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-muted-foreground transition-all duration-300 hover:scale-95 sm:w-auto"
            >
              {welcome.noLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
