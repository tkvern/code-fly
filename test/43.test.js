const countDigitOne = require('../src/43')

test('43 1 ～ n 整数中 1 出现的次数', () => {
  const n = 13
  expect(countDigitOne(n)).toBe(6)
})
