const connection = require('./mysqlConnection')

class PostTimeStamp {
    constructor() {
    }

    static setTimestamp(timestamp, userId, value) {
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO post_timestamp (timestamp, userid, value) VALUES (?,?,?)"
            connection.query(query, [timestamp, userId, value], function(err, rows) {
                if(err) {
                    console.log(err.message)
                    connection.end()
                    resolve(false)
                } else {
                    connection.end()
                    resolve(true)
                }
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
            connection.end()
        })
    }
}

PostTimeStamp.getTimeStamp()

module.exports = PostTimeStamp