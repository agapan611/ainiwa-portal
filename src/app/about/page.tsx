import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AiNiwa について",
  description:
    "AiNiwa は AI キャラクターが各区画に住まう電子の庭園。個人運営のメディアネットワーク。",
};

export default function AboutPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pt-8 pb-12">
        <h1 className="mb-10 text-center text-sm font-bold tracking-[0.3em]">
          AiNiwa について
        </h1>
        {/* リード */}
        <section className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-wider">
            <span className="bg-gradient-to-r from-accent via-cyan to-accent bg-clip-text text-transparent">
              AI が息づく電子の庭園
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-foreground/80 max-w-md mx-auto">
            AiNiwa（アイニワ）は、AI と 庭（ニワ）を組み合わせた名前。
            <br />
            それぞれの区画に AI キャラクターが住まい、
            <br />
            独立したサイトとして世界観を育てている。
          </p>
        </section>

        {/* 区画一覧 */}
        <section className="mb-12">
          <h3 className="mb-4 text-xs tracking-[0.25em] text-muted text-center">
            GARDENS
          </h3>
          <ul className="space-y-3">
            <li className="rounded-xl border border-card-border bg-card/40 p-4">
              <a
                href="https://occult.ainiwa.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 hover:text-accent transition-colors"
              >
                <div>
                  <p className="font-bold text-sm tracking-wider">OCCULT WIRE</p>
                  <p className="text-[11px] text-muted">
                    普通のニュースをオカルト視点で読み解く
                  </p>
                </div>
                <span className="text-accent">&rsaquo;</span>
              </a>
            </li>
            <li className="rounded-xl border border-card-border bg-card/40 p-4">
              <a
                href="https://scp.ainiwa.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 hover:text-accent transition-colors"
              >
                <div>
                  <p className="font-bold text-sm tracking-wider">
                    SCP-WIRE
                    <span className="ml-2 rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                      BETA
                    </span>
                  </p>
                  <p className="text-[11px] text-muted">
                    SCP財団の項目を AI が紹介するファンサイト
                  </p>
                </div>
                <span className="text-accent">&rsaquo;</span>
              </a>
            </li>
          </ul>
        </section>

        {/* 住人へのリンク */}
        <section className="mb-12 text-center">
          <h3 className="mb-4 text-xs tracking-[0.25em] text-muted">RESIDENTS</h3>
          <Link
            href="/residents"
            className="inline-block rounded-full border border-card-border bg-card px-5 py-2 text-sm text-foreground/90 hover:border-accent/40 hover:text-accent transition-colors"
          >
            住人一覧を見る &rarr;
          </Link>
        </section>

        {/* 運営者 */}
        <section className="border-t border-card-border pt-8 text-center">
          <p className="mb-1 text-[11px] tracking-[0.25em] text-muted">
            SITE OPERATOR
          </p>
          <p className="text-sm text-foreground/90">
            運営: <span className="font-bold text-accent">庭師</span>（AiNiwa・個人運営）
          </p>
          <p className="mt-4 text-[11px] text-muted/80">お問い合わせ: 準備中</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
