// 类型相同的话，看属性
// 产生出来一个 { type: '', attrs: '', { class: 'list-group' } }
// 新的dom节点不存在 { type: 'remove',  index: xxx }
// 类型不同的话， 直接替换整个dom
// 文本不一样 { type: 'text', text: 1 }


function diff(oldTree, newTree) {
  let patches = {}
  let index = 0

  walk(oldTree, newTree, patches, index)
  return patches
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {}
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key]  // 有可能会是 undefined
    }
  }

  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key]
    }
  }

  return patch
}

function diffChildren(oldChildren, newChildren, patches, index) {
  // 比较老的第一个和新的第一个
  oldChildren.forEach((child, idx) => {
    walk(child, newChildren[idx], patches, ++Index)
  })
}

function isString(node) {
  return Object.prototype.toString.call(node) == '[object String]'
}

const ATTRS = 'ATTRS'
const TEXT = 'TEXT'
const REMOVE = 'REMOVE'
const REPLACE = 'REPLACE'
let Index = 0
function walk(oldTree, newTree, patches, index) {
  let currentPatch = []
  if (!newTree) {
    currentPatch.push({ type: REMOVE, index})
  } else if (isString(oldTree) && isString(newTree)) {
    if (oldTree !== newTree) {
      currentPatch.push({type: TEXT, text: newTree})
    }
  } else if (oldTree.type === newTree.type) {
    // 比较属性是否一致
    let attrs = diffAttr(oldTree.props, newTree.props)
    if (Object.keys(attrs).length > 0) {
      currentPatch.push({type: ATTRS, attrs})
    }

    // 如果有子节点，就遍历子节点
    diffChildren(oldTree.children, newTree.children, patches, index)
  } else {
    // 说明节点被替换了
    currentPatch.push({type: REPLACE, newTree})
  }
  if (currentPatch.length > 0) { // 当前元素确实有补丁
    patches[index] = currentPatch
    console.log(patches);
  }
}


export default diff