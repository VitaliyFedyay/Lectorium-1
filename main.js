var result = function (arr) {
  var max = arr[0]
  var min = max
  var sum = 0

  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > max) { max = arr[i] }
    if(arr[i] < min) { min = arr[i] }
    sum += arr[i]
  }

  console.log('max: ' + max + ' min: ' + min + ' sum: ' + sum)
}

result([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1])
result([-1,-8,-2])
result([1,7,3])
result([1,undefined,3,5,-3])
result([1,NaN,3,5,-3])