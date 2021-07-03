const { createTree } = require('../src/base')
const levelOrderTree = require('../src/32.3')

test('32.3 从上到下打印二叉树 之字形打印', () => {
  const tree = createTree([3, 9, 20, null, null, 15, 7])
  expect(levelOrderTree(tree)).toEqual([[3], [20, 9], [15, 7]])
})
