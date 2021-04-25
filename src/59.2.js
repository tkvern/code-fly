let MaxQueue = function () {
  this.queue = []
  this.maxValue = -Infinity
  this.maxIdx = -1
}

MaxQueue.prototype.pushBack = function (num) {
  this.queue.push(num)
  if (num >= this.maxValue) {
    this.maxIdx = this.queue.length - 1
    this.maxValue = num
  }
}

MaxQueue.prototype.popFront = function () {
  if (!this.queue.length) return -1
  let a = this.queue.shift()
  this.maxIdx--
  if (this.maxIdx < 0) {
    let temp = -Infinity
    let id = -1
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] > temp) {
        temp = this.queue[i]
        id = i
      }
    }
    this.maxIdx = id
    this.maxValue = temp
  }
  return a
}

MaxQueue.prototype.getMaxValue = function () {
  if (!this.queue.length) return -1
  return this.maxValue
}

module.exports = MaxQueue
