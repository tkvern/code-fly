const { serialize, deserialize } = require('../src/37')
const { createTree } = require('../src/base')

test('37 序列化二叉树 序列化', () => {
  const tree = createTree([1, 2, 3, null, null, 4, 5])
  expect(serialize(tree)).toBe('[1,2,3,null,null,4,5]')
})

test('37 序列化二叉树 反序列化', () => {
  const data = '[1,2,3,null,null,4,5]'
  const tree = createTree([1, 2, 3, null, null, 4, 5])
  expect(deserialize(data)).toEqual(tree)
})
