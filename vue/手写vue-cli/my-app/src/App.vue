<template>
  <div id="id">
    <router-link to="/login">登录</router-link>
    <router-link to="/">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>

<style>
  body {
    height: 500px;
    background: red;
  }
</style>