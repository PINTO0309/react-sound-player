# 🎵 React Sound Player

React Sound Player は、ユーザーが **MP3** または **WAV** ファイルをアップロードし、再生・一時停止・停止ができる **シンプルなオーディオプレイヤー** です。このプロジェクトは **React** と **Howler.js** を使用して構築されています。

---

## 🚀 デモ

🔗 **デモURL:** https://pinto0309.github.io/react-sound-player/

---

## 🛠️ 機能一覧
✅ 音声ファイル（MP3 / WAV）をアップロード
✅ 選択した音声を再生・一時停止・停止
✅ 現在の音声ファイル名を表示
✅ UI は **Tailwind CSS** でスタイリング
✅ **GitHub Pages** で簡単デプロイ

---

## 📦 インストール方法

### 1️⃣ 必要な環境
- Node.js (v16 以上推奨)
- npm または yarn

### 2️⃣ リポジトリをクローン
```sh
git clone https://github.com/your-github-username/react-sound-player.git
cd react-sound-player
```

### 3️⃣ 必要なパッケージをインストール
```sh
npm install
# または
yarn install
```

### 4️⃣ ローカルでアプリを実行
```sh
npm run dev
# または
yarn dev
```
📌 **http://localhost:5173** にアクセスし、動作を確認してください。

---

## 🎛️ 使い方

1️⃣ **[ファイル選択]** ボタンをクリックし、MP3 または WAV ファイルを選択
2️⃣ **[Play]** をクリックすると音声が再生される
3️⃣ **[Pause]** で一時停止、**[Stop]** で完全停止
4️⃣ 別のファイルを選択すると、新しい音声がロードされる

---

## 🌍 GitHub Pages にデプロイする

### 1️⃣ `gh-pages` パッケージをインストール
```sh
npm install gh-pages --save-dev
```

### 2️⃣ `package.json` にデプロイ設定を追加
`package.json` の `"scripts"` に以下を追加：
```json
"homepage": "https://your-github-username.github.io/react-sound-player",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3️⃣ デプロイ実行
```sh
npm run deploy
```
✨ **GitHub Pages にデプロイ完了！**
🔗 **URL:** [https://your-github-username.github.io/react-sound-player](https://your-github-username.github.io/react-sound-player)

---

## 🛠️ 使用技術
- ⚛ **React** - UI の構築
- 🎵 **Howler.js** - 音声の再生管理
- 🎨 **Tailwind CSS** - スタイリング
- 🚀 **Vite** - 開発環境のセットアップ
- 📦 **gh-pages** - GitHub Pages へのデプロイ

---
