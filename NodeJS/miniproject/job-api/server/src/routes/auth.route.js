const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const { validateEmail, validatePassword } = require('../middlewares/validation')


router.post('/signup', validateEmail, validatePassword, authController.signUp)
router.post('/signin', validateEmail, validatePassword, authController.SignIn)

module.exports = router 