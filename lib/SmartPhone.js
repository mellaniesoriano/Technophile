var Phone = require('../lib/Phone.js');
var Tablet = require('../lib/Tablet.js');
var GameConsole = require('../lib/GameConsole.js');
var WebBrowser = require('../lib/WebBrowser.js');
var extend = require('../lib/extend.js');

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  WebBrowser.call(this);
  GameConsole.call(this, "Smart Phone");
  WebBrowser.call(this);

}

extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);


module.exports = SmartPhone;