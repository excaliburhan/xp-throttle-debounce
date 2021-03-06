"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


function throttle(fn, waitTime, immediate, isDebounce) {
  var timer = null;
  var lastTime = 0;

  return function () {
    function exec() {
      lastTime = +new Date();
      fn.apply(context, args);
    }

    function clear() {
      timer = null;
    }

    var context = this;
    var args = arguments;
    var nowTime = +new Date();
    var passTime = nowTime - lastTime;

    if (isDebounce && !timer) {
      exec();
    }

    if (timer) {
      clearTimeout(timer);
    }

    if (immediate && !timer) {
      exec();
    }

    if (!isDebounce && passTime > waitTime) {
      exec();
    } else {
      if (isDebounce) {
        timer = setTimeout(clear, waitTime);
      } else {
        timer = setTimeout(exec, waitTime - passTime);
      }
    }
  };
}

function debounce(fn, waitTime, immediate) {
  return throttle(fn, waitTime, immediate, true);
}

exports.throttle = throttle;
exports.debounce = debounce;