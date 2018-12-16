const moment = require('moment')

class TimeController {
    constructor(time) {
        this.moment = moment(time)
    }
}

let t = moment('1992-05-29 13:10:15')
console.log(t.hour())