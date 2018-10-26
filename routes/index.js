const express = require('express')
const userController = require('../controller/user')
const router = express.Router()
const app = require('../controller/app')
const quoteController = require('../controller/quote')
const feelingController = require('../controller/feeling')

/* GET home page. */
router.get('/', app.index)
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Inspire' })
// })

/* GET user profile. */
router.get('/user', userController.index)


// Routes for a new Quote
// Create a GET new route "/new" that triggers the quote controller new function
router.get('/new', quoteController.new)
// Create a GET show route "/:id" that triggers the quote controller show function
router.get('/:id', quoteController.show)
// Create a POST index route "/" that triggers the quote controller create function
router.post('/', quoteController.create)
// Create a GET edit route "/:id/edit" that triggers the quote controller edit function
router.get('/:id/edit', quoteController.edit)
// Create a PUT update route "/:id" that triggers the quote controller update function
router.put('/:id', quoteController.update)
// Create a PATCH update route "/:id" that triggers the quote controller update function
router.patch('/:id', quoteController.update)
// Create a DELETE delete route "/:id" that triggers the quote controller delete function
router.delete('/:id', quoteController.delete)

router.get('/feeling', feelingController.list)




module.exports = router