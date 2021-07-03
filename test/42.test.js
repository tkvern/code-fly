const maxSubArray = require('../src/42')

test('42 连续子数组的最大和', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  expect(maxSubArray(nums)).toBe(6)
})
