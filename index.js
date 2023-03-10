const express = require("express");
const { Sequelize } = require("sequelize");
const { db, sequelize } = require("./server/db");
const app = express();
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { User } = require("./models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SALT_COUNT = 10;

const port = 3000;

//Allow cors requests
app.use(cors());
// logging middleware
app.use(morgan("dev"));
// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/////////////////////////////

const itemRouter = require("./routes/items");
app.use("/items", itemRouter);

// Creating a new User
app.post("/register", async (req, res, next) => {
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
    res.json({ message: "success", token });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.post("/login", async (req, res, next) => {
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
    res.json({ message: "success", token });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const setUser = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.sendStatus(401);
    }
    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    console.error(err);
    return res.sendStatus(401);
  }
};

// ADD a new Item //
app.post("/items", setUser, async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const { meal, title, protein, ingredients } = req.body;
    const item = await Item.create({
      meal,
      title,
      protein,
      ingredients,
      chef: req.user.id,
    });
    res.send({
      id: item.id,
      meal: item.meal,
      title: item.title,
      protein: item.protein,
      ingredients: item.ingredients,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// DELETE /items/:id
app.delete("/items/:id", setUser, async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.sendStatus(404);
    }
    if (item.chef !== req.user.id) {
      return res.sendStatus(401);
    }
    await item.destroy();
    res.send({ message: "success" });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// error handling middleware, so failed tests receive them
app.use((error, req, res, next) => {
  console.error("SERVER ERROR: ", error);
  if (res.statusCode < 400) res.status(500);
  res.send({ error: error.message, name: error.name, message: error.message });
});

// we export the app, not listening in here, so that we can run tests
module.exports = app;

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});


