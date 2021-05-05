let buildTree = require('../src/07')

test('07 重建二叉树', () => {
  const preorder = [3, 9, 20, 15, 7]
  const inorder = [9, 3, 15, 20, 7]
  expect(buildTree(preorder, inorder).val).toEqual(3)
})
