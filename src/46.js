/**
 * 把数字翻译成字符串
 * @param {*} num
 */
function translateNum(num) {
  // let res = 0;
  // num = num.toString();
  // function dfs(i) {
  //   if (i >= num.length) {
  //     res++;
  //     return;
  //   }
  //   dfs(i + 1);
  //   let tmp = +(num[i] + num[i + 1]);
  //   if (num[i] !== "0" && tmp >= 0 && tmp < 26) {
  //     dfs(i + 2);
  //   }
  // }
  // dfs(0);
  // return res;

  // 动态规划解法
  let s = num.toString() // 数字字符串
  const n = s.length // 数字长度
  let a = 0,
    b = 1,
    c = 0
  for (let i = 1; i <= n; ++i) {
    c = 0
    // 情况一
    if (s[i - 1] !== '0') {
      c += b
    }

    // 情况二
    if (
      i > 1 &&
      s[i - 2] != '0' &&
      (s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26
    ) {
      c += a
    }

    // 交换值
    a = b
    b = c
  }
  return c
}

module.exports = translateNum
