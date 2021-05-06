let movingCount = require('../src/13')

test('13 机器人的运动范围 - 用例1', () => {
  let m = 2,
    n = 3,
    k = 1
  expect(movingCount(m, n, k)).toBe(3)
})

test('13 机器人的运动范围 - 用例2', () => {
  let m = 3,
    n = 1,
    k = 0
  expect(movingCount(m, n, k)).toBe(1)
})
