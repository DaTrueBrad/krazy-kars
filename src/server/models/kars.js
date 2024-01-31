const {DataTypes} = require('sequelize')
const db = require('../db')

const Kar = db.define('kar', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  make: DataTypes.STRING,
  model: DataTypes.STRING,
  year: DataTypes.INTEGER,
  miles: DataTypes.INTEGER,
  price: DataTypes.FLOAT,
  image_url: DataTypes.STRING
})

module.exports = Kar