var str = "http://www.abc.com/detail?code=1&start=2017-02-01&end=2017-02-14&name=abc";
var getQueryString = function(url, name) {
  var params;
  var result = {};
  if (url.indexOf("?") !== -1) {
    var index = url.indexOf("?") + 1;
    params = url.slice(index);
    var arr = params.split('&');
    arr.forEach(function(item) {
      var _item = item.split('=')
      result[_item[0]] = _item[1]
    })
    return result[name];
  }
}

console.log(getQueryString(str, "name")); // 2017-02-01
