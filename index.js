const express = require('express')
const { Sequelize } = require('sequelize')
const { db, sequelize } = require('./server/db')
const app = express()
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt')
const {User} = require('./models');
const jwt = require('jsonwebtoken');
require("dotenv").config()
const SALT_COUNT = 10;

const port = 3000

//Allow CORS requests
app.use(cors());
// logging middleware
app.use(morgan('dev'));
// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// const userRouter = require('./routes/users')
// app.use('/users', userRouter);

const itemRouter = require('./routes/items')
app.use('/items', itemRouter);

/* ***************** YOUR ROUTE HANDLERS BELOW ***************** */

app.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    // Create a new user with the hashed password
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    // Generate a JWT token with user id and username as payload
    const token = jwt.sign(
      {
        id: newUser.id,
        username: newUser.username,
      },
      process.env.JWT_SECRET
    );

    // Send a success message with the token
    res.json({ message: 'success', token });
  } catch (error) {
    console.error(error);
    next(error);
  }
});


app.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ where: { username } });

    // If user not found or password doesn't match, send a 401 response
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.sendStatus(401);
      return;
    }

    // Generate a JWT token with user id and username as payload
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      process.env.JWT_SECRET
    );

    // Send a success message with the token
    res.json({ message: 'success', token });
  } catch (error) {
    console.error(error);
    next(error);
  }
});


app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})
