const countDigitOne = require('../src/43')

test('43 1 ～ n 整数中 1 出现的次数 - 用例1', () => {
  const n = 13
  expect(countDigitOne(n)).toBe(6)
})

test('43 1 ～ n 整数中 1 出现的次数 - 用例2', () => {
  const n = 0
  expect(countDigitOne(n)).toBe(0)
})
