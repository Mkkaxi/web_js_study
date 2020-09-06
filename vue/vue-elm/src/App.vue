<template>
  <div id="app">
    <v-header></v-header>
    <!-- header组件 -->
    <router-view/>
  </div>
</template>

<script>
import VHeader from '@/components/v-header/v-header.vue';
import { getSeller } from '@/api'

export default {
  data() {
    return {
      seller: {}
    }
  },
  created() {
    _getSeller()
  },
  methods: {
    _getSeller() {
      getSeller({
        id: '1'
      }).then((seller) => {
        console.log(seller);
      })
    }
  },
  components: {
    VHeader,
  },
};
</script>

<style lang="stylus" scoped>

</style>
