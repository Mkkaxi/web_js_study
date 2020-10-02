const User_col = require('../models/user')
const Password_col = require('../models/password')
const passport = require('../utils/passport')

const get = async (ctx, next) => {
  ctx.status = 200
  ctx.body = {
    msg: 'get request',
    data: {
      data: 'hello world'
    }
  }
}

// 登录
const login = async (ctx, next) => {
  const req = ctx.request.body
  
  // 获取用户userId
  const user = await User_col.findOne({
    account: req.account
  }, {
    __v: 0,
    _id: 0
  })
  if(!user) {
    ctx.status = 200
    ctx.body = {
      code: 0,
      msg: '账号不存在!'
    }
    return
  }
  const userId = user.userId

  // 获取数据库中的hash
  const pass = await Password_col.findOne({
    userId
  }, {
    hash: 1
  })

  const match = await passport.validate(req.password, pass.hash)
  ctx.status = 200
  if (match) {
    ctx.body = {
      code: 1,
      msg: '登录成功',
      data: user
    }
    return
  }
  ctx.body = {
    code: 0,
    msg: '密码错误'
  }
}

module.exports = {
  get,
  login
}