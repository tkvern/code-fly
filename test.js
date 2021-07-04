// --------------------------------------------------------------------
/**
 * 实现 add(1)(2)(3)
 * @param {*} x
 * @returns
 */
function add(m) {
  function temp(n) {
    return add(m + n)
  }
  temp.toString = function () {
    return m
  }
  return temp
}
// console.log(add(1)(2)(3) + '')

// --------------------------------------------------------------------
/**
 * 判断链表是否有环
 * @param {*} head
 */
function entryNodeOfLoop(head) {
  if (head === null || head.next === null) {
    return null
  }
  slow = head
  fast = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      fast = head
      while (fast !== slow) {
        fast = fast.next
        slow = slow.next
      }
      return fast
    }
  }
  return null
}

// --------------------------------------------------------------------
/**
 * 牛顿拉弗森迭代法
 * @param {*} x
 * @returns
 */
function sqrt(x) {
  if (x < 0) return NaN
  if (x == 0) return 0
  let re = 1
  while (!(re <= x / re && re + 1 > x / (re + 1))) {
    re = parseInt(re - (re * re - x) / (2 * re))
  }
  return re
}
// console.log(sqrt(16))

// --------------------------------------------------------------------
/**
 * 斐波拉契数列
 * @param {*} n
 */
function fib(n) {
  let a = 0
  let b = 1
  for (let i = 0; i < n; ++i) {
    const c = (a + b) % (1e9 + 7)
    a = b
    b = c
  }
  return a
}

// --------------------------------------------------------------------
/**
 * 函数防抖
 * @param {*} func
 * @param {*} delay
 */
function debounce(func, delay) {
  var timeout
  return function (e) {
    clearTimeout(timeout)
    var context = this,
      args = arguments
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, delay)
  }
}
// var validate = debounce(function (e) {
//   console.log('change', e.target.value, new Date() - 0)
// }, 380)

// // 绑定监听
// document.querySelector('input').addEventListener('input', validate)

// --------------------------------------------------------------------
/**
 * 函数节流
 * @param {*} fn
 * @param {*} threshhold
 */
function throttle(fn, threshhold) {
  var timeout
  var start = new Date()
  var threshhold = threshhold || 160
  return function () {
    var context = this,
      args = arguments,
      curr = new Date() - 0
    clearTimeout(timeout)
    if (curr - start >= threshhold) {
      fn.apply(context, args)
      start = curr
    } else {
      timeout = setTimeout(function () {
        fn.apply(context, args)
      }, threshhold)
    }
  }
}
// var mousemove = throttle(function (e) {
//   console.log(e.pageX, e.pageY)
// })

// // 绑定监听
// document.querySelector('#panel').addEventListener('mousemove', mousemove)

// --------------------------------------------------------------------
/**
 * 层次遍历二叉树，层序遍历二叉树，从左到右按层输出
 * @param {*} node
 * @param {boolean} isFilterNull 是否过滤null，默认false，tree 则不会输出 null
 */
function levelOrderTree(root, isFilterNull = false) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length) {
    let temp = []
    let queueLength = queue.length
    while (queueLength) {
      let node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      queueLength--
      if (isFilterNull) {
        node.val !== null && temp.push(node.val)
      } else {
        temp.push(node.val)
      }
    }
    res.push(temp)
  }
  return res
}

// --------------------------------------------------------------------

/**
 * 合并二维有序数组成一维有序数组
 * @param {*} arr
 * @returns
 */
function flatten(arr) {
  // return arr.reduce(
  //   (acc, cur) =>
  //     Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur],
  //   [],
  // )
  // 解法二
  return arr.flat(Infinity).sort((a, b) => a - b)
}
// let arr = [1, 2, [3, 4, [5, 6], 7, 8]]
// console.log(flatten(arr))

// --------------------------------------------------------------------
/**
 * 判断括号字符串是否有效
 * @param {*} s
 * @returns
 */
function isValid(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') stack.push(s[i])
    else {
      if (stack.length == 0) return false

      let c = stack.pop()
      let match
      if (s[i] == ')') {
        match = '('
      } else if (s[i] == ']') {
        match = '['
      } else {
        match = '{'
      }

      if (c != match) return false
    }
  }

  if (stack.length != 0) return false

  return true
}
// console.log(isValid('((([])))'))

// --------------------------------------------------------------------
/**
 * 数组去重
 * @param {*} arr
 */
function deDuplication(arr) {
  return Array.from(new Set(arr))
}
// console.log(deDuplication([1, 2, 2, 3, 3, null, undefined]))
// --------------------------------------------------------------------
/**
 * html 是否正常闭合
 * @param {*} str
 * @returns
 */
const isMatch = (str) => {
  str = str.split('')
  const element = []
  str.forEach((s, index) => {
    if (s === '<' && str[index + 1] !== '/') {
      element.push('<')
    } else if (s === '/') {
      if (str[index - 1] === '<' || str[index + 1] === '>') {
        element.pop()
      }
    }
  })
  return element.length === 0
}

// isMatch('<div>hello</div>') // true
// isMatch('<img src="" />') // true
// isMatch('<p><span></p>') // false

// --------------------------------------------------------------------
/**
 * 20G的文件，逐行输出每行的长度
 */
// const fs = require('fs')
// const rl =  require('readline');
// const readStram = fs.createReadStream('./test.js')
// const readLine = rl.createInterface({
//   input: readStram,
//   terminal: true
// })
// readLine.on('line', function(line) {
//   console.log(line.length)
// })

// --------------------------------------------------------------------
/**
 * addTask(1000, '1')
 * addTask(500, '2')
 * addTask(300, '3')
 * addTask(400, '4')
 * 的输出顺序是：2 3 1 4
 *
 *  整个的完整执行流程：
 *
 * 一开始1、2两个任务开始执行
 * 500ms时，2任务执行完毕，输出2，任务3开始执行
 * 800ms时，3任务执行完毕，输出3，任务4开始执行
 * 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
 * 1200ms时，4任务执行完毕，输出4
 */
class Scheduler {
  constructor(limit) {
    this.queue = []
    this.maxCount = limit
    this.runCounts = 0
  }
  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(order)
          resolve()
        }, time)
      })
    }
    this.queue.push(promiseCreator)
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request()
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
      return
    }
    this.runCounts++
    this.queue
      .shift()()
      .then(() => {
        this.runCounts--
        this.request()
      })
  }
}

// const scheduler = new Scheduler(2);
// const addTask = (time, order) => {
//   scheduler.add(time, order);
// };
// addTask(1000, "1");
// addTask(500, "2");
// addTask(300, "3");
// addTask(400, "4");
// scheduler.taskStart();

// --------------------------------------------------------------------
