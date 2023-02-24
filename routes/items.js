const express = require('express');
const router = express.Router();
const { Item } = require('../models');
// const { sequelize } = require('./db')
// const { items } = require('../seedData')

 router.use(express.json())
 router.use(express.urlencoded({
    extended: true
   }))    
  
   router.get('/', async (req, res, next) => {
     try {
       const meal = req.query.meal;
        const where = {};
        if(meal)
        where.meal = meal;
      const items = await Item.findAll();
      res.send(items);
    } catch (error) {
      next(error);
    }
  });


//ADD ITEM (CREATE)
router.post('/', async (req, res, next) => {
  try {
    const addItem = await Item.create(req.body)  
    res.send(addItem)
  } catch (error) {
    next(error)  
  }
})

//DELETE ITEM
router.delete('/:id', async (req, res, next) =>{
  try {
    const deletedItem = await Item.findByPk(req.params.id)  
     await deletedItem.destroy()
    res.send(await Item.findAll())
  } catch (error) {
    next(error)  
  }
})

//GET ITEMS (READ)
router.get('/', async (req, res, next) => {
  try{
    const items = await Item.findAll()
    res.send(items)
  } catch (error) {

  }
})

//GET SINGLE ITEM (READ)
router.get('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id)
    res.send(item)
  } catch (error) {
    next(error)
  }
})

//EDIT ITEM (UPDATE/PUT)
router.put('/:id', async (req, res, next) => {
  try{
    const updatedItem = await Item.update(req.body, 
      {where: {id: req.params.id}})
    res.send(await Item.findAll())
  } catch (error){
    next(error)
  }
})

module.exports = router

