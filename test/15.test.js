let hammingWeight = require('../src/15')

test('15 二进制中 1 的个数 - 用例1', () => {
  const num = 9
  expect(hammingWeight(num)).toBe(2)
})
