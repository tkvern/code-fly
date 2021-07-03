/**
 *
 * @param {*} prices
 */
function maxProfit(prices) {
  let a = 0
  let b = Infinity
  for (let p of prices) {
    a = Math.max(a, p - b)
    b = Math.min(b, p)
  }
  return a
}

module.exports = maxProfit
