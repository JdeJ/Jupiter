class Jupiter {
  constructor () {
    this.grid = undefined;
    this.position = undefined;
    this.direction = undefined;
  }

  // Getters & Setters
  setGrid (x, y) {
    if (typeof x === 'number' && typeof y === 'number'){
      if (x > 0 && y > 0){
        this.grid = new Array(x);
        for (let i=0; i<this.grid.length; i++) {
          this.grid[i] = new Array(y);
        }
        return [this.grid.length, this.grid[0].length];
      } else {
        console.error('The Grid dimensions must be numbers greatest than 0.');
      }
    } else {
      console.error('The Grid dimensions must be numbers.');
    }
  }

  setPosition (x, y, face) {
    if (typeof x === 'number' && typeof y === 'number'){
      if ((x >= 0 || y >= 0) || (x >= this.grid.length || y >= this.grid[0].length)){
        if (['N','S','E','W'].includes(face)) {
          this.position = [x,y,face];
          return this.getPosition();
        } else {
          console.error(`The face direction must be: (N)orth, (S)outh, (E)ast or (W)est.`);
        }
      } else {
        console.error(`The coordinates must be numbers greater or equal than 0 and lower or equal to ${this.grid.length}`);
      }
    } else {
      console.error('The coordinates must be numbers.');
    }
  }

  getGrid () {
    return this.grid;
  }

  getPosition () {
    return this.position;
  }

  getDirection () {
    return this.direction;
  }
}

module.exports = Jupiter;