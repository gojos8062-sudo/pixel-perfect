import { useMemo } from "react";
import { Heart, Flower2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  count?: number;
  className?: string;
  /** when true the particles are denser and quicker (used after "YES") */
  intense?: boolean;
};

export function FloatingHearts({ count = 14, className, intense = false }: Props) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 97) % 100,
        size: 10 + ((i * 7) % 16),
        duration: (intense ? 7 : 13) + ((i * 3) % 9),
        delay: -((i * 5) % 18),
        kind: i % 3,
        opacity: 0.25 + ((i % 4) * 0.12),
      })),
    [count, intense],
  );

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {items.map((it) => {
        const Icon = it.kind === 0 ? Heart : it.kind === 1 ? Flower2 : Sparkles;
        return (
          <span
            key={it.id}
            className="animate-float-up absolute bottom-0 text-accent"
            style={{
              left: `${it.left}%`,
              animationDuration: `${it.duration}s`,
              animationDelay: `${it.delay}s`,
              opacity: it.opacity,
            }}
          >
            <Icon size={it.size} strokeWidth={1.5} fill="currentColor" />
          </span>
        );
      })}
    </div>
  );
}

export function Confetti({ count = 40 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        delay: (i % 10) * 0.18,
        duration: 3 + ((i * 3) % 5) * 0.6,
        tone: i % 3,
        size: 6 + (i % 4) * 3,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className={cn(
            "animate-confetti absolute top-0 rounded-[2px]",
            p.tone === 0 ? "bg-accent" : p.tone === 1 ? "bg-secondary" : "bg-primary",
          )}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.6,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
