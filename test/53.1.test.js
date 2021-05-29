const search = require('../src/53.1')

test('53.1 在排序数组中查找数字1 - 用例1', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8
  expect(search(nums, target)).toBe(2)
})

test('53.1 在排序数组中查找数字1 - 用例2', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 6
  expect(search(nums, target)).toBe(0)
})
