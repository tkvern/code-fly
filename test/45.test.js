const minNumber = require('../src/45')

test('45 把数组排成最小的数 - 示例1', () => {
  const param = [10, 2]
  expect(minNumber(param)).toBe('102')
})

test('45 把数组排成最小的数 - 示例2', () => {
  const param = [3, 30, 34, 5, 9]
  expect(minNumber(param)).toBe('3033459')
})
