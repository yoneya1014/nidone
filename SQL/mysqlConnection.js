const mysql = require('mysql')
const dbConfig = {
    host: 'nidone-db.cfg81woz8dyx.us-east-2.rds.amazonaws.com',
    user: 'yoneya1014',
    password: 'nidone_db_password',
    port: 3306,
    database: 'nidone_db'
}

const connection = mysql.createConnection(dbConfig)
module.exports = connection