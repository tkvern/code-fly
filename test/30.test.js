const MinStack = require('../src/30')

const minStack = new MinStack()
test('30 包含 min 函数的栈', () => {
  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  expect(minStack.min()).toBe(-3)
})

test('30 包含 min 函数的栈 出栈', () => {
  minStack.pop()
  expect(minStack.top()).toBe(0)
})

test('30 包含 min 函数的栈 出栈2', () => {
  minStack.pop()
  expect(minStack.min()).toBe(-2)
})

test('30 包含 min 函数的栈 空栈', () => {
  minStack.pop()
  expect(minStack.min()).toBe(undefined)
})
