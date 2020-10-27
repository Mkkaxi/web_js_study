<template>
  <div>
    <input type="file" name="" @change="handleFileChange">
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
const SIZE = 10 * 1024 * 1024 // 切片的大小
export default {
  data() {
    return {
      container: {
        file: null
      },
      data: []
    }
  },
  methods: {
    // 生成切片文件
    createFileChunk(file, size = SIZE) {
      const fileChunkList = []
      let cur = 0
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) })
        cur += size
      }
      return fileChunkList
    },
    // 上传切片
    async uploadChunks() {
      const requestList = this.data.map(({ chunk, hash }) => {
        const formData = new FormData()
      })
    },

    handleFileChange(e) {
      console.log(e);
      const [file] = e.target.files
      if (!file) return
      Object.assign(this.$data, this.$options.data())
      this.container.file = file
    },
    async handleUpload() {

    },
    //  封装原生请求
    request({ url, methods = 'post', headers = {}, requestList} ) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.open(methods, url)
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key])
        })
        xhr.send(data)
        xhr.onload = e => {
          resolve({
            data: e.target.response
          })
        }
      })
    }
  }
}
</script>

<style>

</style>