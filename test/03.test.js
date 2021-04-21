const duplicate = require('../src/03')

test('03 数组中重复的数字 - 有重复', () => {
  const params = [2, 3, 1, 0, 2, 5]
  expect(duplicate(params)).toBe(2)
})

test('03 数组中重复的数字 - 没有重复', () => {
  const params = [4, 3, 1, 0, 2, 5]
  expect(duplicate(params)).toBe(-1)
})
