<template>
<a-layout id="components-layout-demo-fixed">
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
    <div class="logo" />
    <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }"  v-model='state.selectedKeys'>
      <a-menu-item key="1">
        <router-link to="/">首页</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/plan">计划</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
  <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>List</a-breadcrumb-item>
      <a-breadcrumb-item>App</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
      <router-view></router-view>
    </div>
  </a-layout-content>
  <a-layout-footer :style="{ textAlign: 'center' }">
    Ant Design ©2018 Created by Ant UED
  </a-layout-footer>
</a-layout>
</template>

<script>
// composition api
import { computed, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup (props, context) {  // 入口函数  默认只执行一次， 里面没有this 拿不到cue实例

    const route = useRoute()
    const state = reactive({
      // selectedKeys: ['1']
    })

    const selectedKeys = computed(() => {
      return [route.path]
    })

    // watch(() => route.path, (newVal) => {
    //   state.selectedKeys = [newVal]
    // }, { immediate: true})  // immediate  立即执行

    return {
      ...toRefs(state),  // 保证数据是响应式的，且做了解构
      selectedKeys
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
