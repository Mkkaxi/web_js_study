<template>
  <div class="animal">
    <p>我的宠物：{{baby}}</p>
    <p>{{newBaby}}</p>
  </div>
</template>

<script>
export default {
  props: ['newBaby'],
  data() {
    return {
      baby: '小白',
    }
  }
}
</script>

<style>

</style>