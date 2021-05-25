/**
 * 查找二叉树和为某一值的路径
 * @param {*} root
 * @param {*} sum
 */
function pathSum(root, sum) {
  if (!root) return []
  let res = []
  function dfs(node, sum, arr) {
    if (!node) return
    arr = [...arr, node.val]
    if (node.val === sum && !node.left && !node.right) {
      res.push(arr)
      return
    }
    dfs(node.left, sum - node.val, arr)
    dfs(node.right, sum - node.val, arr)
  }
  dfs(root, sum, [])
  return res
}
module.exports = pathSum
