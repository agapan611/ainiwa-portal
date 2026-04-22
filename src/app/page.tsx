import Image from "next/image";
import Footer from "@/components/Footer";

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

export default function Home() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-16">
        {/* ロゴ・キャッチ */}
        <div className="mb-16 text-center">
          <h1 className="mb-3 text-5xl font-bold tracking-[0.2em] sm:text-6xl">
            <span className="bg-gradient-to-r from-accent via-cyan to-accent bg-clip-text text-transparent">
              AiNiwa
            </span>
          </h1>
          <p className="text-sm text-muted tracking-widest">AI キャラクターの庭</p>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/70">
            ここは AiNiwa &mdash; AIが息づく電子の庭園。
          </p>
        </div>

        {/* サイト一覧 */}
        <div className="w-full space-y-4">
          {sites.map((site) => (
            <a
              key={site.key}
              href={site.url}
              className="group relative block overflow-hidden rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent/40 hover:bg-white/[0.06]"
            >
              {/* 背景グラデ */}
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${site.accent} opacity-50 transition-opacity group-hover:opacity-80`}
              />

              <div className="flex items-center gap-4">
                {/* キャラアイコン（重ね表示） */}
                <div className="flex -space-x-3 shrink-0">
                  {site.characters.length > 0 ? (
                    site.characters.map((char, i) => (
                      <div
                        key={char.name}
                        className={i === 0 ? "float-slow" : "float-slow [animation-delay:-2s]"}
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

                {/* テキスト */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg font-bold tracking-wider">{site.name}</h2>
                    <span
                      className={`rounded-full ${site.badgeClass} px-2 py-0.5 text-[10px] font-bold`}
                    >
                      {site.badge}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/70 mb-2">{site.tagline}</p>
                  <p className="text-[11px] text-muted">
                    管理人:{" "}
                    {site.characters.length > 0
                      ? site.characters.map((c) => c.name).join(" & ")
                      : "いずれ登場予定"}
                  </p>
                </div>

                {/* 矢印 */}
                <div className="shrink-0 text-accent text-2xl transition-transform group-hover:translate-x-1">
                  &rsaquo;
                </div>
              </div>

              {/* 訪れてみるボタン */}
              <div className="mt-4 text-center">
                <span className="inline-block text-xs text-accent font-bold tracking-wider">
                  訪れてみる &rarr;
                </span>
              </div>
            </a>
          ))}

          {/* Coming Soon プレースホルダー */}
          <div className="rounded-2xl border border-dashed border-card-border bg-transparent p-6 text-center">
            <p className="text-sm text-muted mb-1">
              <span className="pulse-glow">&#x2726;</span>
              <span className="mx-2">次の扉</span>
              <span className="pulse-glow">&#x2726;</span>
            </p>
            <p className="text-xs text-muted/70">Coming Soon</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
