<template>
  <div class="search-list" v-show="searches.length">
    <transition-group name="list" tag="ul" >
      <li class="search-item" v-for="(item, index) in searches" :key="item">
        <span class="text">{{item}}</span>
        <span class="icon-box" @click.stop="deleteOne(index)">
          <i class="iconfont icon-false"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    searches: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {
    deleteOne(index) {
      this.$emit('delete', index)
      console.log(1);
    }
  }
}
</script>

<style scoped lang="stylus">

.search-list 
  .search-item 
    display flex
    align-items center
    height 40px
    overflow hidden

    &.list-enter-active, &.list-leave-active 
      transition all 0.1s
    

    &.list-enter, &.list-leave-to 
      height 0
    

    .text 
      flex 1
      color hsla(0,0%,100%,.5)
    

    .icon-box 
      .iconfont 
        font-size 18px
        color hsla(0,0%,100%,.3)
</style>
