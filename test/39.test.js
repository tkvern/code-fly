const majorityElement = require('../src/39')

test('39 数组中出现次数超过一半的数字', () => {
  const nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
  expect(majorityElement(nums)).toEqual(2)
})
