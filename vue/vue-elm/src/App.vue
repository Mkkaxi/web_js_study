<template>
  <div id="app">
    <v-header></v-header>
    <!-- header组件 -->
    <router-view/>
  </div>
</template>

<script>
import VHeader from '@/components/v-header/v-header.vue';

export default {
  components: {
    VHeader,
  },
};
</script>

<style lang="stylus" scoped>

</style>
