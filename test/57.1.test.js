let toSum = require('../src/57.1')

test('57.1 和为 s 的两个数字 - 用例1', () => {
  const nums = [2, 7, 11, 15]
  const target = 9
  expect(toSum(nums, target)).toEqual([2, 7])
})

test('57.1 和为 s 的两个数字 - 用例2', () => {
  const nums = [10, 26, 30, 31, 47, 60]
  const target = 50
  expect(toSum(nums, target)).toEqual([10, 30])
})

test('57.1 和为 s 的两个数字 - 用例3', () => {
  const nums = [10, 26, 30, 31, 47, 60]
  const target = 86
  expect(toSum(nums, target)).toEqual([26, 60])
})
