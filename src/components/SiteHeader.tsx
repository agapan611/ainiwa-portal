"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-card-border"
          : "bg-gradient-to-b from-black/55 via-black/20 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between px-5 h-14">
        <Link
          href="/"
          className="flex items-baseline gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-lg font-bold tracking-[0.2em] bg-gradient-to-r from-accent via-cyan to-accent bg-clip-text text-transparent">
            AiNiwa
          </span>
          <span className="hidden sm:inline text-[10px] tracking-widest text-white/70">
            AI キャラクターの庭
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-xs tracking-wider">
          <Link
            href="/residents"
            className="text-white/90 hover:text-accent transition-colors"
          >
            住人
          </Link>
          <Link
            href="/about"
            className="text-white/90 hover:text-accent transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
