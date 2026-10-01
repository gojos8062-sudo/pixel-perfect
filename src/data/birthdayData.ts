/**
 * ============================================================
 *  EDIT EVERYTHING HERE — this is the only file you need to touch.
 * ------------------------------------------------------------
 *  Photos: drop your own images into  public/assets/photos/
 *          then use "/assets/photos/your-file.jpg" below.
 *  Music : drop your song into        public/assets/music/
 *          then use "/assets/music/our-song.mp3" below.
 * ============================================================
 */

import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import songCover from "@/assets/song-cover.jpg";

export const birthdayData = {
  herName: "Her Name",
  myName: "Your Name",
  birthday: "1st October",

  welcome: {
    greeting: "Hello, beautiful ❤️",
    subtitle: "I made something special for you...",
    question: "Do you want to see your birthday surprise?",
    yesLabel: "YES, PLEASE ❤️",
    noLabel: "NO THANKS",
    noReplies: [
      "Are you sure? 🥺",
      "Really? I spent so much time making this 😭",
      "Okay okay... but I'm still asking one more time ❤️",
      "Fine... you win 😭❤️",
    ],
  },

  hero: {
    title: "Happy Birthday",
    subtitle: "Today is all about you.",
    photo: photo1,
    cta: "Start Our Story",
    footnote: "Made with love, just for you.",
  },

  story: {
    heading: "Our little story ❤️",
    photo: photo2,
    paragraphs: [
      "Some people make ordinary days feel special.",
      "You somehow made my ordinary days feel like memories worth keeping.",
      "So instead of giving you just one birthday wish, I wanted to give you a little journey through some of my favourite moments with you.",
    ],
    cta: "See Our Memories",
  },

  memories: [
    { image: photo1, date: "Spring", caption: "One of my favourite days." },
    { image: photo2, date: "A slow morning", caption: "This smile >>>" },
    { image: photo3, date: "Golden hour", caption: "Wish we could relive this." },
    { image: photo2, date: "That evening", caption: "Another memory I never want to forget." },
    { image: photo3, date: "Our little trip", caption: "You, laughing at nothing." },
    { image: photo1, date: "Just because", caption: "Flowers, but you're prettier." },
    { image: photo3, date: "Late night", caption: "We talked until the sun came up." },
    { image: photo2, date: "Sunday", caption: "Coffee tastes better with you." },
    { image: photo1, date: "Any day", caption: "Still my favourite person." },
  ],

  timeline: [
    {
      date: "The beginning",
      title: "The day we met",
      description: "I had no idea a normal day was about to change everything.",
      image: photo3,
    },
    {
      date: "A few weeks later",
      title: "Our first picture together",
      description: "Slightly blurry, completely perfect.",
      image: photo2,
    },
    {
      date: "That one night",
      title: "That unforgettable day",
      description: "I still replay it in my head sometimes.",
    },
    {
      date: "Still laughing",
      title: "Our funniest memory",
      description: "We couldn't breathe. You know exactly which one.",
    },
    {
      date: "Today",
      title: "My favourite memory with you",
      description: "Honestly? It keeps getting replaced by a newer one.",
      image: photo1,
    },
  ],

  loveNotes: [
    { title: "Your smile ❤️", message: "It's the first thing I look for and the last thing I forget." },
    { title: "The way you care", message: "You notice the small things nobody else does." },
    { title: "Your laugh", message: "Loud, sudden, completely contagious. My favourite sound." },
    { title: "How you make everything better", message: "Even bad days feel survivable when you're around." },
    { title: "Your little habits", message: "The ones you think are annoying. They're my favourite." },
    { title: "The way you look at me", message: "Like I'm someone worth sticking around for." },
  ],

  wishes: [
    { title: "Your happiness", message: "I hope you always have reasons to smile." },
    { title: "Your dreams", message: "I hope you achieve everything you've ever wished for." },
    { title: "Your heart", message: "I hope you always stay the beautiful person you are." },
    { title: "Your future", message: "I hope this year brings you everything you deserve." },
  ],

  collage: [
    { image: photo1, note: "Us ❤️" },
    { image: photo2, note: "Still one of my favourite pictures." },
    { image: photo3, note: "Never getting tired of this." },
  ],

  song: {
    title: "A Place For Us",
    artist: "The Hearts",
    /** Put your own file in public/assets/music/ and change this path. */
    audio: "/assets/music/our-song.mp3",
    cover: songCover,
  },

  question: {
    heading: "One more question...",
    prompt: "Will you be my date tonight? ❤️",
    yesLabel: "YES ❤️",
    maybeLabel: "Maybe...",
    yesResponse: "YAYYYYY ❤️",
    yesSub: "Then it's a date.",
    maybeResponse: "Take your time... I'll wait 😌❤️",
  },

  letter: `Dear {her},

I don't think I say it enough, but having you in my life means more to me than I can properly explain.

You've given me so many moments that I will always remember — the quiet ones, the silly ones, and the ones where nothing happened at all except that you were there.

Thank you for being patient with me, for laughing at my worst jokes, and for making a very ordinary life feel like something worth writing about.

Happy Birthday, my love.

I hope today reminds you just how loved and special you are.

Always yours,
{me} ❤️`,

  finale: {
    teaser: "Before you go...",
    prompt: "I have one last thing to tell you.",
    buttonLabel: "Tell me ❤️",
    message: `You are one of the most beautiful parts of my life.

Thank you for every laugh, every memory, every conversation, and every little moment.

I hope this birthday is only the beginning of another beautiful year for you.

I love you ❤️`,
    photo: photo3,
    signoff: "Made especially for you ❤️",
  },
};

export type BirthdayData = typeof birthdayData;
