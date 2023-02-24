const {Sequelize} = require('sequelize')
const {sequelize} = require('../server/db')

const Item = sequelize.define("items", {
    meal: Sequelize.ENUM('Breakfast', 'Lunch', 'Dinner', 'Dessert'),
    title: Sequelize.STRING,
    protein: Sequelize.STRING,
    ingredients: Sequelize.STRING,
});

//exports
module.exports = { 
    Item,
};

