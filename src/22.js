/**
 * 链表中倒数第 k 个节点
 * @param {Node} head
 * @param {number} k
 */
function getKthFromEnd(head, k) {
  let slow = head
  let fast = head
  while (k) {
    fast = fast.next
    k--
  }

  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}

module.exports = getKthFromEnd
