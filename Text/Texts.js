const eventTexts = require('./eventTexts')

class Texts {
    constructor () {
    }

    static getResponse(text = "", emotion = "Usually") {
        for (let i = 0; i < eventTexts.length; i++) {
            console.log(text, eventTexts[i]["Message"])
            if (text.includes(eventTexts[i]["Message"])) {
                return eventTexts[i]["Response"][emotion];
            }
        }
    }
}

module.exports = Texts