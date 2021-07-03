const missingNumber = require('../src/53.2')

test('53.2 0 ～ n-1 中缺失的数字 - 用例1', () => {
  const nums = [0, 1, 3]
  expect(missingNumber(nums)).toBe(2)
})

test('53.2 0 ～ n-1 中缺失的数字 - 用例2', () => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 9]
  expect(missingNumber(nums)).toBe(8)
})
