const maxValue = require('../src/47')

test('47 礼物的最大价值 - 示例1', () => {
  const param = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]
  expect(maxValue(param)).toBe(12)
})

test('47 礼物的最大价值 - 示例2', () => {
  const param = [
    [1, 10, 3, 8],
    [12, 2, 9, 6],
    [5, 7, 4, 11],
    [3, 7, 16, 5],
  ]
  expect(maxValue(param)).toBe(53)
})
