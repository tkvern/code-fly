const verifyPostorder = require('../src/33')

test('33 二叉搜索树的后序遍历序列 - 用例1', () => {
  const params = [1, 6, 3, 2, 5]
  expect(verifyPostorder(params)).toBe(false)
})

test('33 二叉搜索树的后序遍历序列 - 用例2', () => {
  const params = [1, 3, 2, 6, 5]
  expect(verifyPostorder(params)).toBe(true)
})
