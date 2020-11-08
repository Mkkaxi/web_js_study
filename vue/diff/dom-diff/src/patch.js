

let allPatches
function patch(node, patches) {
  // 给元素打补丁
  allPatches = patches

  walk(node)
}

function walk(node) {
  let currentPatch = patches[index++]
  let childNodes = node.childNodes
  childNodes.forEach(child => walk(child))
}

export default patch