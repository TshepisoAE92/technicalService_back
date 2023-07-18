const mysql = require("mysql");

module.exports = () => {
return mysql.createConnection({
    host:'sql8.freemysqlhosting.net',
    user:'sql8633482',
    password:'w99CZijhQB',
    database:'sql8633482',
    port:3306
});
}