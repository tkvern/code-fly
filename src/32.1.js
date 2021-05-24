/**
 * 层序打印二叉树 ，从左到右
 */
function levelOrderTree(root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length) {
    let node = queue.shift()
    if (!node) continue
    if (node.val !== null) {
      res.push(node.val)
    }
    queue.push(node.left, node.right)
  }
  return res
}

module.exports = levelOrderTree
