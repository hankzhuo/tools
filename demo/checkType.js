var classtypes = {};

"Boolean Number String Function Array Date RegExp Object Error Null Undefined"
  .split(" ")
  .map(function(item, index) {
    classtypes["[object " + item + "]"] = item.toLowerCase();
})

var checkType = function(obj) {
  // 兼容IE6
  if (obj == null) {
    return obj + '';
  }
  return typeof obj === 'object' || typeof obj === 'function' ? 
    classtypes[Object.prototype.toString.call(obj)] || 'object': typeof obj;
}
console.log(classtypes)
console.log(checkType(null))
console.log(checkType(undefined))
console.log(checkType(true))