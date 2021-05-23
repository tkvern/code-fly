/**
 * 是否是对称二叉树
 * @param {*} tree
 * @returns {boolean}
 */
function isSymmtric(tree) {
  function dfs(left, right) {
    if (!left && !right) return true
    if (!left || !right || left.val !== right.val) return false
    return dfs(left.left, right.right) && dfs(left.right, right.left)
  }
  if (!tree) return true
  return dfs(tree.left, tree.right)
}

module.exports = isSymmtric
