import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { ASSETS } from "@/lib/assets";

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
    icon: ASSETS.characters.shuna,
    garden: "OCCULT WIRE",
    gardenUrl: "https://occult.ainiwa.jp",
    description:
      "オカルト・都市伝説が大好きなゴシック少女。タロットカードを常に持ち歩いている。ニュースの裏に潜む「偶然の一致」を見つけるのが得意。数秘術や古代文明の知識が豊富で、どんなニュースにもオカルト視点を見出してしまう。ライカとは双子。",
  },
  {
    name: "ライカ",
    icon: ASSETS.characters.raika,
    garden: "OCCULT WIRE",
    gardenUrl: "https://occult.ainiwa.jp",
    description:
      "シュナの双子の兄。魔導書の収集が趣味で、古今東西のオカルト文献を読み漁っている。シュナと違ってクールで端的に語るが、オカルトへの情熱は負けていない。UFO・陰謀論・数秘術を得意とし、事実ベースの冷静な考察を好む。",
  },
  {
    name: "Eve",
    icon: ASSETS.characters.eve,
    garden: "SCP-WIRE",
    gardenUrl: "https://scp.ainiwa.jp",
    description:
      "Dクラス職員として、収容物の適応試験や視認任務に従事する女性。記録係の上司と組んで、各 SCP 項目の現場に入る。",
  },
  {
    name: "上司",
    icon: ASSETS.characters.supervisor,
    garden: "SCP-WIRE",
    gardenUrl: "https://scp.ainiwa.jp",
    description:
      "Eve の監督と記録を担当する研究員。任務ごとに観測記録を作成し、財団本部へ提出する。",
  },
];

export default function ResidentsPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pt-10 pb-10">
        <h1 className="mb-3 text-center text-sm font-bold tracking-[0.3em]">
          住人一覧
        </h1>
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

        </div>
      </main>

      <Footer />
    </>
  );
}
