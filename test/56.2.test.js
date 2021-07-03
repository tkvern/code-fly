const singleNumber = require('../src/56.2')

test('56.1 数组中数字出现的次数 - 用例1', () => {
  const nums = [3, 4, 3, 3]
  expect(singleNumber(nums)).toEqual(4)
})

test('56.1 数组中数字出现的次数 - 用例2', () => {
  const nums = [9, 1, 7, 9, 7, 9, 7]
  expect(singleNumber(nums)).toEqual(1)
})
