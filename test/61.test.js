const isContinuous = require('../src/61')

test('61 扑克牌顺子 - 用例1', () => {
  const nums = [1, 2, 0, 4, 5]
  expect(isContinuous(nums)).toBe(true)
})

test('61 扑克牌顺子 - 用例2', () => {
  const nums = [0, 0, 1, 2, 5]
  expect(isContinuous(nums)).toBe(true)
})

test('61 扑克牌顺子 - 用例3', () => {
  const nums = [0, 1, 2, 2, 5]
  expect(isContinuous(nums)).toBe(false)
})

test('61 扑克牌顺子 - 用例4', () => {
  const nums = [0, 1, 2, 4, 7]
  expect(isContinuous(nums)).toBe(false)
})
