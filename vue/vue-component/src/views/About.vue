<template>
  <div class="about">
    <!-- <p>{{name}}</p> -->
    <User :userName="name" @babyChange="getBaby"></User>
    <Animal :newBaby="newBaby"></Animal>
  </div>
</template>

<script>
import User from '@/components/User'
import Animal from '@/components/Animal'
export default {
  data() {
    return {
      name: 'pp',
      newBaby: ''
    }
  },
  components: {
    User,
    Animal
    },
  methods: {
    getBaby(e) {
      this.newBaby = e
    }
  }

}
</script>


<style>
.about {
  color: red;
}
</style>
