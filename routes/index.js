const express = require('express')
const userController = require('../controller/user')
const router = express.Router()
const app = require('../controller/app')

/* GET home page. */
router.get('/', app.index)
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Inspire' })
// })

/* GET user profile. */
router.get('/user', userController.index)

module.exports = router