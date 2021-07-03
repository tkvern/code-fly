const { serialize, deserialize } = require('../src/37')

test('37 序列化二叉树 序列-反序列化', () => {
  const data = '[1,2,3,null,null,4,5]'
  const tree = deserialize(data)
  const newData = serialize(tree)
  expect(serialize(deserialize(newData))).toEqual(newData)
})
