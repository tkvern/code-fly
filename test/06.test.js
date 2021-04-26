const { reversePrint, NodeList } = require('../src/06')

test('06 从尾到头打印链表 - 用例1', () => {
  const params = [1, 3, 2]
  const nodeList = new NodeList()
  params.map((item) => {
    nodeList.append(item)
  })

  expect(reversePrint(nodeList.head)).toEqual([2, 3, 1])
})

test('06 从尾到头打印链表 - 用例2', () => {
  const params = null
  expect(reversePrint(params)).toEqual([])
})
