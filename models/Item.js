//import our db, Model, DataTypes
const { db, DataTypes } = require('../db')

//Creating a User child class from the Model parent class
const Item = db.define("items", {
    meal: DataTypes.ENUM('Breakfast', 'Lunch', 'Dinner', 'Dessert'),
    title: DataTypes.STRING,
    protein: DataTypes.STRING,
    ingredients: DataTypes.STRING,
});

//exports
module.exports = { Item }