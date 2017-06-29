var Tablet = require('../lib/Tablet.js');
var Watch = require('../lib/Watch.js');

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function SmartWatch() {
  Watch.call(this);
}

extend(SmartWatch.prototype, Tablet.prototype);
extend(SmartWatch.prototype, Watch.prototype);

module.exports = SmartWatch;