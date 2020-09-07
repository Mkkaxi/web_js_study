<template>
  <div class="home">
    <p>首页的子组件</p>
    <hr/>
    <h3>{{count}}</h3>
    <div class="btn">
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      msg: 'hello world'
    }
  },
  store,
  // computed: {
  //   count() {
  //     return  this.$store.state.count
  //   }
  // },
  // cpmputed: mapState({
  //   count: state => state.count
  // }),
  computed: mapState(['count']),
  // methods: {
  //   add() {
  //     this.$store.commit('add', 10)
  //   },
  //   reduce() {
  //     this.$store.commit('reduce')
  //   }
  // }
  // methods: mapMutations(['add','reduce'])
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapGetters(['abc'])
  }
}
</script>

<style>

</style>