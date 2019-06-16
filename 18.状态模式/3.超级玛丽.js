// 单一动作 , 一个动作一个判断条件
var lastAction = ''
function changeMarry (action) {
  if (action === 'jump') {
    // 跳跃
  } else if (action === 'move') {
    // 移动
  } else {
    // 默认情况
  }
  lastAction = action
}

// 复合动作, 判断条件的开销翻倍
var lastAction1 = ''
var lastAction2 = ''

function changeMarry2 (action1, action2) {
  if (action1 === 'shoot') {
    // 射击
  } else if (action1 === 'move' && action2 === 'shoot') {
    // 移动射击
  } else if (action1 === 'jump' && action2 === 'shoot') {
    // 跳跃射击
  }
  lastAction1 = action1 || ''
  lastAction2 = action2 || ''
}
