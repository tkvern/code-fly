const { createTree } = require('./base')
/**
 * 二叉树转双链表
 * @param {*} root
 */
function treeToDoublyList(root) {
  function dfs(cur) {
    if (!cur) return
    dfs(cur.left)
    if (!pre) head = cur
    else pre.right = cur
    cur.left = pre
    pre = cur
    dfs(cur.right)
  }

  if (!root) return null
  let head, pre
  dfs(root)
  head.left = pre
  pre.right = head
  return head
}

let tree = createTree([4, 2, 5, 1, 3])

treeToDoublyList(tree)

module.exports = treeToDoublyList
