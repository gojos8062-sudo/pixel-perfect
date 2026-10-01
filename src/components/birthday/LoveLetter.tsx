import { useEffect, useRef, useState } from "react";
import { birthdayData } from "@/data/birthdayData";
import { useReveal } from "@/hooks/use-reveal";

const fullText = birthdayData.letter
  .replaceAll("{her}", birthdayData.herName)
  .replaceAll("{me}", birthdayData.myName);

export function LoveLetter() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.25);
  const [count, setCount] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!shown) return;
    timer.current = setInterval(() => {
      setCount((c) => {
        if (c >= fullText.length) {
          if (timer.current) clearInterval(timer.current);
          return c;
        }
        return c + 2;
      });
    }, 18);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [shown]);

  const done = count >= fullText.length;

  return (
    <section id="letter" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-script text-4xl text-primary sm:text-5xl">
          A little letter for you 💌
        </h2>

        <div
          ref={ref}
          className="paper-card mt-10 min-h-[22rem] rotate-[-0.6deg] p-7 text-left sm:p-10"
        >
          <p className="font-hand whitespace-pre-line text-xl leading-relaxed text-primary sm:text-2xl">
            {fullText.slice(0, done ? fullText.length : count)}
            {!done && <span className="opacity-60">|</span>}
          </p>
        </div>

        {!done && (
          <button
            onClick={() => setCount(fullText.length)}
            className="font-round mt-6 rounded-full border border-primary/25 bg-secondary/60 px-6 py-3 text-sm font-bold text-primary transition-transform duration-200 hover:scale-105"
          >
            Show the whole letter
          </button>
        )}
      </div>
    </section>
  );
}
