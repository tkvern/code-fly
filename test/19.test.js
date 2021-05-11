const isMatch = require('../src/19')

test('19 正则表达式匹配 - 用例1', () => {
  const s = 'aa'
  const p = 'a'
  expect(isMatch(s, p)).toBe(false)
})

test('19 正则表达式匹配 - 用例2', () => {
  const s = 'aa'
  const p = 'a*'
  expect(isMatch(s, p)).toBe(true)
})

test('19 正则表达式匹配 - 用例3', () => {
  const s = 'ab'
  const p = '.*'
  expect(isMatch(s, p)).toBe(true)
})

test('19 正则表达式匹配 - 用例4', () => {
  const s = 'aab'
  const p = 'c*a*b'
  expect(isMatch(s, p)).toBe(true)
})

test('19 正则表达式匹配 - 用例5', () => {
  const s = 'mississippi'
  const p = 'mis*is*p*.'
  expect(isMatch(s, p)).toBe(false)
})
