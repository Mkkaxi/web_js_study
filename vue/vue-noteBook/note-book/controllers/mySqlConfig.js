var mysql = require('mysql')
var config = require('./defaultConfig')

// 连接线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 统一连接数据库的方法
let allServices = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {   // 建立连接数据库
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release() // 释放连接
          })
        }
      })
    })
  }
}

// 读取所有users表数据
let getAllUsers =function() {
  let _sql = `select * from users;`
  return allServices.query(_sql)
}

// 用户登录
let userLogin = function(username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function(username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}

// 用户注册
let insertUser = function(value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?`
  return allServices.query(_sql, value)
}

// 根据分类名查找对应的笔记列表
let findNoteListByType = function(note_type, userId) {
  let _sql = `select * from note where note_type="${note_type}" and useId="${userId}"`
  return allServices.query(_sql)
}

// 根据文章id查找文章详情
let findNoteDetailById = function(id) {
  let _sql = `select * from note where id="${id}"`
  return allServices.query(_sql)
}

// 导出方法
module.exports = {
  getAllUsers,
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findNoteDetailById
}