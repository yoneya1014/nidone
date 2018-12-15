const fs = require('fs')
const eventTexts = require('./eventTexts')

class Sleep {
    constructor(userId, text = "", timestamp) {
        //read json file
        let json = fs.readFileSync('./Data/sleepData.json')
        let sleepData = JSON.parse(json)

        for (let i = 0; i < eventTexts.length; i++) {
            if (text.includes(eventTexts[i]["Message"])) {
                if (eventTexts[i]["Message"] == "おはよう") {
                    sleepData[userId]["getup"] == timestamp
                } else if (eventTexts[i]["Message"] == "おやすみ") {
                    
                }
            }
        }
    }
}