const Queue = require('../src/09')
const queue = new Queue()
test('09 用两个栈实现队列 入栈', () => {
  queue.push(1)
  queue.push(2)
  expect(queue.in).toEqual([1, 2])
})

test('09 用两个栈实现队列 出栈', () => {
  expect(queue.pop()).toBe(1)
  expect(queue.out).toEqual([2])
})

test('09 用两个栈实现队列 全部出栈', () => {
  expect(queue.pop()).toBe(2)
  expect(queue.out).toEqual([])
})

test('09 用两个栈实现队列 空栈', () => {
  expect(queue.pop()).toBe(-1)
})
