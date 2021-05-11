let pow = require('../src/16')

test('16 数值的整数次方 - 用例1', () => {
  const x = 2.0
  const n = 10
  expect(pow(x, n)).toBe(1024.0)
})

test('16 数值的整数次方 - 用例2', () => {
  const x = 2.1
  const n = 3
  expect(pow(x, n)).toBe(9.261000000000001)
})

test('16 数值的整数次方 - 用例3', () => {
  const x = 2.0
  const n = -2
  expect(pow(x, n)).toBe(0.25)
})
