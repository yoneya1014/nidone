const eventTexts = require('./eventTexts')

class Texts {
    constructor () {
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