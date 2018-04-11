var unique = function (array) {
  var obj = {};
  return array.filter(function(item, index, array) {
    return obj.hasOwnProperty(typeof item + JSON.stringify(item))
      ? false
      : (obj[typeof item + JSON.stringify(item)] = true);
  });
}

var array1 = [1, 2, "1", 2, 1];
var array2 = [1, 1, "a", "A", 2, 2];
var array3 = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];

console.log(unique(array1));   
console.log(unique(array2));  
console.log(unique(array3));