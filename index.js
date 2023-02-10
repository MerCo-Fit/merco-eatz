const express = require('express')
const { Sequelize } = require('sequelize')
const { db } = require('./db')
const app = express()
const port = 3000

const userRouter = require('./routes/users')
app.use('/users', userRouter);

const itemRouter = require('./routes/items')
app.use('/items', itemRouter);

app.listen(port, () => {
    db.sync();
    console.log(`Listening on port ${port}`)
})