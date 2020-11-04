<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :left-arrow="leftArrow"
      @click-left="goBack"
    />

    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      shape="round"
      background="#42bd56"
      @focus="onFocus"
    />
  </div>
</template>

<script>
import { NavBar, Search } from 'vant'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props: {
    title: {
      type: String,
      default: '首页'
    },
    leftArrow: {
      type: Boolean,
      default: true
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search
  },
  setup(props) {
    const router = useRouter()
    const leftText = ref('')
    leftText.value = props.leftArrow ? '返回' : ''

    function goBack() {
      router.go(-1)
    }

    function onFocus() {
      router.push('/search')
    }

    return {
      leftText,
      goBack,
      onFocus
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar{
  &::after{
    border-bottom-width: 0px;
  }
}
</style>