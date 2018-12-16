const connection = require('./mysqlConnection')

class PostTimeStamp {
    constructor() {
    }

    static setTimestamp(userId, value) {
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO post_timestamp (userid, value) VALUES (?,?)"
            connection.query(query, [userId, value], function(err, rows) {
                if(err) {
                    resolve()
                }
                resolve()
            }
        )})
    }

    static getTimeStamp() {
        return new Promise((resolve, reject) => {
            let query = 'SELECT * FROM post_timestamp;'
            connection.query(query, function(err, rows) {
                if(err) {
                    console.log(err.message)
                }
                console.log(rows)
            })
            resolve()
        })
    }
}

PostTimeStamp.getTimeStamp()

module.exports = PostTimeStamp