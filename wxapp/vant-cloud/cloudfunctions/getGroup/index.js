// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'text-ka50i'

cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext().OPENID


  let groupList = await db.collection('user-group').where({
    userId: openId
  }).get()
  let returnResult = []
  for (let i = 0; i < groupList.data.length; i++) {
    const oneGroup = await db.collection('group').where({
      _id: groupList.data[i].groupId,
      deleted: false
    }).get()
    if (oneGroup.data.length > 0) {

      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].createBy
      }).get()

      oneGroup.data[0].createBy = userInfo.data[0]
      oneGroup.data[0].relateUserGroupId = groupList.data[i]._id
      returnResult.push(oneGroup.data[0])
    }

  }

  return returnResult
}