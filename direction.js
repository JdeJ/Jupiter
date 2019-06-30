const Direction = {
  constructor () {
    this.vectors = ['N','S','E','W'];
  }

  getVector () {
    return this.vectors;
  }
}

module.exports = Direction;