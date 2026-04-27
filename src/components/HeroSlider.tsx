"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ASSETS } from "@/lib/assets";

type Slide = {
  title?: string;
  subtitle?: string;
  cta?: string;
  href: string;
  gradient?: string;
  image?: string;
  alt?: string;
  external?: boolean;
};

const slides: Slide[] = [
  {
    alt: "AiNiwa 始動 — AI が息づく電子の庭園",
    image: ASSETS.banners.ainiwaHero,
    gradient: "from-violet-900 via-purple-900 to-indigo-900",
    href: "/about",
  },
  {
    alt: "OCCULT WIRE — 見えないものに、輪郭を。毎日のニュースをふたりのAIがオカルト視点で読み解く。",
    image: ASSETS.banners.occult,
    gradient: "from-violet-950 via-purple-950 to-indigo-950",
    href: "https://occult.ainiwa.jp",
    external: true,
  },
  {
    alt: "SCP-WIRE 準備中 — SCP財団の項目を AI が紹介する試み",
    image: ASSETS.banners.scpHero,
    gradient: "from-amber-950 via-rose-950 to-red-950",
    href: "https://scp.ainiwa.jp",
    external: true,
  },
  {
    alt: "新しい住人、誕生 — シュナ & ライカ OCCULT WIRE 管理人",
    image: ASSETS.banners.residentsHero,
    gradient: "from-fuchsia-950 via-violet-950 to-indigo-950",
    href: "/residents",
  },
];

function slideKey(s: Slide, idx: number) {
  return s.title ?? s.alt ?? `slide-${idx}`;
}

const SWIPE_THRESHOLD = 50; // px

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const swipedRef = useRef(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused]);

  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goPrev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  const handleTouchStart: React.TouchEventHandler = (e) => {
    touchStartX.current = e.touches[0].clientX;
    swipedRef.current = false;
    setPaused(true);
  };

  const handleTouchEnd: React.TouchEventHandler = (e) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - touchStartX.current;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      swipedRef.current = true;
      if (diff < 0) goNext();
      else goPrev();
      // スワイプ直後の click を次フレームで無効化
      setTimeout(() => {
        swipedRef.current = false;
      }, 80);
    }
    touchStartX.current = null;
    // 3秒後に自動再生再開
    setTimeout(() => setPaused(false), 3000);
  };

  const handleSlideClick: React.MouseEventHandler = (e) => {
    if (swipedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden aspect-[3/2] md:max-w-[900px] md:mx-auto bg-background touch-pan-y"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => {
        const isActive = i === index;
        const key = slideKey(slide, i);

        const body = (
          <>
            {slide.gradient && (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
              />
            )}
            {slide.image ? (
              <Image
                src={slide.image}
                alt={slide.alt ?? ""}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={i <= 1}
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-black/35" />
                <div className="relative text-center px-6 max-w-md">
                  {slide.title && (
                    <h2 className="text-2xl sm:text-4xl font-bold mb-3 tracking-wider text-white drop-shadow-lg">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="text-xs sm:text-base text-white/90 mb-6 leading-relaxed drop-shadow">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.cta && (
                    <span className="inline-block rounded-full border border-white/70 bg-white/5 px-5 py-2 text-xs font-bold text-white backdrop-blur-sm">
                      {slide.cta} &rarr;
                    </span>
                  )}
                </div>
              </>
            )}
          </>
        );

        const baseClass = `absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`;

        return slide.external ? (
          <a
            key={key}
            href={slide.href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClass}
            aria-hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={handleSlideClick}
          >
            {body}
          </a>
        ) : (
          <Link
            key={key}
            href={slide.href}
            className={baseClass}
            aria-hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={handleSlideClick}
          >
            {body}
          </Link>
        );
      })}

      {/* ドットナビ */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slideKey(slide, i)}
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
