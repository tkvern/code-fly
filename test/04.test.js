const find = require('../src/04')

test('04 二维数组中的查找', () => {
  const params = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ]
  expect(find(8, params)).toBe(true)
})

test('04 二维数组中的查找 容错', () => {
  expect(find(33, null)).toBe(false)
})

test('04 二维数组中的查找 不存在', () => {
  const params = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ]
  expect(find(33, params)).toBe(false)
})
