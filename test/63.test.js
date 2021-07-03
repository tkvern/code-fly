const maxProfit = require('../src/63')

test('63 股票的最大利润 - 用例1', () => {
  const params = [7, 1, 5, 3, 6, 4]
  expect(maxProfit(params)).toBe(5)
})

test('63 股票的最大利润 - 用例2', () => {
  const params = [7, 6, 4, 3, 1]
  expect(maxProfit(params)).toBe(0)
})
