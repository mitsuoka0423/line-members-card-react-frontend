# line-members-card-react-frontend

このリポジトリでは、[PHP Laravel x React !！ LINEで動く会員証ライブコーディング vol.1 - connpass](https://linedevelopercommunity.connpass.com/event/250999/)のフロントエンド実装を公開しています。

詳細はこちらの記事をご確認ください。

[LINE LIFF + Reactで会員カードUI作成｜PHP Laravel x React ！！ LINEで動く会員証ライブコーディング vol.1](https://zenn.dev/tmitsuoka0423/books/handson-members-card-laravel-react-line/viewer/liff-react)

## インストール

```bash
yarn
```

## 環境変数

```bash
cp .env.sample .env
```

| 変数名 | 設定する内容 |
| -- | -- |
| VITE_LIFF_ID | LINEログインのチャネルで作成したLIFFアプリのLIFF ID |
| VITE_LIFF_MOCK_MODE | LIFFのモックモードを利用する場合は`true`、それ以外は`false` |
| VITE_LIFF_REDIRECT_URI | LIFFアプリのURL |
| VITE_LIFF_API_ENDPOINT | APIエンドポイントのURL |

## 実行

```bash
yarn dev
```

## ビルド

```bash
yarn build
```
