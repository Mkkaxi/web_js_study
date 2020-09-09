<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search-box @query="onQueryChange"></v-search-box>
    </div>
    <!-- 热搜 -->
    <div class="shortcut-wrapper" ref="shortcutWrapper">
      <v-scroll>
        
      </v-scroll>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import { searchMixin } from '@/common/js/mixin'

export default {
  components: {
    'v-search-box': searchBox
  },
  mixins: [searchMixin],
  methods: {
    
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function.styl";
.search 
  overflow hidden
  .search-box-wrapper 
    margin px2rem(40px)
  
  .shortcut-wrapper 
    position fixed
    top px2rem(360px)
    bottom 0
    width 100%
    .shortcut 
      height 100%
      overflow hidden
      .hot-key 
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title 
          margin-bottom px2rem(40px)
          font-size 14px
          color hsla(0,0%,100%,.5)
        
        .item 
          display inline-block
          padding px2rem(10px) px2rem(20px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 6px
          background #2f3054
          font-size 14px
          color hsla(0,0%,100%,.3)
        
      
      .search-history 
        position relative
        margin 0 px2rem(40px)
        .title 
          display flex
          align-items center
          height px2rem(80px)
          font-size 14px
          color hsla(0,0%,100%,.5)
          .text 
            flex 1
          
          .clear 
            // extend-click()
            .icon 
              font-size 18px
              color hsla(0,0%,100%,.3)
            
          
        
      
    
  
  .search-result 
    position fixed
    width 100%
    top px2rem(360px)
    bottom 0
  

</style>
