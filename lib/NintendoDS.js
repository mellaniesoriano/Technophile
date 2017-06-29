var WebBrowser = require('../lib/WebBrowser.js');
var GameConsole = require('../lib/GameConsole.js');
var extend = require('../lib/extend.js');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

console.log( extend(NintendoDS.prototype, GameConsole.prototype) );
console.log( extend(NintendoDS.prototype, WebBrowser.prototype) );


module.exports = NintendoDS;