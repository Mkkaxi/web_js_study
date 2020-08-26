<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- 路由入口 -->
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
