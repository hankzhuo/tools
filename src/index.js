var utility = {
  debounce: function(func, wait, immediate) {
    var timeoutId;
    return function() {
      var that = this,
        args = arguments;

      var callNow = immediate && !wait;
      var callLater = wait && !immediate;
      clearTimeout(timeoutId);
      if (callLater) {
        timeoutId = setTimeout(function() {
          timeoutId = null;
          func.apply(that, args);
        }, wait);
      }
      if (callNow) { func.apply(that, args); }
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
    }
  }
};
