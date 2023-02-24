const {sequelize} = require('../server/db');
const { Item } = require('./Item');
const { User } = require('./User');

module.exports = {sequelize, Item, User};