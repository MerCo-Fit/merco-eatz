const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define('items', {
  meal: Sequelize.STRING,
  title: Sequelize.DECIMAL(10,2),  //Precision specifier
  protein: Sequelize.STRING,
  ingredients: Sequelize.STRING,
  //image: Sequelize.STRING 
})

module.exports = {
  db: sequelize,
  Item,
};