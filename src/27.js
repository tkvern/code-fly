function mirrorTree(tree) {
  if (!tree) {
    return null
  }
  let [left, right] = [tree.right, tree.left]
  tree.left = left
  tree.right = right
  mirrorTree(tree.left)
  mirrorTree(tree.right)
  return tree
}

module.exports = mirrorTree
