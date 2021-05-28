function isBalanced(root) {
  if (!root) return true
  if (!isBalanced(root.left) || !isBalanced(root.right)) return false
  if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false
  return true
}

function getDepth(node) {
  return node === null
    ? 0
    : 1 + Math.max(getDepth(node.left), getDepth(node.right))
}

module.exports = isBalanced
