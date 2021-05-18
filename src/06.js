const { Node, NodeList } = require('./base')

/**
 * 增加链表元素
 * @param {*} value
 */
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
  this.length++
  return node
}

/**
 * 逆序列输出链表
 * @param {*} head
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
