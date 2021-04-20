const duplicate = require('../src/04')

test('04 二维数组中的查找', () => {
  const params = [2, 3, 1, 0, 2, 5]
  expect(duplicate(params)).toBe(2)
})

test('04 二维数组中的查找', () => {
  const params = [4, 3, 1, 0, 2, 5]
  expect(duplicate(params)).toBe(-1)
})
