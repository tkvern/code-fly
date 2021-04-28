let { NodeList } = require('../src/18.1')
let deleteDuplication = require('../src/18.2')

test('18 在 O(1) 时间内删除链表节点', () => {
  const nodeList = new NodeList()
  nodeList.append(1)
  nodeList.append(2)
  nodeList.append(2)
  nodeList.append(3)
  nodeList.append(3)
  nodeList.append(4)
  let node = deleteDuplication(nodeList.head)
  let res = []
  while (node) {
    res.push(node.value)
    node = node.next
  }
  expect(res).toEqual([1, 4])
})
