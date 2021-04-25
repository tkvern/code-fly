let MaxQueue = require('../src/59.2')

test('59.2 队列的最大值 用例1', () => {
  let maxQueue = new MaxQueue()
  maxQueue.pushBack(1)
  maxQueue.pushBack(2)
  expect(maxQueue.getMaxValue()).toBe(2)
  expect(maxQueue.popFront()).toBe(1)
  expect(maxQueue.getMaxValue()).toBe(2)
})

test('59.2 队列的最大值 用例2', () => {
  let maxQueue = new MaxQueue()
  expect(maxQueue.popFront()).toBe(-1)
  expect(maxQueue.getMaxValue()).toBe(-1)
})

test('59.2 队列的最大值 用例3', () => {
  let maxQueue = new MaxQueue()
  maxQueue.pushBack(2)
  maxQueue.pushBack(1)
  maxQueue.pushBack(1)
  maxQueue.popFront()
  maxQueue.popFront()
  maxQueue.popFront()
  expect(maxQueue.popFront()).toBe(-1)
  expect(maxQueue.getMaxValue()).toBe(-1)
})
