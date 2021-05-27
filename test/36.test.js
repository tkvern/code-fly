const treeToDoublyList = require('../src/36')
const { createTree } = require('../src/base')

test('36 二叉搜索树与双向链表', () => {
  const tree = createTree([4, 2, 5, 1, 3])
  const res = treeToDoublyList(tree)
  expect(res.left.val).toBe(5)
})
