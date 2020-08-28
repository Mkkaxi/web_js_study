<template>
  <div class="home">
    <p>{{title}}</p>
    <User :userName="name" @titleChange="updateTitle"></User>
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/User'

export default {
  name: 'Home',
  data() {
    return {
      name: 'cg',
      title: ''
    }
  },
  components: {
    User
  },
  methods: {
    updateTitle(e) {
      // this.$emit('titleChange', this.title)
      console.log(e);
      this.title = e
    }
  }
}
</script>
