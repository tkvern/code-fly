const { createTree } = require('../src/base')
const levelOrderTree = require('../src/32.2')

test('32.2 从上到下打印二叉树 每一层打印到一行', () => {
  const tree = createTree([3, 9, 20, null, null, 15, 7])
  expect(levelOrderTree(tree, true)).toEqual([[3], [9, 20], [15, 7]])
})
