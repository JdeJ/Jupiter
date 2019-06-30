const Direction = require('./direction');

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

  setPosition (x, y) {
    if (typeof x === 'number' && typeof y === 'number'){
      if ((x >= 0 || y >= 0) || (x >= this.grid.length || y >= this.grid[0].length)){
        this.position = {x, y};
        return this.getPosition();
      } else {
        console.error(`The coordinates must be numbers greater or equal than 0 and lower or equal to ${this.grid.length}`);
      }
    } else {
      console.error('The coordinates must be numbers.');
    }
  }
  
  setDirection (face) {
    if (face && ['N','E','S','W'].includes(face.toUpperCase())) {
      if (this.direction !== face.toUpperCase()) {
        this.direction = face.toUpperCase();
      }
      return this.getDirection();
    } else {
      console.error(`The face direction must be: (N)orth, (S)outh, (E)ast or (W)est.`);
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

  // Change direction of Jupiter
  changeDirection (newDirection) {
    Direction.changeDirection(this.direction, newDirection.toUpperCase());
  }
}

module.exports = Jupiter;