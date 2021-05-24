const { createTree } = require('../src/base')
const levelOrderTree = require('../src/32.1')

test('32.1 从上到下打印二叉树', () => {
  const tree = createTree([3, 9, 20, null, null, 15, 7])
  expect(levelOrderTree(tree)).toEqual([3, 9, 20, 15, 7])
})
