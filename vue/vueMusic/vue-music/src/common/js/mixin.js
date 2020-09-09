export const searchMixin = {
  data() {
    return {
      query: ''
    }
  },
  computed: {

  },
  methods: {
    onQueryChange(e) {
      // console.log(e);
      this.query = e.trim()
    }
  }
}