let findContinuousSequence = require('../src/57.2')

test('57.2 和为 s 的连续正数序列 - 用例1', () => {
  const target = 9
  console.log(findContinuousSequence(target))
  expect(findContinuousSequence(target)).toEqual([
    [2, 3, 4],
    [4, 5],
  ])
})

test('57.2 和为 s 的连续正数序列 - 用例2', () => {
  const target = 15
  expect(findContinuousSequence(target)).toEqual([
    [1, 2, 3, 4, 5],
    [4, 5, 6],
    [7, 8],
  ])
})
