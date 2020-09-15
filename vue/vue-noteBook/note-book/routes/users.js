const config = require('../controllers/defaultConfig')

const router = require('koa-router')()
const UserService = require('../controllers/mySqlConfig')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async(ctx, next) => {
  await UserService.getAllUsers().then((res) => {
    ctx.body = res
  })
})

// 登录注册
router.post('./userRegister', async(ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd
  var _nickname = ctx.request.body.nickname
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80001',
      mess: '用户名、密码或昵称不能为空'
    }
    return
  }
  let user = {
    username = _username,
    userpwd = _userpwd,
    nickname = _nickname
  }
  await UserService.findUser(user.username).then(async() => {
    if (res.length) {
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error);
      }
      ctx.body = {
        code: '80003',
        data: 'err',
        mess: '用户名已存在'
      }
    } else {
      await UserService.insertUser([user.username, user.userpwd, user.nickname])
      .then((res) => {
        console.log(res);
      })
    }
  })
})

module.exports = router
