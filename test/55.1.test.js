const maxDepth = require('../src/55.1')
const { createTree } = require('../src/base')

test('55.1 二叉树的深度', () => {
  const tree = createTree([3, 9, 20, null, null, 15, 7])
  expect(maxDepth(tree)).toBe(3)
})
