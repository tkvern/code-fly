/**
 * 二叉树的深度
 * @param {*} root
 */
function maxDepth(root) {
  return root === null
    ? 0
    : 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

module.exports = maxDepth
