const express = require('express')
const userController = require('../controller/user')
const router = express.Router()
const app = require('../controller/app')
const quoteController = require('../controller/quote')
const feelingController = require('../controller/feeling')

/* GET home page. */
router.get('/', app.index)

// Routes for users
router.get('/user', userController.index)
router.post('/user/:id', userController.create)
router.patch('/user/:id', userController.update)
router.get('/user/:id/edit', userController.edit)

router.get('/feeling', feelingController.list)

// Routes for a new Quote
router.get('/quote', quoteController.list)
router.patch('/quote/:id', quoteController.update)
router.get('/quote/new', quoteController.new)
router.get('/quote/:id', quoteController.show)
router.post('/quote', quoteController.create)
router.get('/quote/:id/edit', quoteController.edit)
router.put('/quote/:id', quoteController.update)
router.delete('/quote/:id', quoteController.delete)

module.exports = router