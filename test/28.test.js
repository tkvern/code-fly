const isSymmtric = require('../src/28')
const { createTree } = require('../src/base')

test('28 对称的二叉树 - 用例1', () => {
  const tree = createTree([1, 2, 2, 3, 4, 4, 3])
  expect(isSymmtric(tree)).toBe(true)
})

test('28 对称的二叉树 - 用例2', () => {
  const tree = createTree([1, 2, 2, null, 3, null, 3])
  expect(isSymmtric(tree)).toBe(false)
})
