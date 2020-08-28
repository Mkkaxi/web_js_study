<template>
  <div class="user">
    <p>{{userName}}</p>
    <!-- <button @click="handle">按钮</button> -->
    <button @click="changeBaby">养新的宠物</button>
  </div>  
</template>

<script>
export default {
  props: ['userName'],
  data() {
    return {
      name: 'p',
      title: '我是子组件title',
      newBaby: '小黑'
    }
  },
  methods: {
    handle() {
      this.$emit('titleChange', this.title)
    },
    changeBaby() {
      this.$emit('babyChange', this.newBaby)
    }
  }
}
</script>

<style>

</style>