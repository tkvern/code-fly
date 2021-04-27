let { deleteNode, NodeList } = require('../src/18.1')

test('18 在 O(1) 时间内删除链表节点', () => {
  const nodeList = new NodeList()
  expect(nodeList.print()).toEqual([])
  nodeList.append(4)
  nodeList.append(5)
  let node = nodeList.append(1)
  nodeList.append(9)
  deleteNode(node)
  expect(nodeList.print()).toEqual([4, 5, 9])
})
