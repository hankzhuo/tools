var utility = {
  debounce: function(func, wait, immediate) {
    var timeoutId;
    return function() {
      var that = this,
        args = arguments;

      var callNow = immediate && !wait;
      var callLater = wait && !immediate;
      if (callLater) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
          timeoutId = null;
          func.apply(that, args);
        }, wait);
      }
      if (callNow) {
        func.apply(that, args);
      }
    };
  },
  throttle: function(func, wait) {
    var timeoutId,
      previous = 0,
      that = this,
      args = arguments;

    var later = function() {
      previous = +new Date();
      timeoutId = null;
      func.apply(that, args);
    };

    return function() {
      var now = +new Date();
      var remaining = wait - (now - previous);

      if (remaining <= 0) {
        clearTimeout(timeoutId);
        timeoutId = null;
        previous = now;
        func.apply(that, args);
      } else if (!timeoutId) {
        timeoutId = setTimeout(later, remaining);
      }
    };
  },
  unique: function(array) {
    var obj = {};
    return array.filter(function(item, index, array) {
      return obj.hasOwnProperty(typeof item + JSON.stringify(item))
        ? false
        : (obj[typeof item + JSON.stringify(item)] = true);
    });
  },
  checkType: function(obj) {
    var classtypes = {};
    
    "Boolean Number String Function Array Date RegExp Object Error Null Undefined"
      .split(" ")
      .map(function(item, index) {
        classtypes["[object " + item + "]"] = item.toLowerCase();
      });

    if (obj == null) {
      return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function"
      ? classtypes[Object.prototype.toString.call(obj)] || "object"
      : typeof obj;
  }
};
