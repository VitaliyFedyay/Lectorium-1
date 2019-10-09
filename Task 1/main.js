function sum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (Number.isNaN(arr[i])) { continue }
    else if (typeof arr[i] === 'number') { sum += arr[i] }
  }
  return sum
}

function min(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (Number.isNaN(arr[i])) { continue }
    else if (typeof arr[i] === 'number' && arr[i] < min) { min = arr[i] }
  }
  return min
}

function max(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (Number.isNaN(arr[i])) { continue }
    else if (typeof arr[i] === 'number' && arr[i] > max) { max = arr[i] }
  }
  return max
}