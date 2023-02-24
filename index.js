const express = require('express')
const { sequelize } = require('./server/db')
const app = express()
const port = 3000

// const userRouter = require('./routes/users')
//app.use('/users', userRouter);

const itemRouter = require('./routes/items')
app.use('/items', itemRouter);

const init = async () => {
  try {
    await sequelize.sync();

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();
