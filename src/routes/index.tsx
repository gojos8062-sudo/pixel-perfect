import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { birthdayData } from "@/data/birthdayData";
import { WelcomeScreen } from "@/components/birthday/WelcomeScreen";
import { Navbar } from "@/components/birthday/Navbar";
import { BirthdayHero } from "@/components/birthday/BirthdayHero";
import { OurStory } from "@/components/birthday/OurStory";
import { MemoryGallery } from "@/components/birthday/MemoryGallery";
import { Timeline } from "@/components/birthday/Timeline";
import { LoveCards } from "@/components/birthday/LoveCards";
import { BirthdayWishes } from "@/components/birthday/BirthdayWishes";
import { MemoryCollage } from "@/components/birthday/MemoryCollage";
import { MusicPlayer } from "@/components/birthday/MusicPlayer";
import { RomanticQuestion } from "@/components/birthday/RomanticQuestion";
import { LoveLetter } from "@/components/birthday/LoveLetter";
import { FinalSurprise } from "@/components/birthday/FinalSurprise";
import { ScrollToTop } from "@/components/birthday/ScrollToTop";

const title = `Happy Birthday, ${birthdayData.herName} ❤️`;
const description =
  "A little interactive birthday journey — our memories, our timeline, a song, a letter and one last surprise.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <WelcomeScreen onYes={() => setStarted(true)} />;
  }

  return (
    <main className="animate-soft-in">
      <Navbar />
      <BirthdayHero />
      <OurStory />
      <MemoryGallery />
      <Timeline />
      <LoveCards />
      <BirthdayWishes />
      <MemoryCollage />
      <MusicPlayer />
      <RomanticQuestion />
      <LoveLetter />
      <FinalSurprise />
      <ScrollToTop />
    </main>
  );
}
