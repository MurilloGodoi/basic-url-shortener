require("dotenv").config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;
const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host:process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

module.exports = db;
