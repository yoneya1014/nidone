const connection = require('./mysqlConnection')

let query = "INSERT INTO lifecycle (userid, get_up_time, go_bed_time) VALUES ('test','04:00','09:00')"
//let query = 'SELECT * FROM post_timestamp;'
connection.query(query, function(err, rows) {
    if(err) {
        console.log(err.message)
    }
    console.log(rows)
})

connection.end()