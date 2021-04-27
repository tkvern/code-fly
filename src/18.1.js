function Node(value) {
  this.value = value
  this.next = null
}

function NodeList() {
  this.head = null
  this.length = 0
}

NodeList.prototype.append = function (value) {
  const node = new Node(value)
  if (this.length === 0) {
    this.head = node
  } else {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
  this.length++
  return node
}

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
