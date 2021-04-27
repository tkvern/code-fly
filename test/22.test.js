let getKthFromEnd = require('../src/22')

const { NodeList } = require('../src/18.1')

test('22 链表中倒数第 k 个节点 - 用例1', () => {
  const params = [1, 2, 3, 4, 5]
  const nodeList = new NodeList()
  params.forEach((item) => {
    nodeList.append(item)
  })
  let head = getKthFromEnd(nodeList.head, 2)
  let res = []
  while (head) {
    res.push(head.value)
    head = head.next
  }
  expect(res).toEqual([4, 5])
})
