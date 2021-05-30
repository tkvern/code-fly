function copyRandomList(head) {
  function copy(node) {
    if (!node) return null
    if (isRead.get(node)) return isRead.get(node)
    let newNode = new Node(node.val)
    isRead.set(node, newNode)
    newNode.random = copy(node.random)
    newNode.next = copy(node.next)
    return newNode
  }
  let isRead = new Map()
  return copy(head)
}

module.exports = copyRandomList
