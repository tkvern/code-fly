/**
 * 删除链表中重复的节点
 * @param {Node} prevHead
 * @returns {Node}
 */
function deleteDuplication(prevHead) {
  if (!prevHead || !prevHead.next) return prevHead
  let next = prevHead.next
  if (next.value === prevHead.value) {
    while (next && next.value === prevHead.value) {
      next = next.next
    }
    return deleteDuplication(next)
  } else {
    prevHead.next = deleteDuplication(prevHead.next)
    return prevHead
  }
}

module.exports = deleteDuplication
