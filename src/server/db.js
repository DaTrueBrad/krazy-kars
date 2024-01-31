const {Sequelize} = require('sequelize')
require('dotenv').config()
const {CONNECTION_STRING} = process.env

const db = new Sequelize(CONNECTION_STRING)

module.exports = db