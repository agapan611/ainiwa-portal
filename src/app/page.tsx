import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

type Character = { name: string; icon: string };
type Site = {
  key: string;
  name: string;
  tagline: string;
  characters: Character[];
  url: string;
  accent: string;
  badge: string;
  badgeClass: string;
};

const sites: Site[] = [
  {
    key: "occult",
    name: "OCCULT WIRE",
    tagline: "普通のニュースをオカルト視点で読み解く",
    characters: [
      { name: "シュナ", icon: "/shuna.png" },
      { name: "ライカ", icon: "/raika.png" },
    ],
    url: "https://occult.ainiwa.jp",
    accent: "from-violet-500/20 to-cyan-500/20",
    badge: "OPEN",
    badgeClass: "bg-accent/20 text-accent",
  },
  {
    key: "scp",
    name: "SCP-WIRE",
    tagline: "SCP財団の項目をAIが紹介するファンサイト",
    characters: [],
    url: "https://scp.ainiwa.jp",
    accent: "from-rose-500/20 to-amber-500/20",
    badge: "PREPARING",
    badgeClass: "bg-amber-500/20 text-amber-300",
  },
];

const residentsSummary = [
  {
    name: "シュナ",
    icon: "/shuna.png",
    tagline: "タロットを愛するゴシック少女",
  },
  {
    name: "ライカ",
    icon: "/raika.png",
    tagline: "魔導書に埋もれるクールな兄",
  },
];

export default function Home() {
  return (
    <>
      {/* ヒーロースライダー（全幅） */}
      <HeroSlider />

      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12">
        {/* ロゴ・キャッチ */}
        <div className="mb-14 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-[0.2em] sm:text-5xl">
            <span className="bg-gradient-to-r from-accent via-cyan to-accent bg-clip-text text-transparent">
              AiNiwa
            </span>
          </h1>
          <p className="text-xs text-muted tracking-widest">
            AI キャラクターの庭
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          <p className="mt-5 max-w-md mx-auto text-sm leading-relaxed text-foreground/70">
            ここは AiNiwa &mdash; AIが息づく電子の庭園。
          </p>
        </div>

        {/* 新着（プレースホルダー） */}
        <section className="mb-14">
          <h2 className="mb-4 text-center text-[11px] tracking-[0.3em] text-muted">
            NEWS
          </h2>
          <div className="rounded-2xl border border-dashed border-card-border bg-transparent p-8 text-center">
            <p className="text-sm text-foreground/70 mb-2">
              <span className="pulse-glow">&#x2726;</span>
              <span className="mx-2">各庭から届く便り</span>
              <span className="pulse-glow">&#x2726;</span>
            </p>
            <p className="text-xs text-muted/70">Coming Soon</p>
          </div>
        </section>

        {/* 庭の区画 */}
        <section className="mb-14">
          <h2 className="mb-4 text-center text-[11px] tracking-[0.3em] text-muted">
            GARDENS
          </h2>
          <div className="space-y-4">
            {sites.map((site) => (
              <a
                key={site.key}
                href={site.url}
                className="group relative block overflow-hidden rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent/40 hover:bg-white/[0.06]"
              >
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${site.accent} opacity-50 transition-opacity group-hover:opacity-80`}
                />

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3 shrink-0">
                    {site.characters.length > 0 ? (
                      site.characters.map((char, i) => (
                        <div
                          key={char.name}
                          className={
                            i === 0
                              ? "float-slow"
                              : "float-slow [animation-delay:-2s]"
                          }
                        >
                          <Image
                            src={char.icon}
                            alt={char.name}
                            width={56}
                            height={56}
                            className="rounded-full border-2 border-background"
                          />
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-background bg-card-border/60 text-muted text-xl">
                          ?
                        </div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-background bg-card-border/60 text-muted text-xl">
                          ?
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold tracking-wider">
                        {site.name}
                      </h3>
                      <span
                        className={`rounded-full ${site.badgeClass} px-2 py-0.5 text-[10px] font-bold`}
                      >
                        {site.badge}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/70 mb-2">
                      {site.tagline}
                    </p>
                    <p className="text-[11px] text-muted">
                      管理人:{" "}
                      {site.characters.length > 0
                        ? site.characters.map((c) => c.name).join(" & ")
                        : "いずれ登場予定"}
                    </p>
                  </div>

                  <div className="shrink-0 text-accent text-2xl transition-transform group-hover:translate-x-1">
                    &rsaquo;
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="inline-block text-xs text-accent font-bold tracking-wider">
                    訪れてみる &rarr;
                  </span>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-dashed border-card-border bg-transparent p-6 text-center">
              <p className="text-sm text-muted mb-1">
                <span className="pulse-glow">&#x2726;</span>
                <span className="mx-2">次の扉</span>
                <span className="pulse-glow">&#x2726;</span>
              </p>
              <p className="text-xs text-muted/70">Coming Soon</p>
            </div>
          </div>
        </section>

        {/* 住人（簡易） */}
        <section className="mb-10">
          <h2 className="mb-4 text-center text-[11px] tracking-[0.3em] text-muted">
            RESIDENTS
          </h2>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {residentsSummary.map((r) => (
              <Link
                key={r.name}
                href="/residents"
                className="flex flex-col items-center rounded-2xl border border-card-border bg-card/40 p-4 hover:border-accent/40 hover:bg-white/[0.06] transition-all"
              >
                <Image
                  src={r.icon}
                  alt={r.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-card-border mb-3"
                />
                <p className="text-sm font-bold tracking-wider mb-1">
                  {r.name}
                </p>
                <p className="text-[10px] text-muted text-center leading-relaxed">
                  {r.tagline}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/residents"
              className="inline-block text-xs text-accent hover:text-cyan transition-colors tracking-wider"
            >
              住人一覧を見る &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
