const MedianFinder = require('../src/41')

test('41 数据流中的中位数 - 示例1', () => {
  let medianFinder = new MedianFinder()

  medianFinder.addNum(1)
  medianFinder.addNum(2)
  expect(medianFinder.findMedian()).toBe(1.5)

  medianFinder.addNum(3)

  expect(medianFinder.findMedian()).toBe(2)
})

test('41 数据流中的中位数 - 示例2', () => {
  let medianFinder = new MedianFinder()
  medianFinder.addNum(3)
  expect(medianFinder.findMedian()).toBe(3)
  medianFinder.addNum(2)
  expect(medianFinder.findMedian()).toBe(2.5)
})
