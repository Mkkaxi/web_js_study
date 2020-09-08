<template>
  <div class="header">
    <div class="header-icon" @click="setShowSidebar(true)">
      <slot name="left-icon"></slot>
    </div>
    <div class="header-cont">
      <slot name="content"></slot>
    </div>
    <div class="header-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['setShowSidebar']),
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';
.header
  height px2rem(88) 
  line-height px2rem(88) 
  display flex
  align-items center
  justify-content space-between
  text-align center
  font-size px2rem(30)
  &-icon 
    flex 0 0 px2rem(88)
    margin-top px2rem(6)
    .iconfont
      font-size px2rem(48)
</style>