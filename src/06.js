function Node(value) {
  this.value = value //当前节点的元素
  this.next = null //下一个节点链接
}

function NodeList() {
  //节点
  this.head = null
  this.length = 0
}

NodeList.prototype.append = function (value) {
  let node = new Node(value)

  if (this.length === 0) {
    this.head = node
  } else {
    let current = this.head
    while (current.next) {
      current = current.next
    }

    current.next = node
  }
  this.length += 1
}
/**
 *
 * @param {Node} head
 * @returns
 */
function reversePrint(head) {
  if (!head) return []
  let stack = []
  let node = head
  while (node) {
    stack.push(node.value)
    node = node.next
  }
  return stack.reverse()
}
module.exports = { reversePrint, NodeList }
