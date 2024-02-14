const express = require ('express')
const router = express.Router()
const userController = require('../Controllers/userController')


// registration
router.post('/register',userController.register)

// get details
router.get('/details',userController.getDetails)

module.exports = router;
