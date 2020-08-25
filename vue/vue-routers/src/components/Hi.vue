<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-link :to="{name: 'hi1', params: {name: 'ly'}}">Hi-</router-link>
    <span style="display: inline-block; width: 50px"></span>
    <router-link to="/hi/hi2">Hi--</router-link>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Hi, I am wn'
    }
  }
}
</script>

<style>

</style>