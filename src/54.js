/**
 * 查找二叉树最大的K个数
 * @param {*} root
 * @param {*} k
 */
function ktheLargest(root, k) {
  let res
  let t = 0
  function traverse(node) {
    if (!node || !node.val) return
    traverse(node.right)
    if (++t === k) res = node.val
    traverse(node.left)
  }
  traverse(root)
  return res
}

module.exports = ktheLargest
