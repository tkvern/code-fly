/**
 * 判断是否为后序遍历的结果
 * @param {number[]} postorder
 */
function verifyPostorder(postorder) {
  if (!postorder || postorder.length < 2) return true
  let mid = 0
  let root = postorder[postorder.length - 1]
  for (let i = 0; i < postorder.length - 1 && postorder[i] < root; i++) {
    mid++
  }
  for (let i = mid + 1; i < postorder.length - 1; i++) {
    if (postorder[i] < root) return false
  }
  return (
    verifyPostorder(postorder.slice(0, mid)) &&
    verifyPostorder(postorder.slice(mid + 1, postorder.length - 1))
  )
}

module.exports = verifyPostorder
