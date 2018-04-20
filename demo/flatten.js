var arr = [1, [2, [3, 4]]];

var flatten = function(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
};

console.log(flatten(arr))
