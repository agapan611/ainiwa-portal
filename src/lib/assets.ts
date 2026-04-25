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
    occult: `${R2_BASE}/banners/occult-wire.png`,
    ainiwaHero: `${R2_BASE}/banners/ainiwa-hero.png`,
    residentsHero: `${R2_BASE}/banners/residents-hero.png`,
    scpHero: `${R2_BASE}/banners/scp-hero.png`,
  },
  icons: {
    ainiwaSource: `${R2_BASE}/icons/ainiwa-source.png`,
  },
} as const;
