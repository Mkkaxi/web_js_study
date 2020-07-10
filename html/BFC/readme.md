# 浮动 float
  浮动会让元素脱离文档流 间接导致父容器高度坍塌
  文本环绕展示，dom结构重叠

# 清除浮动带来的负面影响
  1. 在浮动元素最后面添加一个空容器 <div style="clear: left;"></div>

  2. 给浮动元素父容器最后面添加一个伪类
  //伪类：和：：差别，兼容问题，ie不支持：
          .clearfix::after {
            content: '';
            clear: both;
            display: block;
        }
    
  3. BFC -- Block Formatting Context
     解决元素脱离文档流带来的负面影响,以及margin重叠问题
