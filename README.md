# リンゴキャッチゲーム (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたリンゴキャッチゲームです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-apple-catch/demo/

## 主要機能
### 操作方法
- **矢印キー左右**: カゴを左右に移動
- **タッチ/スワイプ**: カゴを左右に移動
- **ゲームオーバー後**: 「もう一度プレイ」ボタンでリスタート

### ゲーム機能
- 落下するリンゴをカゴでキャッチ
- 通常リンゴ（1点）とボーナスリンゴ（10点）
- ライフシステム（3回まで逃せる）
- キーボード（矢印キー）とタッチ操作に対応

## 技術スタック
- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── apple-catch/            # リンゴキャッチゲーム機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── AppleCatchGame/ # メインゲーム
│       │   ├── Apple/          # リンゴ表示
│       │   ├── Basket/         # カゴ表示
│       │   ├── ScoreDisplay/   # スコア表示
│       │   ├── GameHeader/     # ゲームヘッダー
│       │   ├── GameOverModal/  # ゲームオーバーモーダル
│       │   └── Instructions/   # 操作説明
│       ├── useAppleCatchGame.ts # ゲームロジックフック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   └── Button/                 # 操作ボタン
├── stories/                    # Storybook用ストーリー
├── Config.ts                   # ゲーム設定値
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License