const app = require("./app");
const sequelize = require("../src/database/index");
const dotenv = require("dotenv/config");
const port = process.env.PORT;

app.listen(port);
