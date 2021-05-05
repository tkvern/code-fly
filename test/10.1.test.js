let fib = require('../src/10.1')

test('10.1 斐波那契数列 - 用例1', () => {
  let n = 2
  expect(fib(n)).toBe(1)
})

test('10.1 斐波那契数列 - 用例2', () => {
  let n = 5
  expect(fib(n)).toBe(5)
})
