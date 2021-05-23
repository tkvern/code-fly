const exchange = require('../src/21')

test('21 调整数组顺序使奇数位于偶数前面', () => {
  const nums = [1, 2, 3, 4]
  expect(exchange(nums)).toEqual([1, 3, 2, 4])
})
