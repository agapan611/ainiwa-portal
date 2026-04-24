# STATUS（AiNiwa ポータル / ドメイン管理メモ）

> 更新: 2026-04-24

---

## 1. 概要

AiNiwa（個人運営）のポータル兼「`ainiwa.jp` ドメイン全体の管理メモ」を担うリポジトリ。
ドメイン登録・サブドメイン割当・DNS 設定の手順など、**AiNiwa 系サイト全体にまたがるインフラ情報はここに集約する**。

各サブサイト固有の情報（コンテンツ運用・ページ構成など）は、それぞれのリポジトリの `STATUS.md` に書く。

## 2. ドメイン登録情報

| 項目 | 内容 |
|---|---|
| ドメイン | `ainiwa.jp` |
| レジストラ | **お名前.com**（https://www.onamae.com/） |
| 取得者 | 海斗さん（個人） |
| 管理画面 | お名前.com のドメイン Navi からログイン → `ainiwa.jp` の DNS 設定 |

## 3. サブドメイン割当

| サブドメイン | 用途 | リポジトリ | Vercel プロジェクト | 状態 |
|---|---|---|---|---|
| `ainiwa.jp`（apex） | AiNiwa ポータル（ルート） | `ainiwa-portal` | `ainiwa-portal`（推定・Vercel 管理画面で最終確認） | **稼働中** |
| `occult.ainiwa.jp` | OCCULT WIRE（オカルトニュース考察） | `occult-news-app` | `occult-news-app` | 稼働中 |
| `scp.ainiwa.jp` | SCP-WIRE（SCP財団紹介サイト） | `scp-foundation-app` | `scp-foundation-app` | 稼働中（準備中ページ） |

## 4. DNS 設定の標準フロー（新規サブドメイン追加時）

1. **Vercel 側**: 対象プロジェクトの Settings → Domains で `<sub>.ainiwa.jp` を追加
2. Vercel が表示する CNAME 先（例: `cname.vercel-dns.com.`）をメモ
3. **お名前.com の管理画面**で `ainiwa.jp` の DNS レコード設定を開く
4. CNAME レコードを追加:
   - ホスト名: `<sub>`（例: `scp`）
   - TYPE: `CNAME`
   - VALUE: Vercel が指定したアドレス
5. Vercel 側で「Valid Configuration」になるまで待つ（数分〜数十分）
6. SSL 証明書（Let's Encrypt）は Vercel が自動発行

## 5. 運用ルール

- **新規サブドメイン追加 → このファイルの「3. サブドメイン割当」表を更新**
- お名前.com のログイン情報は公開リポジトリに書かない（パスワードマネージャで管理）
- Vercel プロジェクト名は基本的にリポジトリ名と揃える

## 6. 姉妹プロジェクト

- [OCCULT WIRE](../occult-news-app/STATUS.md)（`occult-news-app`）
- [SCP-WIRE](../scp-foundation-app/STATUS.md)（`scp-foundation-app`）

## 7. ainiwa-portal リポジトリ（ポータル本体）

`ainiwa.jp` apex（ルートドメイン）で動く Next.js 16 ポータルサイト本体。

### 世界観

- コンセプト: **AI が息づく電子の庭園**（サイバーガーデン方向）
- AiNiwa 配下の各サブサイト＝「庭の区画（Gardens）」、各 AI キャラクター＝「庭の住人（Residents）」
- テーマカラー: 深い黒背景（`#0a0a0f`）＋紫アクセント（`#8b5cf6`）＋シアン（`#06b6d4`）
- 公開運営者名: **庭師**（AiNiwa）

### 技術スタック

- Next.js 16.2.4（App Router）/ React 19.2.4 / TypeScript 5
- Tailwind CSS v4
- Vercel デプロイ（GitHub 連携で自動デプロイ）
- GitHub: `agapan611/ainiwa-portal`

### Phase 1 実装済みページ（2026-04-22）

| URL | 役割 |
|---|---|
| `/` | トップ（キービジュアル＋区画カード一覧＋Coming Soon 枠） |
| `/residents` | 住人一覧（シュナ・ライカ＋SCP住人「いずれ登場予定」枠） |
| `/about` | AiNiwa について（世界観・区画・運営者情報） |

### Phase 1.5: ビジュアル基盤整備（2026-04-24）

- **ヒーロースライダー 4 スライドすべて画像化**（GPT Image 生成バナー）
  - 001 AiNiwa 始動 → `/about`
  - OCCULT WIRE 稼働中 → `https://occult.ainiwa.jp`
  - 002 SCP-WIRE 準備中 → `https://scp.ainiwa.jp`
  - 003 新しい住人、誕生 → `/residents`
  - タッチスワイプ対応（左右フリックで前後）、5.5 秒自動切替、ドットナビ、ホバーで一時停止
- **SiteHeader 追加**（ロゴ「AiNiwa」＋ナビ「住人」「About」、スクロールで背景切替の透過ヘッダー）
- **アイコン・PWA 整備**
  - `src/app/icon.png` (512)、`apple-icon.png` (180)、`favicon.ico` (16/32/48 マルチ)
  - `src/app/manifest.ts` 新規（PWA マニフェスト、icons 192/512）
  - 公開デザイン：月 × 幻想の樹 × 回路魔法陣（AiNiwa ファミリーの顔）
- **画像を Cloudflare R2 に一元化**（`pub-481c073fb7994d50ab97163e55cad4d5.r2.dev`）
  - ローカル source of truth：`C:/クラウドコード/shared-assets/`
  - `node sync.mjs` で `ainiwa-assets` バケットに配布（wrangler CLI・OAuth）
  - `src/lib/assets.ts` の `ASSETS.*` 経由で参照（`public/` 直接参照禁止）
  - `next.config.ts` の `images.remotePatterns` に R2 ドメイン追加
- **AiNiwa ファミリー運用基盤の整備**
  - グローバルルール: `~/.claude/rules/ainiwa_family.md`（ファミリー共通指針）、`ainiwa_assets.md`（画像は image-tasks キュー経由）
  - 各サイト AGENTS.md に「作業前にファミリー指針を必読」明示
  - 画像タスクキュー: `shared-assets/image-tasks/`（タスクファイル → GPT 生成 → 取り込み自動化）
  - 画像タスクスキル: `~/.claude/skills/画像タスク/`（作成・取り込みの 2 モード）

### 今後の展望（未着手）

- **Phase 2**: キャラ同士のコラボコンテンツ（対談記事、相互紹介）
- **Phase 3**: イベント／アニバーサリー企画ページ
- **補助整備**:
  - カスタムドメイン `assets.ainiwa.jp`（現 `pub-xxx.r2.dev` は rate-limited・開発用途。本番長期運用ならカスタムドメイン推奨）
  - `robots.ts` / `sitemap.ts` の追加
  - NEWS（新着）の仕組み定義（サブドメインからポータルへ情報を上げるルール）
  - お問い合わせ先の確定
