const { Item } = require('./Item')
const { User } = require('./User')

Item.belongsTo(User)
User.hasMany(Item)

module.exports = {Item, User}