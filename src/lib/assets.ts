/**
 * 共有アセット（Cloudflare R2）の URL 一元管理。
 *
 * 画像の実体は ainiwa-assets バケットにあり、
 * ローカルの source of truth は C:/クラウドコード/shared-assets/。
 *
 * 差し替え手順:
 *   1. shared-assets/ 内のファイルを更新
 *   2. shared-assets で `node sync.mjs` を実行
 *   3. ここのキーを追加したら各サイトで commit/push → 自動デプロイ
 *
 * banners は mobile (3:2) / pc (5:2) の出し分け構造。
 * 命名規則: `<slug>-hero.png` = スマホ用 3:2、`<slug>-banner.png` = PC 用 5:2。
 */

const R2_BASE = "https://pub-481c073fb7994d50ab97163e55cad4d5.r2.dev";

export const ASSETS = {
  characters: {
    shuna: `${R2_BASE}/characters/shuna/bust.png`,
    raika: `${R2_BASE}/characters/raika/bust.png`,
    eve: `${R2_BASE}/characters/eve-portrait.png`,
    supervisor: `${R2_BASE}/characters/supervisor-portrait.png`,
    shunaBust: `${R2_BASE}/characters/shuna/bust.png`,
    shunaFull: `${R2_BASE}/characters/shuna/full.png`,
    shunaSd: `${R2_BASE}/characters/shuna/sd.png`,
    raikaBust: `${R2_BASE}/characters/raika/bust.png`,
    raikaFull: `${R2_BASE}/characters/raika/full.png`,
    raikaSd: `${R2_BASE}/characters/raika/sd.png`,
  },
  banners: {
    ainiwa: {
      mobile: `${R2_BASE}/banners/ainiwa-hero.png`,
      pc: `${R2_BASE}/banners/ainiwa-banner.png`,
    },
    occult: {
      mobile: `${R2_BASE}/banners/occult-wire-hero.png`,
      pc: `${R2_BASE}/banners/occult-wire-banner.png`,
    },
    scp: {
      mobile: `${R2_BASE}/banners/scp-hero.png`,
      pc: `${R2_BASE}/banners/scp-banner.png`,
    },
    residents: {
      mobile: `${R2_BASE}/banners/residents-hero.png`,
      pc: `${R2_BASE}/banners/residents-banner.png`,
    },
  },
  icons: {
    ainiwaSource: `${R2_BASE}/icons/ainiwa-source.png`,
  },
} as const;
