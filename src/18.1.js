const { NodeList } = require('./base')

NodeList.prototype.print = function () {
  if (this.length === 0) return []
  let res = []
  let current = this.head
  while (current) {
    res.push(current.value)
    current = current.next
  }
  return res
}

/**
 * 删除链表中的节点
 * @param {Node} node
 */
function deleteNode(node) {
  node.value = node.next.value
  node.next = node.next.next
}

module.exports = { deleteNode, NodeList }
