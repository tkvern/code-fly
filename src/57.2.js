/**
 * 和为 s 的连续正数序列
 * @param {*} target
 */
function findContinuousSequence(target) {
  let res = [] // 最终的结果
  let arr = [] // 临时数组
  let sum = 0 // 临时计算结果

  for (let i = 1; i < target; i++) {
    arr.push(i)
    sum += i

    while (sum > target) {
      sum -= arr[0]
      arr.shift()
    }

    if (sum === target) {
      res.push([...arr])
    }
  }

  return res
}

module.exports = findContinuousSequence
