const findKithSmallest = require('../src/40')

test('40 最小的k个数', () => {
  const arr = [3, 2, 1]
  const k = 2
  expect(findKithSmallest(arr, k)).toEqual([1, 2])
})

test('40 最小的k个数', () => {
  const arr = [0, 1, 2, 1]
  const k = 1
  expect(findKithSmallest(arr, k)).toEqual([0])
})
