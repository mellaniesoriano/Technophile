function GameConsole(systemName) {
  this.systemName = systemName;
}

GameConsole.prototype.play = function(game) {
  this.game = 'Shynobie';

  return this.systemName + " plays " + this.game;
};

module.exports = GameConsole;