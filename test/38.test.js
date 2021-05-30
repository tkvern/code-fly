const permutation = require('../src/38')

test('38 字符串的排列', () => {
  const str = 'abc'
  expect(permutation(str)).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
})
