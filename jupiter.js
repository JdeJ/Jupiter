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
    if (face && ['N','E','S','W'].includes(face[0].toUpperCase())) {
      this.direction = face.toUpperCase();
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
    if (newDirection) {
      const actualizedDirection = Direction.changeVector(this.getDirection(), newDirection.toUpperCase());
      return this.setDirection(actualizedDirection);
    } else {
      return;
    }
  }

  // Move Jupiter
  moveForward(){
    if (this.getPosition()) {
      let newPosition = Object.assign({}, this.getPosition()); 
  
      switch (this.getDirection()){
        case 'N':
          newPosition.y--;
          break;
        case 'S':
          newPosition.y++;
          break;
        case 'E':
          newPosition.x++;
          break;
        case 'W':
          newPosition.x--;
          break;
      }
    
      // Check grid bounds
      if (newPosition) {
        if ((newPosition.x < 0 || newPosition.x >= this.getGrid().length) || (newPosition.y < 0 || newPosition.y >= this.getGrid()[0].length)) {
          console.error("The new position of the Jupiter is out of the grid!!");
        } else {
          this.setPosition(newPosition.x, newPosition.y);
          return this.getPosition();
        }
      }
    }
  }

  // Shows Jupiter status
  getStatus () {
    if (this.getDirection() && this.getPosition()){
      return `The Jupiter explorer is facing to ${this.direction} on {${this.position.x},${this.position.y}}`;
    }
  }

  // Jupiter task
  task (commands) {
    if (commands){
      const tasks = commands.toLowerCase().split('');
      let invalidOrders = 0;
  
      tasks.forEach(task => {
        if (['r','l','m'].includes(task)) {
          task === 'm' ? this.moveForward() : this.changeDirection(task);
        } else {
          invalidOrders++;
        }
      });
      
      if (invalidOrders === tasks.length){
        console.error('Invalid commands.');
        return;
      } else if (invalidOrders > 0) {
        console.info('Invalid commands are obviated.');
      } 

      return this.getStatus();
    }
  }
}

module.exports = Jupiter;