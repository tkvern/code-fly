/**
 * 二叉树
 * @param {*} val
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * 层序创建二叉树
 * @param {number[]} nums
 * @returns
 */
function createTree(nums) {
  let list = []
  for (let i = 0; i < nums.length; i++) {
    let node = new TreeNode(nums[i])
    list.push(node)
  }
  if (list.length > 0) {
    for (let i = 0; i < nums.length / 2 - 1; i++) {
      if (list[2 * i + 1] !== null) {
        list[i].left = list[2 * i + 1]
      }
      if (list[2 * i + 2] !== null) {
        list[i].right = list[2 * i + 2]
      }
    }
  }
  // 判断最后一个根结点：因为最后一个根结点可能没有右结点，所以单独拿出来处理
  let lastIndex = nums.length / 2 - 1
  if (list[lastIndex]) {
    list[lastIndex].left = list[lastIndex * 2 + 1]
  }
  return list[0]
}

/**
 * 中序构建平衡二叉树
 * @param {number[]} nums
 * @returns
 */
// function sortedArrayToBST(nums) {
//   function createBalance(start, end) {
//     if (start > end) return null
//     let mid = Math.floor((start + end) / 2)
//     let root = new Tree(nums[mid])
//     root.left = createBalance(start, mid - 1)
//     root.right = createBalance(mid + 1, end)
//     return root
//   }
//   return createBalance(0, nums.length - 1)
// }

/**
 * 前序列遍历二叉树
 * @param {*} root
 * @returns
 */
function preOrderTree(root) {
  let arr = []
  function recursion(tree) {
    if (tree !== null) {
      arr.push(tree.val)
      recursion(tree.left)
      recursion(tree.right)
    }
  }
  recursion(root)
  return arr
}

/**
 * 层序遍历二叉树，从左到右按层输出
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

/**
 * 链表节点
 * @param {*} value
 */
function Node(value, next, random) {
  this.value = value
  this.next = next
  this.random = random
}

/**
 * 链表
 */
function NodeList() {
  this.head = null
  this.length = 0
}

/**
 * 增加链表元素
 * @param {*} value
 */
NodeList.prototype.append = function (value) {
  let node = new Node(value)
  if (this.length === 0) {
    this.head = node
  } else {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
  this.length++
  return node
}

module.exports = {
  TreeNode,
  Node,
  NodeList,
  createTree,
  preOrderTree,
  levelOrderTree,
  // sortedArrayToBST,
}
