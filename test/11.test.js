let minArray = require('../src/11')

test('11 旋转数组的最小数字 - 用例1', () => {
  let params = [3, 4, 5, 1, 2]
  expect(minArray(params)).toBe(1)
})

test('11 旋转数组的最小数字 - 用例2', () => {
  let params = [2, 2, 2, 0, 1]
  expect(minArray(params)).toBe(0)
})
