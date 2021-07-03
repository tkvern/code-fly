const lowestCommonAncestor = require('../src/68.1')
const { createTree } = require('../src/base')

test('68.1 二叉搜索树的最近公共祖先 - 用例1', () => {
  const tree = createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
  const p = 2
  const q = 8
  expect(lowestCommonAncestor(tree, p, q)).toBe(6)
})

test('68.1 二叉搜索树的最近公共祖先 - 用例2', () => {
  const tree = createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
  const p = 2
  const q = 4
  expect(lowestCommonAncestor(tree, p, q)).toBe(2)
})
