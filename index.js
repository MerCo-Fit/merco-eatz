const express = require('express')
const { sequelize } = require('./server/db')
const app = express()
const port = 3000

// const userRouter = require('./routes/users')
// app.use('/users', userRouter);

const itemRouter = require('./routes/items')
app.use('/items', itemRouter);

app.listen(port, async() => {
    await sequelize.sync();
    console.log(`Listening on port ${port}`)
})