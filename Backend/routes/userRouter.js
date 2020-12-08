const router = require('express').Router()
const userControl = require('../controllers/userControl')
const auth = require('../middleware/auth')

router.post('/register', userControl.register)

router.post('/login', userControl.login)

router.get('/logout', userControl.logout)

router.get('/refresh_token', userControl.refreshToken)

router.get('/info', auth, userControl.getUser)

module.exports = router