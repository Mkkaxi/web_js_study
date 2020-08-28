<template>
  <div class="detail">
    <h1>Computed 计算属性</h1>

    <div class="price">
      {{totalPrice}}
    </div>

    <div class="news" v-for="(item, index) in reverseNews" :key="index">
      {{item.title}} ---- {{item.date}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      num: 4,
      news: [
        { title: '台媒曝台军采购美国巡航导弹总价达约800亿 网民：掏空台湾', date: '2020/08/24'},
        { title: '伊朗外交部发言人: 美国已被孤立 行走自贸区', date: '2020/08/25'},
        { title: '为"十四五"建言献策  中非团结合作实现可持续发展', date: '2020/08/26'},
        { title: '中国陆续重开电影院 美国媒体各种对比分析来了', date: '2020/08/27'}
      ]
    }
  },
  computed: {
    totalPrice: function() {
      return this.price * this.num
    },
    reverseNews: function() {
      let news = this.news
      return news.reverse()
    }
  }
}
</script>

<style>

</style>