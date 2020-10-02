const Router = require('koa-router')
const router = new Router()
const user_controller = require('./../../app/controllers/user_controller')

router.get('/get', user_controller.get)

router.post('/login', user_controller.login)

module.exports = router