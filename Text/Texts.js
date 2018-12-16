const eventTexts = require('./eventTexts')
const LifeCycle = require('../SQL/LifeCycle')

class Texts {
    constructor () {
    }

    //時間が設定されているか
   static isTime(userId) {
       return new Promise((resolve) => {
        LifeCycle.getLifeCycle(userId).then((arr) => {
            if(arr) {
                console.log("arr has")
                resolve(true)
            } else {
                resolve(false)
            }
        })
       })
    }

    static getResponse(text = "", emotion = "Usually") {
        for (let i = 0; i < eventTexts.length; i++) {
            if (text.includes(eventTexts[i]["Message"])) {
                return eventTexts[i]["Response"][emotion];
            }
        }
    }
}

Texts.isTime('Uf9a4df10d3b87634b3996a01163c81eb').then((tes)=>console.log(tes))

module.exports = Texts