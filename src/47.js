/**
 * 礼物最大的价值
 * @param {number[][]} grid
 * @return {number}
 */
function maxValue(grid) {
  if (grid === null || grid.length == 0 || grid[0].length === 0) {
    return 0
  }
  let n = grid[0].length
  let dp = new Array(n).fill(0)
  for (let row of grid) {
    dp[0] += row[0]
    for (let i = 1; i < n; i++) {
      dp[i] = Math.max(dp[i], dp[i - 1]) + row[i]
    }
  }
  return dp[n - 1]
}

module.exports = maxValue
