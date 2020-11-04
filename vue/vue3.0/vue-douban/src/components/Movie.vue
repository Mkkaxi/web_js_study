<template>
  <div class="movie-box">
    <van-image class="cover-image" radius="5px" :src="movie.img">
      <template v-slot:error>
        <img
          class="cover-image"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604470682578&di=d54f9d6ec8540206f9c6436efaac05bb&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Fmw690%2F006LkWGbly1gjzly4jhx5j33344mo4qs.jpg"
          alt=""
        />
      </template>
    </van-image>
    <div class="title">{{ movie.nm }}</div>
    <Star :scope="movie.sc" />
  </div>
</template>

<script>
import { Image } from "vant";
import Star from "./Star";
export default {
  components: {
    Star,
    [Image.name]: Image,
  },
  props: ["movie"],
};
</script>

<style scoped>
.movie-box {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 205px;
  margin-left: 10px;
}
.cover-image {
  width: 100px;
  height: 145px;
}
.title {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  text-align: left;
  font-weight: bold;
}
</style>