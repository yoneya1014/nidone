const eventTexts = require('./eventTexts')

class Texts {
    constructor () {
    }

    //時間が設定されているか
    static isTime(userId) {
        return true
    }

    static getResponse(text = "", emotion = "Usually") {
        for (let i = 0; i < eventTexts.length; i++) {
            if (text.includes(eventTexts[i]["Message"])) {
                return eventTexts[i]["Response"][emotion];
            }
        }
    }
}

module.exports = Texts