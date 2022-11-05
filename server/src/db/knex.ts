import knex from 'knex';
const config = require("./knexfile.ts");

const environment = process.env.NODE_ENV || "development";

module.exports = knex(config[environment]);