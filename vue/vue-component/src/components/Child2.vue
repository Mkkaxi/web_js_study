<template>
  <div class="child2">
    child2 {{msg}}
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  data() {
    return {
      msg: ''
    }
  },
  created() {
    bus.$on('info', (val) => {
      console.log(val);
      this.msg = val
    })
  }
}
</script>

<style>

</style>