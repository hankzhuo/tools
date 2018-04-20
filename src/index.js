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
  },
  getCookie: function(name) {
    var cookieName = encodeURIComponent(name) + "=",
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null;
    if (cookieStart > -1) {
      var cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      );
    }
    return cookieValue;
  },
  setCookie: function(name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if (expires instanceof Date) {
      cookieText += "; expires=" + expires.toGMTString();
    }
    if (path) {
      cookieText += "; path=" + path;
    }
    if (domain) {
      cookieText += "; domain=" + domain;
    }
    if (secure) {
      cookieText += "; secure";
    }
    document.cookie = cookieText;
  },
  unsetCookie: function (name, path, domain, secure) {
    this.set(name, "", new Date(0), path, domain, secure);
  }
};
