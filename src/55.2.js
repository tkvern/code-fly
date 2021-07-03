function isBalanced(root) {
  // if (!root) return true
  // if (!isBalanced(root.left) || !isBalanced(root.right)) return false
  // if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false
  // return true
  return getDepth(root) >= 0
}

/**
 * 自顶向下的递归，时间复杂度 O(n^2)
 * @param {*} node
 * @returns
 */
// function getDepth(node) {
//   return node === null || node.val === null
//     ? 0
//     : 1 + Math.max(getDepth(node.left), getDepth(node.right))
// }

/**
 * 自底向上的递归，时间复杂度 O(n)
 * @param {*} root
 * @returns
 */
function getDepth(root) {
  if (!root || !root.val) return 0
  let leftDepth = getDepth(root.left)
  let rightDepth = getDepth(root.right)
  if (
    leftDepth === -1 ||
    rightDepth === -1 ||
    Math.abs(leftDepth - rightDepth) > 1
  ) {
    return -1
  } else {
    return Math.max(leftDepth, rightDepth) + 1
  }
}

module.exports = isBalanced
