<template>
  <div class="movie-section">
    <div class="movie-category">
      <div class="category-name">{{movie_key.name}}</div>
      <router-link :to="'/more/' + section.type">
        <div class="category-more">查看更多</div>
      </router-link>
    </div>
    <div class="movie-list">
      <Movie
        v-for="(item, index) in section.movies.movieList || section.movies.coming"
        :key="index"
        :movie="item"
      ></Movie>
    </div>
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";
export default {
  props: ["section", "movie_key"],
  components: {
    Movie,
  },
};
</script>

<style scoped>
.movie-section {
  margin-top: 20px;
}

.movie-category {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.category-name {
  width: 80px;
  height: 18px;
  line-height: 18px;
  color: #333333;
  font-weight: bold;
  font-size: 16px;
  border-left: 3px solid #42bd56;
}

.category-more {
  width: 80px;
  font-size: 16px;
  color: #42bd56;
}

.movie-list {
  display: flex;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  overflow-x: scroll;
}
</style>