const router = require('koa-router')()
const UserService = require('../controllers/mySqlConfig')
const utils = require('../controllers/utils')

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
router.post('/userRegister', async(ctx, next) => {
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
    username: _username,
    userpwd: _userpwd,
    nickname: _nickname
  }
  await UserService.findUser(user.username).then(async(res) => {
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
        let r = ''
        if (res.affectedRows !== 0) {
          r = 'ok'
          ctx.body = {
            code: '80000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '80004',
            data: r,
            mess: '注册失败'
          }
        }
      })
      .catch((err) => {
        ctx.body = {
          code: '80002',
          data: err
        }
      })
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

router.post("/userLogin", async (ctx, next) => {
  const _username = ctx.request.body.username;
  const _userpwd = ctx.request.body.userpwd;
  if (_username && _userpwd) {
    await UserService.userLogin(_username, _userpwd).then((res) => {
      if (res.length !== 1) {
        try {
          throw Error("用户密码错误");
        } catch (err) {
          console.log(err);
        }
        ctx.body = {
          code: "80005",
          data: "err",
          msg: "账号密码错误",
        };
      } else {
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username
        }
        ctx.body = {
          code: "80000",
          r:res,
          msg: "登录成功",
          result
        };
      }
    });
  } else {
    ctx.body = {
      code: "80001",
      msg: "用户名、密码或昵称不能为空",
    };
  }
});

// 根据分类名查找对应笔记列表
router.post('/findNoteListByType', async(ctx, next) => {
  const note_type = ctx.request.body.note_type
  const userId = ctx.request.body.userId
  await UserService.findNoteListByType(note_type, userId).then(async(res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

// 根据文章id查找文章详情
router.post('/findNoteDetailById', async(ctx, next) => {
  const id = ctx.request.body.id
  await UserService.findNoteDetailById(id).then(async(res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res[0],
        mess: '查询成功'
      }
    } else {
      r = 'error',
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查询失败'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

router.post('/insertNote', async(ctx, next) => {
  let c_time = utils.getNowFormatDate()
  let m_time = utils.getNowFormatDate()
  let note_content = ctx.request.body.note_content
  let head_img = ctx.request.body.head_img
  let title = ctx.request.body.title
  let note_type = ctx.request.body.note_type
  let useId = ctx.request.body.userId
  let nickname = ctx.request.body.nickname
  await UserService.insertNote([c_time, m_time, note_content, head_img, title, note_type, useId, nickname]).then(async(res) => {
    
    let r = ''
    if (res.affectedRows !== 0) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: r,
        mess: '发表成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '发表失败'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

module.exports = router
