const isNumber = require('../src/20')

test('20 表示数值的字符串', () => {
  const str = '-1E-16'
  expect(isNumber(str)).toBe(true)
})
