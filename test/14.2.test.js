let cuttingRope = require('../src/14.2')

test('14.2 剪绳子2 - 用例1', () => {
  const n = 2
  expect(cuttingRope(n)).toBe(1)
})

test('14.2 剪绳子2 - 用例2', () => {
  const n = 10
  expect(cuttingRope(n)).toBe(36)
})

test('14.2 剪绳子2 - 用例3', () => {
  const n = 9
  expect(cuttingRope(n)).toBe(27)
})

test('14.2 剪绳子2 - 用例4', () => {
  const n = 8
  expect(cuttingRope(n)).toBe(18)
})
