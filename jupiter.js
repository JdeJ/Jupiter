class Jupiter {
  constructor () {
    this.grid = undefined;
    this.position = undefined;
    this.movement = undefined;
  }

  setGrid (x, y) {
    if (typeof x === 'number' && typeof y === 'number'){
      this.grid = new Array(x);
      for (let i=0; i<this.grid.length; i++) {
        this.grid[i] = new Array(y);
      }
      return [this.grid.length, this.grid[0].length];
    }
  }

  getGrid () {
    return this.grid;
  }
}

module.exports = Jupiter;