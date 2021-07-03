const singleNumbers = require('../src/56.1')

test('56.1 数组中数字出现的次数 - 用例1', () => {
  const nums = [4, 1, 4, 6]
  expect(singleNumbers(nums)).toEqual([6, 1])
})

test('56.1 数组中数字出现的次数 - 用例2', () => {
  const nums = [1, 2, 10, 4, 1, 4, 3, 3]
  expect(singleNumbers(nums)).toEqual([2, 10])
})
