const { Pool } = require('mysql')
const dbPool = new Pool({
    database:'collection_db',
    port:5432,
    user:'mysql',
    password: 'root'
})

module.exports = dbPool