<template>
  <div class="home">
    <v-header></v-header>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  components: {
    'v-header': Header
  }
}
</script>
