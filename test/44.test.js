const findNthDigit = require('../src/44')

test('44 数字序列中某一位的数字 - 用例1', () => {
  const n = 3
  expect(findNthDigit(n)).toBe('3')
})

test('44 数字序列中某一位的数字 - 用例2', () => {
  const n = 11
  expect(findNthDigit(n)).toBe('0')
})
