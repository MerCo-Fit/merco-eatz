const express = require("express");
const router = express.Router();

// different model routers
router.use('/items', require('./items'));

module.exports = router;






// const express = require('express');
// const { User } = require("../models/index");
// const { Item } = require("../models/index");

// const router = express.Router()

// router.use(express.json())
// router.use(express.urlencoded({
//     extended: true
// }))

