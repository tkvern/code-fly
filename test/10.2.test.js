let numWays = require('../src/10.2')

test('10.2 青蛙跳台阶问题 - 用例1', () => {
  let n = 2
  expect(numWays(n)).toBe(2)
})

test('10.2 青蛙跳台阶问题 - 用例2', () => {
  let n = 7
  expect(numWays(n)).toBe(21)
})
