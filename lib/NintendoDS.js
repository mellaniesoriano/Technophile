var WebBrowser = require('../lib/WebBrowser.js');
var GameConsole = require('../lib/GameConsole.js');

function extend(destination, source) {
  for ( var k in source ) {
    if ( source.hasOwnProperty(k) ) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

console.log( extend(NintendoDS.prototype, GameConsole.prototype) );
console.log( extend(NintendoDS.prototype, WebBrowser.prototype) );


module.exports = NintendoDS;