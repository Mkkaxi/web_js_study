['1', '2', '3'].map(parseInt)


['1', '2', '3'].map((item, index) => {
  return parseInt(item, index)
})

parseInt(1, 0) // 默认十进制   1
parseInt(2, 1) // 无一进制     NAN
parseInt(3, 2) // 二进制中无3这个数字  NAN