let sortMerge = require('../src/25')
let { NodeList } = require('../src/18.1')

test('25 合并两个排序的链表', () => {
  let nodeList1 = new NodeList()
  let nodeList2 = new NodeList()

  nodeList1.append(1)
  nodeList1.append(3)
  nodeList1.append(5)

  nodeList2.append(2)
  nodeList2.append(4)
  nodeList2.append(6)

  let head = sortMerge(nodeList1.head, nodeList2.head)
  let res = []
  while (head) {
    res.push(head.value)
    head = head.next
  }
  expect(res).toEqual([1, 2, 3, 4, 5, 6])
})

test('25 合并两个排序的链表', () => {
  let nodeList1 = new NodeList()
  let nodeList2 = new NodeList()

  nodeList1.append(1)
  nodeList1.append(3)
  nodeList1.append(5)

  let head = sortMerge(nodeList1.head, nodeList2.head)
  let res = []
  while (head) {
    res.push(head.value)
    head = head.next
  }
  expect(res).toEqual([1, 3, 5])
})
