let maxSlidingWindow = require('../src/59.1')

test('59.1 滑动窗口的最大值 用例1', () => {
  const nums = [1, 3, -1, -3, 5, 3, 6, 7]
  const k = 3
  expect(maxSlidingWindow(nums, k)).toEqual([3, 3, 5, 5, 6, 7])
})

test('59.1 滑动窗口的最大值 用例2', () => {
  const nums = [2, 3, 4, 2, 6, 2, 5, 1]
  const k = 3
  expect(maxSlidingWindow(nums, k)).toEqual([4, 4, 6, 6, 6, 5])
})

test('59.1 滑动窗口的最大值 用例3', () => {
  const nums = []
  const k = 0
  expect(maxSlidingWindow(nums, k)).toEqual([])
})

test('59.1 滑动窗口的最大值 用例4', () => {
  const nums = [1, 2, 3]
  const k = 1
  expect(maxSlidingWindow(nums, k)).toEqual([1, 2, 3])
})
