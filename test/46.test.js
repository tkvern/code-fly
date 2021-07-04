const translateNum = require('../src/46')

test('46 把数字翻译成字符串 - 示例1', () => {
  const param = 12258
  expect(translateNum(param)).toBe(5)
})

test('46 把数字翻译成字符串 - 示例2', () => {
  const param = 226
  expect(translateNum(param)).toBe(3)
})
