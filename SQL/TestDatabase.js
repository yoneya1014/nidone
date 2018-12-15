const connection = require('./mysqlConnection')

//let query = "INSERT INTO post_timestamp (timestamp, userid, value) VALUES ('2018-12-15T07:08:23.000Z','testuser','おやすみ')"
let query = 'SELECT * FROM post_timestamp;'
connection.query(query, function(err, rows) {
    if(err) {
        console.log(err.message)
    }
    console.log(rows)
})

connection.end()