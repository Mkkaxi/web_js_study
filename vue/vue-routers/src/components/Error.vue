<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Error:404'
    }
  },
  created() {
    console.log(this.$route.params); 
  }
}
</script>

<style>

</style>