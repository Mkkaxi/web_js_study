<template>
  <div class="hello">
    hello world
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  beforeCreate() {
    console.log('son beforeCreate');
  },
  Created() {
    console.log('son Created');
  },
  beforeMount() {
    console.log('son beforeMount');
  },
  mounted() {
    console.log('son Mounted');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
