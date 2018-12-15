// -----------------------------------------------------------------------------
// モジュールのインポート
const server = require("express")();
const line = require("@line/bot-sdk"); // Messaging APIのSDKをインポート
const Texts = require('./Text/Texts'); //返信メッセージ取得クラス
const Emotion = require('./Data/Emotion');
const PostTimeStamp = require('./SQL/PostTimeStamp');

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
    // 先行してLINE側にステータスコード200でレスポンスする。
    res.sendStatus(200);

    // すべてのイベント処理のプロミスを格納する配列。
    let events_processed = [];

    // イベントオブジェクトを順次処理。
    req.body.events.forEach(async function (event) {
        // この処理の対象をイベントタイプがメッセージで、かつ、テキストタイプだった場合に限定。
        if (event.type == "message" && event.message.type == "text") {
            const userId = req.body.events[0].source.userId
            const emotion = new Emotion(userId)
            const message = Texts.getResponse(event.message.text, emotion.emotion)

            // ユーザーからのテキストメッセージが「こんにちは」だった場合のみ反応。
            if (message){
                //DBに格納
                console.log(event.source.userId, event.timestamp, event.message.text)
                await PostTimeStamp.setTimestamp(event.timestamp, event.source.userId, event.message.text)

                // replyMessage()で返信し、そのプロミスをevents_processedに追加。
                events_processed.push(bot.replyMessage(event.replyToken, {
                    type: "text",
                    text: message
                }))
            }
        }
    });

    // すべてのイベント処理が終了したら何個のイベントが処理されたか出力。
    Promise.all(events_processed).then(
        (response) => {
            console.log(`${response.length} event(s) processed.`);
        }
    );
});

server.get('/', (req, res, next) => {
    res.send('OK')
})