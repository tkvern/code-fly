const mirrorTree = require('../src/27')
const { createTree, levelOrderTree } = require('../src/base')

test('27 二叉树的镜像', () => {
  const tree = createTree([4, 2, 7, 1, 3, 6, 9])
  const mTree = mirrorTree(tree)
  expect(levelOrderTree(mTree)).toEqual([4, 7, 2, 9, 6, 3, 1])
})
