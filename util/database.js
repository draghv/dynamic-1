// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node',
//     password: '123456'

// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("node", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
