
# webhook-sender

## これはなに？

discordのサーバをURL/画像クリップサービスとして使うための拡張機能。ブラウザで開いているサイトを右クリックメニューからwebhookを通じてdiscordに送る。

[![Image from Gyazo](https://i.gyazo.com/ac52b102a308b6af7b7000074934ad41.gif)](https://gyazo.com/ac52b102a308b6af7b7000074934ad41)

## つかいかた

### discordサーバーにおけるwebhookの取得方法

がんばってください
参考:
[Intro to Webhooks – Discord](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

### 拡張機能にwebhookのURLを登録する

インストール後、`オプション`からwebhookの設定を済ませてください

[![Image from Gyazo](https://i.gyazo.com/caf45cb65acf20e8f318ed2b0f011e02.png)](https://gyazo.com/caf45cb65acf20e8f318ed2b0f011e02)

[![Image from Gyazo](https://i.gyazo.com/89a4424973dcb74611520a7b2b2ee33d.png)](https://gyazo.com/89a4424973dcb74611520a7b2b2ee33d)

Savedが出れば完了です\
[![Image from Gyazo](https://i.gyazo.com/f835191956789a12d6ad9104d31a6b46.png)](https://gyazo.com/f835191956789a12d6ad9104d31a6b46)

### Webhookにおくる

右クリックメニューから選択

[![Image from Gyazo](https://i.gyazo.com/ef8e700f1e6d61e4badf251fec230ce1.png)](https://gyazo.com/ef8e700f1e6d61e4badf251fec230ce1)

画像でも

[![Image from Gyazo](https://i.gyazo.com/f6fccb93c0ad2c926dbfb2632c86cb4a.jpg)](https://gyazo.com/f6fccb93c0ad2c926dbfb2632c86cb4a)

## firefoxユーザーへ

一応chrome用に作ってあります。firefoxで使う際は、`manifest.firefox.json`を`manifest.json`に`manifest.json`は`manifest.chrome.json`に書き換えてください


## 参考

[全人類、いますぐ Discord Webhook を使いこなそう](https://zenn.dev/discorders/articles/discord-webhook-guide)