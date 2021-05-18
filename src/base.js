/**
 * 二叉树
 * @param {*} val
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * 节点
 * @param {*} value
 */
function Node(value) {
  this.value = value
  this.next = null
}

/**
 * 链表
 */
function NodeList() {
  this.head = null
  this.length = 0
}

module.exports = {
  TreeNode,
  Node,
  NodeList,
}
