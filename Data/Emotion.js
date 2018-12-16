const fs = require('fs');

class Emotion {
    constructor(userId) {
        //read json file
        let json = fs.readFileSync('./Data/emotionPoints.json')
        let emotionPoints = JSON.parse(json)

        //userIdが登録されていない場合は新しく作る
        if (!emotionPoints[userId]) {
            emotionPoints[userId] = {
                "emotion": 0
            }
        } else {
            //判定する処理でemotionの値を変える
            emotionPoints[userId]["emotion"] -= 1
        }

        this._emotion = emotionPoints[userId].emotion

        //更新
        let data = JSON.stringify(emotionPoints)
        fs.writeFileSync('./Data/emotionPoints.json', data)
    }

    get emotion() {
        return emotionJudge(this._emotion)
    }
}

function emotionJudge(emotion) {
    if (emotion >= 5) {
        return "Good"
    } else if (emotion >= 0) {
        return "Usually"
    } else {
        return "Bad"
    }
}

module.exports = Emotion