const moment = require('moment')
const LifeCycle = require('../SQL/LifeCycle')

class TimeController {
    constructor(time) {
        this.moment = moment(time)
    }

    static setLifeCycle(userId, getUpTime, goBedTime) {
        //適切な形式に変換
        if (userId) {
            try {
                const getUpTimeMoment = moment(getUpTime)
                const getUpTimeMoment = moment(goBedTime)
                const getUpTimeHour = getUpTimeMoment.hour()
                const goBedTimeHour = goBedTimeMoment.hour()
                return [getUpTimeHour, goBedTimeHour]
            } catch (err) {
                console.log(err.message)
            }
        } else {

        }

        //LifeCycle.setUserLifeCycle(userId, getUpTime, goBedTime).then(() => {

        //})
    }

    static getLifeCycleTime(userId) {
        LifeCycle.getLifeCycle(userId).then((row) => {
            console.log(row)
            const getUpTime = row.get_up_time
            const goBedTime = row.go_bed_time

            return [getUpTime, goBedTime]
        })
    }
}

let t = moment('1992-05-29 13:10:15')
console.log(t.hour())
console.log(TimeController.getLifeCycleTime('12'))