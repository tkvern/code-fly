const validateStackSequences = require('../src/31')

test('31 栈的压入、弹出序列 - 正确', () => {
  const pushed = [1, 2, 3, 4, 5]
  const popped = [4, 5, 3, 2, 1]
  expect(validateStackSequences(pushed, popped)).toBe(true)
})

test('31 数组中重复的数字 - 不正确', () => {
  const pushed = [1, 2, 3, 4, 5]
  const popped = [4, 5, 3, 1, 2]
  expect(validateStackSequences(pushed, popped)).toBe(false)
})
