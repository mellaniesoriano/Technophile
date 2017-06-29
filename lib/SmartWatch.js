var Tablet = require('../lib/Tablet.js');
var Watch = require('../lib/Watch.js');
var extend = require('../lib/extend.js');

function SmartWatch() {
  Watch.call(this);
}

extend(SmartWatch.prototype, Tablet.prototype);
extend(SmartWatch.prototype, Watch.prototype);

module.exports = SmartWatch;