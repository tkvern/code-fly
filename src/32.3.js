/**
 * 层序遍历，之字形
 * @param {*} root
 */
function levelOrderTree(root) {
  if (!root) return []
  let queue = [root]
  let res = []
  let depth = 0
  let dir = true
  while (queue.length) {
    let queueLength = queue.length
    while (queueLength) {
      let node = queue.shift()
      queueLength--
      if (!node) continue
      if (!res[depth]) res[depth] = []
      if (dir) {
        node.val !== null && res[depth].push(node.val)
      } else {
        node.val !== null && res[depth].unshift(node.val)
      }
      queue.push(node.left, node.right)
    }
    depth++
    dir = !dir
  }
  return res
}

module.exports = levelOrderTree
