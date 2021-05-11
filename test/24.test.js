let reverseList = require('../src/24')
const { NodeList } = require('../src/18.1')

test('24 反转链表', () => {
  let nodeList = new NodeList()
  nodeList.append(1)
  nodeList.append(2)
  nodeList.append(3)
  nodeList.append(4)
  nodeList.append(5)
  let newHead = reverseList(nodeList.head)
  let res = []
  while (newHead) {
    res.push(newHead.value)
    newHead = newHead.next
  }
  expect(res).toEqual(res)
})
