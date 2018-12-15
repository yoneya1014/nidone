const connection = require('./mysqlConnection')

class PostTimeStamp {
    constructor() {
    }

    static setTimestamp(timestamp, userId, value) {
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO post_timestamp (timestamp, userid, value) VALUES (?,?,?)"
            connection.query(query, [timestamp, userId, value], function(err, rows) {
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
// Uf9a4df10d3b87634b3996a01163c81eb 1544901570869 おやすみなさい
//PostTimeStamp.setTimestamp('Uf9a4df10d3b87634b3996a01163c81eb', '1544901570869', 'eeeee')
PostTimeStamp.getTimeStamp().then(()=>{
    PostTimeStamp.getTimeStamp()
})

module.exports = PostTimeStamp