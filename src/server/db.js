const mysql = require('mysql');
const db = mysql.createPool({
host: "localhost",
user: "root",
password: "Discord0)",
database:"sakila" 
})

module.exports = db;