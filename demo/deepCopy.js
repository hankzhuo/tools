var deepCopy = function(obj) {
  if ( typeof obj !== 'object') return false;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

var arr2 = { a: 1, b: { c: { d: 1 } } };
console.log(deepCopy(arr2));