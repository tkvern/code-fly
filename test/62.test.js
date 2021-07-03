const lastRemaning = require('../src/62')

test('62 圆圈中最后剩下的数字 - 用例1', () => {
  const n = 5
  const m = 3
  expect(lastRemaning(n, m)).toBe(3)
})

test('62 圆圈中最后剩下的数字 - 用例2', () => {
  const n = 10
  const m = 17
  expect(lastRemaning(n, m)).toBe(2)
})
