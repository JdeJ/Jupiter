class Direction {
  constructor () {
    this.vectors = ['N','E','S','W'];
  }

  getVectors () {
    return this.vectors;
  }

  changeVector (currentDirection, newDirection) {
    let index = null;
    const currentDirectionIndex = this.vectors.indexOf(currentDirection);
    if (newDirection === 'L'){
      index = currentDirectionIndex === 0 ? this.vectors.length - 1 : currentDirectionIndex - 1;
    } else if (newDirection === 'R') {
      index = currentDirectionIndex === this.vectors.length - 1 ? 0 : currentDirectionIndex + 1;
    } else {
      console.error(`The new direction must be: (L)eft or (R)ight.`);
      return;
    }
    return this.vectors[index];
  }
}

module.exports = new Direction();