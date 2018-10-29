const express = require('express')
const userController = require('../controller/user')
const router = express.Router()
const app = require('../controller/app')
const quoteController = require('../controller/quote')
const feelingController = require('../controller/feeling')

/* GET home page. */
router.get('/', app.index)


router.get('/user', userController.index)

router.get('/feeling', feelingController.list)

// Routes for a new Quote
router.get('/quote', quoteController.list)
router.get('/new', quoteController.new)
router.get('/:id', quoteController.show)
router.post('/quote', quoteController.create)
router.get('/:id/edit', quoteController.edit)
// router.put('/:id', quoteController.update)
router.patch('/quote/:id', quoteController.update)
// router.delete('/:id', quoteController.delete)

module.exports = router