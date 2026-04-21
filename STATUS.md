# STATUS（AiNiwa ポータル / ドメイン管理メモ）

> 更新: 2026-04-21

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
| `ainiwa.jp`（apex） | AiNiwa ポータル（ルート） | `ainiwa-portal` | （要確認） | — |
| `occult.ainiwa.jp` | OCCULT WIRE（オカルトニュース考察） | `occult-news-app` | occult-news-app | 稼働中 |
| `scp.ainiwa.jp` | SCP-WIRE（SCP財団紹介サイト・仮称） | `scp-foundation-app` | scp-foundation-app | 稼働中（準備中ページ） |

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
- [SCP-WIRE](../scp-foundation-app/STATUS.md)（`scp-foundation-app`・仮称）

## 7. ainiwa-portal リポジトリ自体について

このリポジトリは本来 `ainiwa.jp` apex（ルートドメイン）の Next.js サイト本体を兼ねる予定。
現状は Next.js 16 のスキャフォールドのみで、コンテンツは未実装。
ポータルとしての実装を進めるタイミングが来たら、この `STATUS.md` に追記していく。
