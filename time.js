var Time = {
  current: function() {},
  stopwatch: {},
  timer: {}
};
Time.current.prototype.hour = function(format) {
  var time = new Date.getHours();
  if (format === "am/pm") {
    if (time <= 12) {
      time = time + "AM";
    } else {
      time = (time - 12) + "PM";
    }
  }
  return time;
};
Time.current.prototype.minute = function() {
  return new Date.getMinutes();
};
Time.current.prototype.second = function() {
  return new Date.getSeconds();
};
Time.current.prototype.millisecond = function() {
  return new Date.getMilliseconds();
};
Time.current = function(format) {
  if (format === "str") {
    var time = Time.current.hour() + ":" + Time.current.minute() + ":" + Time.current.second();
  } else {
    var time =  {
      hour: Time.current.hour(),
      minute: Time.current.minute(),
      second: Time.current.second(),
      millisecond: Time.current.millisecond()
    };
  }
  return time;
};
Time.stopwatch.start = function(action, milli) {
  return window.setInterval(action, milli);
};
Time.stopwatch.end = function(timer) {
  window.clearInterval(timer);
};
Time.timer.start = function(action, milli) {
  return window.setTimeout(function() {}, milli);
};
Time.timer.pause = function(timer) {
  window.clearTimeout(timer);
};
