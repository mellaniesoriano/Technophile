function Watch(bodyPart) {
  this.bodyPart = '';
}

Watch.prototype.wear = function(bodyPart) {
  this.bodyPart = bodyPart;

  return this.bodyPart;
};

module.exports = Watch;