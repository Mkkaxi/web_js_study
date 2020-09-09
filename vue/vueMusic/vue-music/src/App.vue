<template>
  <div id="app">
    <v-header>
      <i class="iconfont icon-entypomenu" slot="left-icon"></i>
      <span slot="content">我的音乐</span>
      <i class="iconfont icon-user" slot="right-icon"></i>
    </v-header>
    <v-tab></v-tab>
    
    <keep-alive>
      <router-view/>
    </keep-alive>

    <!-- menu -->
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import tab from '@/components/tab'
export default {
  components: {
    'v-header': header,
    'v-sidebar': sidebar,
    'v-tab': tab
  }
}
</script>

<style lang="stylus">
html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}

</style>
