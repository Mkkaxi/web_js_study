<template>
  <div class="child1">
    child1
    <button @click="sendMsg">传值给老二</button>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  data() {
    return {
      msg: '我是child1里面的数据'
    }
  },
  methods: {
    sendMsg() {
      bus.$emit('info', this.msg)
    }
  }
}
</script>

<style>

</style>