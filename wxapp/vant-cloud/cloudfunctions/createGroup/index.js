// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'text-ka50i'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {

  // console.log(event); // {groupName: '', userInfo: { appId: '', openId: ''} }
  const userInfo = event.userInfo
  //  连通数据库
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy: userInfo.oppId,
      createTime: new Date(),
      deleted: false,
      updateTime: new Date()  
    }
  })
  .then(res => {
    return db.collection('user-group').add({
      data: {
        groupId: res._id,
        userId: userInfo.oppId,
        invalid: false
      }
    })
  })
}