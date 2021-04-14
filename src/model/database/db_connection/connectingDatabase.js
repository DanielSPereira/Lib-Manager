const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3300",
  user: "root",
  database: "libmanager",
});

db.connect((err, result) => {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = db;
