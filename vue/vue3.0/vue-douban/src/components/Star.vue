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
export default {
  props: ['rating']
}
</script>

<style lang="less">
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