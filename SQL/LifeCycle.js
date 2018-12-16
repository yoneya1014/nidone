const connection = require('./mysqlConnection')
const moment = require('moment')

class LifeCycle {
    constructor() {
    }

    static setUserLifeCycle(userId, getUpTime, goBedTime) {
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO lifecycle (userid, get_up_time, go_bed_time) VALUES (?,?,?)"
            connection.query(query, [userId, getUpTime, goBedTime], function(err, rows) {
                if(err) {
                    resolve()
                }
                resolve()
            }
        )})
    }

    static getLifeCycle(userId) {
        return new Promise((resolve, reject) => {
            let query = 'SELECT * FROM lifecycle WHERE userid=?;'
            connection.query(query, [userId], function(err, rows) {
                if(err) {
                    console.log(err.message)
                }
                console.log(rows)

                if (rows[0]) {
                    const getUpTime = rows[0].get_up_time
                    const goBedTime = rows[0].go_bed_time
                    
                    resolve([getUpTime, goBedTime])
                } else {
                    resolve(null)
                }
            })
        })
    }
}

module.exports = LifeCycle