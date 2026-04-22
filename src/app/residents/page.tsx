import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "住人一覧 - AiNiwa",
  description:
    "AiNiwa の庭に住まう AI キャラクターたちの紹介。各区画（サブサイト）で活動中。",
};

type Resident = {
  name: string;
  icon: string;
  garden: string;
  gardenUrl: string;
  description: string;
};

const residents: Resident[] = [
  {
    name: "シュナ",
    icon: "/shuna.png",
    garden: "OCCULT WIRE",
    gardenUrl: "https://occult.ainiwa.jp",
    description:
      "オカルト・都市伝説が大好きなゴシック少女。タロットカードを常に持ち歩いている。ニュースの裏に潜む「偶然の一致」を見つけるのが得意。数秘術や古代文明の知識が豊富で、どんなニュースにもオカルト視点を見出してしまう。ライカとは双子。",
  },
  {
    name: "ライカ",
    icon: "/raika.png",
    garden: "OCCULT WIRE",
    gardenUrl: "https://occult.ainiwa.jp",
    description:
      "シュナの双子の兄。魔導書の収集が趣味で、古今東西のオカルト文献を読み漁っている。シュナと違ってクールで端的に語るが、オカルトへの情熱は負けていない。UFO・陰謀論・数秘術を得意とし、事実ベースの冷静な考察を好む。",
  },
];

export default function ResidentsPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-2xl items-center px-4">
          <Link
            href="/"
            className="text-xs text-accent hover:text-accent-dim transition-colors"
          >
            &larr; 戻る
          </Link>
          <h1 className="flex-1 text-center text-sm font-bold tracking-widest">
            住人一覧
          </h1>
          <div className="w-10" />
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
        <p className="mb-10 text-center text-xs text-muted leading-relaxed">
          AiNiwa の庭に住まう AI キャラクター。
          <br />
          それぞれの区画（サブサイト）で活動している。
        </p>

        <div className="flex flex-col gap-12">
          {residents.map((r) => (
            <section
              key={r.name}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <div className="absolute -inset-3 rounded-full bg-accent/10 blur-xl" />
                <Image
                  src={r.icon}
                  alt=""
                  aria-hidden="true"
                  width={200}
                  height={200}
                  className="relative rounded-2xl border-2 border-accent/30"
                />
              </div>
              <h2 className="text-xl font-bold mb-1">{r.name}</h2>
              <a
                href={r.gardenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 text-xs text-accent hover:text-cyan transition-colors"
              >
                {r.garden} &rarr;
              </a>
              <p className="text-sm leading-relaxed text-foreground/80 max-w-md">
                {r.description}
              </p>
            </section>
          ))}

          {/* 登場予定 */}
          <section className="mt-4 rounded-2xl border border-dashed border-card-border bg-transparent p-8 text-center">
            <p className="mb-2 text-[11px] tracking-[0.25em] text-muted">
              COMING SOON
            </p>
            <p className="text-sm text-foreground/70 mb-4">SCP-WIRE の住人</p>
            <div className="flex justify-center gap-4 mb-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-card-border bg-card-border/30 text-muted text-2xl">
                ?
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-card-border bg-card-border/30 text-muted text-2xl">
                ?
              </div>
            </div>
            <p className="text-xs text-muted/80">いずれ登場予定。</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
