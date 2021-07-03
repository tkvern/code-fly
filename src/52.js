function getIntersectionNode(headA, headB) {
  let h1 = headA
  let h2 = headB
  while (h1 !== h2) {
    h1 = h1 === null ? headB : h1.next
    h2 = h2 === null ? headA : h2.next
  }
  return h2
}

module.exports = getIntersectionNode