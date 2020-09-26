const Sql = require("sequelize");
const { Sequelize } = require("sequelize");
const sql = new Sql("mysql://root:@localhost:3306/Delilah");


module.exports = sql