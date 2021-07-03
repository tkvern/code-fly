const pathSum = require('../src/34')
const { createTree } = require('../src/base')

test('03 数组中重复的数字 - 有重复', () => {
  const tree = createTree([
    5,
    4,
    8,
    11,
    null,
    13,
    4,
    7,
    2,
    null,
    null,
    null,
    null,
    5,
    1,
  ])
  const sum = 22
  expect(pathSum(tree, sum)).toEqual([
    [5, 4, 11, 2],
    [5, 8, 4, 5],
  ])
})
