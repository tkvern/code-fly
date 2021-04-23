/**
 * 包含min函数的栈
 */
let MinStack = function () {
  this.stack = [] // 栈
  this.minStack = [] // 最小栈
}

MinStack.prototype.push = function (node) {
  this.stack.unshift(node)
  if (this.minStack.length === 0 || this.minStack[0] > node) {
    this.minStack.unshift(node)
  }
}

MinStack.prototype.pop = function () {
  if (this.stack.shift() === this.minStack[0]) {
    this.minStack.shift()
  }
}

MinStack.prototype.top = function () {
  return this.stack[0]
}

MinStack.prototype.min = function () {
  return this.minStack[0]
}
module.exports = MinStack
