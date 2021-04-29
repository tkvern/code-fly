/**
 * 反转链表
 * @param {Node} head
 * @returns Node
 */
function reverseList(head) {
  let node = head
  let pre = null
  while (node) {
    let cur = node
    node = cur.next
    cur.next = pre
    pre = cur.next
  }
  return pre
}

module.exports = reverseList
