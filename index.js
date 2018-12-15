// -----------------------------------------------------------------------------
// モジュールのインポート
const server = require("express")();
const line = require("@line/bot-sdk"); // Messaging APIのSDKをインポート

// -----------------------------------------------------------------------------
// パラメータ設定
const line_config = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN, // 環境変数からアクセストークンをセットしています
    channelSecret: process.env.LINE_CHANNEL_SECRET // 環境変数からChannel Secretをセットしています
};

// -----------------------------------------------------------------------------
// Webサーバー設定
server.listen(process.env.PORT || 3000);

//APIコールのためのクライアントインスタンス
const bot = new line.Client(line_config);

// -----------------------------------------------------------------------------
// ルーター設定
server.post('/webhook', line.middleware(line_config), (req, res, next) => {
    res.sendStatus(200);
    
    //すべてのイベント処理のプロミスを格納する配列
    let events_processed = [];

    req.body.events.forEach((event) => {
        //この処理の対象をイベントタイプがメッセージかるテキストタイプで限定
        if (event.type == "message" && event.message.type == "text") {
            if (event.message.text == "こんにちは") {
                //replyMessage()で返信し、そのプロミスをevents_processedに追加
                events_processed.push(bot.replyMessage(event.replyToken, {
                    type: "text",
                    text: "これはこれは"
                }));
            }
        }
    });

    Promise.all(events_processed).then(
        (response) => {
            console.log(`${response.length} event(s) processed.`);
        }
    );
});

server.get('/', (req, res, next) => {
    res.send('OK')
})