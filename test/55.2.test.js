const isBalanced = require('../src/55.2')
const { createTree } = require('../src/base')
test('55.2 平衡二叉树 - 用例1', () => {
  const tree = createTree([3, 9, 20, null, null, 15, 7])
  expect(isBalanced(tree)).toBe(true)
})
