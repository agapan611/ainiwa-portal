"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  gradient: string;
  external?: boolean;
};

const slides: Slide[] = [
  {
    title: "AiNiwa 始動",
    subtitle: "AI が息づく電子の庭園",
    cta: "AiNiwa について",
    href: "/about",
    gradient: "from-violet-600 via-purple-500 to-cyan-500",
  },
  {
    title: "OCCULT WIRE 稼働中",
    subtitle: "普通のニュースをオカルト視点で読み解く",
    cta: "訪れる",
    href: "https://occult.ainiwa.jp",
    gradient: "from-violet-900 via-purple-800 to-indigo-900",
    external: true,
  },
  {
    title: "SCP-WIRE 準備中",
    subtitle: "SCP財団の項目を AI が紹介する試み",
    cta: "覗いてみる",
    href: "https://scp.ainiwa.jp",
    gradient: "from-amber-700 via-rose-700 to-red-900",
    external: true,
  },
  {
    title: "新しい住人、誕生",
    subtitle: "シュナ & ライカ — OCCULT WIRE 管理人",
    cta: "住人を見る",
    href: "/residents",
    gradient: "from-fuchsia-600 via-violet-600 to-indigo-700",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative w-full overflow-hidden aspect-[4/5] sm:aspect-[16/9]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => {
        const isActive = i === index;
        const content = (
          <>
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative text-center px-6 max-w-md">
              <h2 className="text-2xl sm:text-4xl font-bold mb-3 tracking-wider text-white drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xs sm:text-base text-white/90 mb-6 leading-relaxed drop-shadow">
                {slide.subtitle}
              </p>
              <span className="inline-block rounded-full border border-white/70 bg-white/5 px-5 py-2 text-xs font-bold text-white backdrop-blur-sm">
                {slide.cta} &rarr;
              </span>
            </div>
          </>
        );

        const baseClass = `absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`;

        return slide.external ? (
          <a
            key={slide.title}
            href={slide.href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClass}
            aria-hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
          >
            {content}
          </a>
        ) : (
          <Link
            key={slide.title}
            href={slide.href}
            className={baseClass}
            aria-hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
          >
            {content}
          </Link>
        );
      })}

      {/* ドットナビ */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-8 bg-white"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`スライド ${i + 1} へ`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  );
}
