// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  classes: ['cancel-class'],

  properties: {
    placeholder: String,
    customClass: String,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function onChange(event) {
      console.log(event.detail);
      // this.$emit('search', event.detail)
      this.triggerEvent('search',event.detail)
    }
  }
})
