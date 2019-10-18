function check(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isNaN(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

function sum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) { sum += arr[i] }
  }
  return sum
}

function min(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i]) && arr[i] < min) { min = arr[i] }
  }
  return min
}

function max(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i]) && arr[i] > max) { max = arr[i] }
  }
  return max
}

console.log('min: ' + min(check([NaN, 1, undefined, -12, true, 'qwerty', 10, NaN])))
console.log('max: ' + max(check([NaN, 1, undefined, -12, true, 'qwerty', 10, NaN])))
console.log('sum: ' + sum(check([NaN, 1, undefined, -12, true, 'qwerty', 10, NaN])))