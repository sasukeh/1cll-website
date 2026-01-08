# Creative Life Labo - 会社サイト

Creative Life Labo（1cll.com）の公式ウェブサイトです。Astroで構築され、GitHub Pagesでホストされています。

## 🚀 プロジェクト構成

```
/
├── public/
│   ├── CNAME           # カスタムドメイン設定
│   ├── favicon.svg     # ファビコン
│   ├── og-image.svg    # OGP画像
│   └── robots.txt      # クローラー設定
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro         # トップページ
│       ├── about.astro         # 会社概要
│       ├── contact.astro       # お問い合わせ
│       ├── privacy.astro       # プライバシーポリシー
│       ├── terms.astro         # 利用規約
│       └── products/
│           └── run-diary.astro # Run Diary プロダクトページ
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions デプロイ設定
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🛠️ セットアップ

### 必要条件
- Node.js 20以上
- npm

### ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## 📦 デプロイ

### GitHub Pagesへのデプロイ

1. **リポジトリの設定**
   - GitHubでリポジトリを作成（例: `1cll.github.io` または `creative-life-labo-website`）
   - コードをプッシュ

2. **GitHub Pagesの有効化**
   - リポジトリの Settings → Pages へ移動
   - Source を「GitHub Actions」に設定

3. **自動デプロイ**
   - `main` ブランチへのプッシュで自動的にデプロイされます
   - `.github/workflows/deploy.yml` が実行されます

### カスタムドメイン設定

#### DNSの設定

1cll.com のDNSレコードを以下のように設定:

**オプション1: Aレコード（推奨）**
```
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
AAAA @ 2606:50c0:8000::153
AAAA @ 2606:50c0:8001::153
AAAA @ 2606:50c0:8002::153
AAAA @ 2606:50c0:8003::153
```

**オプション2: CNAMEレコード（Apex以外のドメイン用）**
```
CNAME www <username>.github.io
```

#### GitHub側の設定

1. リポジトリの Settings → Pages へ移動
2. "Custom domain" に `1cll.com` を入力
3. "Enforce HTTPS" をチェック（DNSが反映された後）

**注意**: DNSの反映には最大48時間かかる場合があります。

## 🎨 カスタマイズ

### カラースキーム

`src/layouts/Layout.astro` の CSS変数で定義:

```css
:root {
  --color-primary: #3B82F6;      /* メインカラー（ブルー） */
  --color-primary-dark: #2563EB;
  --color-secondary: #10B981;    /* セカンダリ（グリーン） */
  --color-accent: #F59E0B;       /* アクセント（オレンジ） */
}
```

### ダークモード

自動的にシステムの設定に追従します（`prefers-color-scheme: dark`）

## 📄 ページ一覧

| パス | ページ | 説明 |
|------|--------|------|
| `/` | トップ | ヒーロー、プロダクト紹介、会社概要 |
| `/products/run-diary` | Run Diary | プロダクト詳細ページ |
| `/about` | 会社概要 | ミッション・ビジョン・会社情報 |
| `/contact` | お問い合わせ | コンタクトフォーム |
| `/privacy` | プライバシーポリシー | 個人情報保護方針 |
| `/terms` | 利用規約 | サービス利用規約 |

## 🔧 技術スタック

- **フレームワーク**: [Astro](https://astro.build/)
- **スタイリング**: CSS (CSS変数、レスポンシブデザイン)
- **フォント**: Inter, Noto Sans JP (Google Fonts)
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📝 メンテナンス

### コンテンツの更新

- 各ページは `src/pages/` ディレクトリ内の `.astro` ファイル
- プライバシーポリシー・利用規約の更新時は `lastUpdated` 変数も更新

### 新しいプロダクトの追加

1. `src/pages/products/` に新しい `.astro` ファイルを作成
2. `src/components/Footer.astro` のリンクを更新
3. トップページのプロダクトセクションを更新

## 📜 ライセンス

© 2026 Creative Life Labo. All rights reserved.
