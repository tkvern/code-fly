const maxLongestSubstring = require('../src/48')

test('48 最长不含重复字符的子字符串 - 示例1', () => {
  const param = 'abcabcbb'
  expect(maxLongestSubstring(param)).toBe(3)
})

test('48 最长不含重复字符的子字符串 - 示例2', () => {
  const param = 'bbbbb'
  expect(maxLongestSubstring(param)).toBe(1)
})

test('48 最长不含重复字符的子字符串 - 示例3', () => {
  const param = 'pwwkew'
  expect(maxLongestSubstring(param)).toBe(3)
})
