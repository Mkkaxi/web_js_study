<template>
  <div class="methods">
    <p>{{count}}</p>
    <button @click="add(4, $event)">add</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add(num, e) {
      this.count += num
      console.log(e);
    }
  }
}
</script>

<style>

</style>