const express = require('express')
const router = express.Router()
const { Item } = require('../models')
const { sequelize } = require('../db')
const { items } = require('../seedData')

// GET /items

// GET Single Item

//Routes to ADD Item

// Delete item
router.delete('/:id', async (req, res, next) =>{
  try {
    const deletedItem = await Item.findByPk(req.params.id)
     await deletedItem.destroy()
    res.send(await Item.findAll())
  } catch (error) {
    next(error)
  }
})

//Update item*
