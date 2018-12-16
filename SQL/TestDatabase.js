const connection = require('./mysqlConnection')

//let query = "INSERT INTO lifecycle (userid, get_up_time, go_bed_time) VALUES ('12I8383234', null,'09:00')"
let query = 'SELECT * FROM lifecycle;'
connection.query(query, function(err, rows) {
    if(err) {
        console.log(err.message)
    }
    console.log(rows)
})

connection.end()