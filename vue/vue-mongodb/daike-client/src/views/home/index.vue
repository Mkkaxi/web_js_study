<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home/substitute" icon="shop">代课</van-tabbar-item>
      <van-tabbar-item to="/home/publish" icon="edit">发布</van-tabbar-item>
      <van-tabbar-item to="/home/course" icon="records">课程</van-tabbar-item>
      <van-tabbar-item to="/home/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>