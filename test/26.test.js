const isSubStructure = require('../src/26')
const { createTree } = require('../src/base')
test('26 树的子结构 - 用例1', () => {
  const a = [1, 2, 3]
  const b = [3, 1]
  const treeNodeA = createTree(a)
  const treeNodeB = createTree(b)
  expect(isSubStructure(treeNodeA, treeNodeB)).toBe(false)
})

test('26 树的子结构 - 用例2', () => {
  const a = [3, 4, 5, 1, 2]
  const b = [4, 1]
  const treeNodeA = createTree(a)
  const treeNodeB = createTree(b)
  expect(isSubStructure(treeNodeA, treeNodeB)).toBe(true)
})
