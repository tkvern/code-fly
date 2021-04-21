const firstNotRepeatingChar = require('../src/50')

test('50 第一个只出现一次的字符位置', () => {
  const params = 'abacc'
  expect(firstNotRepeatingChar(params)).toBe('b')
})

test('50 第一个只出现一次的字符位置 都重复', () => {
  const params = 'abbacc11'
  expect(firstNotRepeatingChar(params)).toBe(' ')
})
test('50 第一个只出现一次的字符位置 空字符', () => {
  const params = ' '
  expect(firstNotRepeatingChar(params)).toBe(' ')
})
