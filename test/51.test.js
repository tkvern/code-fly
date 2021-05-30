const reversePairs = require('../src/51')

test('51 数组中的逆序对', () => {
  const params = [7, 5, 6, 4]
  expect(reversePairs(params)).toBe(5)
})
