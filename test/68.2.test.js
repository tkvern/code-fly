const lowestCommonAncestor = require('../src/68.2')
const { createTree } = require('../src/base')

test('68.2 二叉树的最近公共祖先 - 用例1', () => {
  const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
  const p = 5
  const q = 1
  expect(lowestCommonAncestor(tree, p, q).val).toBe(3)
})

test('68.2 二叉树的最近公共祖先 - 用例2', () => {
  const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
  const p = 5
  const q = 4
  expect(lowestCommonAncestor(tree, p, q).val).toBe(5)
})
