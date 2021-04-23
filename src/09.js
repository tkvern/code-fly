/**
 * 用两个栈实现队列
 */
let Queue = function () {
  this.in = [] // 入栈区
  this.out = [] // 出栈区
}

/**
 * 入栈
 * @param {any} node 任务
 */
Queue.prototype.push = function (node) {
  this.in.push(node)
}

/**
 * 出栈
 * @returns 任务
 */
Queue.prototype.pop = function () {
  if (this.out.length === 0) {
    while (this.in.length !== 0) {
      this.out.push(this.in.pop())
    }
  }

  if (this.out.length === 0) {
    return -1
  }
  return this.out.pop()
}

module.exports = Queue
