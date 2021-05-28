/**
 * 二叉搜索树的最近公共祖先
 * @param {*} root
 * @param {*} p
 * @param {*} q
 */
function lowestCommonAncestor(root, p, q) {
  if (!root) return null
  if (root.val < p && root.val < q) {
    return lowestCommonAncestor(root.right, p, q)
  } else if (root.val > p && root.val > q) {
    return lowestCommonAncestor(root.left, p, q)
  }
  return root.val
}

module.exports = lowestCommonAncestor
