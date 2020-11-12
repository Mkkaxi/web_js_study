import add from './add.js'
import min from './min.js'
// import { debounce } from 'loadsh'
import debounce from 'loadsh/debounce'

// 1.e es-Module  在静态分析的时候就能知道引入了哪些模块
// 2. webpack production 会开启tree-shaking
// 3. 每个模块假如存在（副作用），想剔除它 "sideEffects": false,
// 基本上只要不是pollyFill(垫片)形式的（副作用）都能加上 "sideEffects": false,
// 4. 第三方模块（lodash/element-ui）不是 es-Module
// babel
console.log(add(4, 5));
console.log(min(4, 5));