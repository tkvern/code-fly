const { NodeList } = require('./base')

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
