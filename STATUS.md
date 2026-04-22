# STATUS（AiNiwa ポータル / ドメイン管理メモ）

> 更新: 2026-04-22

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

### 今後の展望（未着手）

- Phase 2: キャラ同士のコラボコンテンツ（対談記事、相互紹介）
- Phase 3: イベント／アニバーサリー企画ページ
- 補助: `robots.ts` / `sitemap.ts` の追加、OGP 画像の整備、お問い合わせ先の確定
