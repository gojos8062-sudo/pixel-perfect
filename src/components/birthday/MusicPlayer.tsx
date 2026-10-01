import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { Reveal } from "./Reveal";
import { FloatingHearts } from "./FloatingHearts";

const { song } = birthdayData;

function fmt(s: number) {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setTime(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    const onError = () => {
      setMissing(true);
      setPlaying(false);
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    a.addEventListener("error", onError);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
      a.removeEventListener("error", onError);
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) {
        a.pause();
        setPlaying(false);
      } else {
        await a.play();
        setPlaying(true);
      }
    } catch {
      setMissing(true);
    }
  };

  const progress = duration ? (time / duration) * 100 : 0;

  return (
    <section id="music" className="relative overflow-hidden px-5 py-24 sm:py-28">
      {playing && <FloatingHearts count={14} intense />}

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-script text-4xl text-primary sm:text-5xl">
            This song reminds me of you 🎵
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="paper-card mx-auto mt-10 flex max-w-md flex-col items-center p-6 sm:p-8">
            <img
              src={song.cover}
              alt={`${song.title} cover`}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-44 rounded-2xl object-cover shadow-soft sm:w-56"
            />
            <h3 className="mt-6 text-2xl text-primary">{song.title}</h3>
            <p className="text-sm text-muted-foreground">{song.artist}</p>

            <button
              onClick={toggle}
              aria-label={playing ? "Pause song" : "Play song"}
              className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform duration-200 hover:scale-110"
            >
              {playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
            </button>

            <div className="mt-6 w-full">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>{fmt(time)}</span>
                <span>{fmt(duration)}</span>
              </div>
            </div>

            {missing && (
              <p className="font-hand mt-4 text-base text-accent">
                Add your song to public/assets/music/ and update birthdayData.ts ❤️
              </p>
            )}

            <audio ref={audioRef} src={song.audio} preload="none" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
