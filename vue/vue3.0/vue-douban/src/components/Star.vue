<template>
  <div class="star-box">
    <div class="score-star">
      <template v-for="(item, index) in rating.stars" :key="index">
        <img v-if="item" src="../assets/images/star.png" alt="">
        <img v-else src="../assets/images/no-star.png" alt="">
      </template>
    </div>
    <div class="score">
      {{rating.score}}
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: ['scope'],
  setup(props) {
    const state = reactive({
      rating: {
        stars: [0, 0, 0, 0, 0],
        score: props.scope
      }
    })

    let num = Math.floor(props.scope / 2)
    for (let i = 0; i < num; i++) {
      state.rating.stars[i] = 1
    }

    return{
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less" scoped>
  .flex-row{
    display: flex;
    align-items: center;
  }
  
  .star-box{
   .flex-row()
  }

  .score-star{
    .flex-row();
    img{
      width: 10px;
      height: 10px;
    }
  }

  .score{
    font-size: 14px;
    color: #999;
    margin-left: 5px;
  }
</style>