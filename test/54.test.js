const ktheLargest = require('../src/54')
const { createTree } = require('../src/base')

test('54 二叉搜索树的第 k 大节点', () => {
  const tree = createTree([5, 3, 6, 2, 4, null, null, 1])
  expect(ktheLargest(tree, 3)).toBe(4)
})
