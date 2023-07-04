const mysql = require("mysql");

module.exports = () => {
return mysql.createConnection({
    host: 'sql8.freemysqlhosting.net',
    user: 'sql8630397',
    password:'sWmS74xzLD',
    database: 'sql8630397',
    port:3306
});
}