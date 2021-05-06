const printNumber = require('../src/17')

test('17 打印从 1 到最大的 n 位数', () => {
  const n = 1
  expect(printNumber(n)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
