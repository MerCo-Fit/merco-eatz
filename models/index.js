const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
    meal: Sequelize.ENUM('Breakfast', 'Lunch', 'Dinner', 'Dessert'),
    title: Sequelize.STRING,
    protein: Sequelize.STRING,
    ingredients: Sequelize.STRING,
});

//exports
module.exports = { 
    Item, 
    db: sequelize
};


//meal: DataTypes.ENUM('Breakfast', 'Lunch', 'Dinner', 'Dessert'),
    // title: DataTypes.STRING,
    // protein: DataTypes.STRING,
    // ingredients: DataTypes.STRING,