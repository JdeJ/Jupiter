const Jupiter = require ('./jupiter');

let newJupiter = null;
beforeEach(() => {
  newJupiter = new Jupiter();
});

//Check Jupiter initialization
test('newJupiter must be an instance of Jupiter', () => {
  expect(newJupiter).toBeInstanceOf(Jupiter);
});

test('Check Jupiter initialization.', () => {
  expect(newJupiter).toEqual({
    grid: undefined,
    position: undefined,
    direction: undefined,
  });
});

// Check methods definition
test('setGrid must be a function', () => {
  expect(newJupiter.setGrid).toBeInstanceOf(Function);
});

test('getGrid must be a function', () => {
  expect(newJupiter.getGrid).toBeInstanceOf(Function);
});

test('setPosition must be a function', () => {
  expect(newJupiter.setGrid).toBeInstanceOf(Function);
});

test('getPosition must be a function', () => {
  expect(newJupiter.getGrid).toBeInstanceOf(Function);
});

test('setDirection must be a function', () => {
  expect(newJupiter.setDirection).toBeInstanceOf(Function);
});

test('getDirection must be a function', () => {
  expect(newJupiter.getDirection).toBeInstanceOf(Function);
});

test('changeDirection must be a function', () => {
  expect(newJupiter.changeDirection).toBeInstanceOf(Function);
});

test('getStatus must be a function', () => {
  expect(newJupiter.getStatus).toBeInstanceOf(Function);
});

test('moveForward must be a function', () => {
  expect(newJupiter.moveForward).toBeInstanceOf(Function);
});

test('task must be a function', () => {
  expect(newJupiter.task).toBeInstanceOf(Function);
});

// Check getters and setters
test('setGrid of 5x5 must be equal [5,5].', () => {
  expect(newJupiter.setGrid(5, 5)).toEqual([5, 5]);
});

test('setGrid of ["j", null] must be undefined.', () => {
  expect(newJupiter.setGrid('j', null)).toBeUndefined();
});

test('getGrid of 5x5 must be truthy.', () => {
  newJupiter.setGrid(5, 5);
  expect(Array.isArray(newJupiter.getGrid())).toBeTruthy();
});

test('setPosition of x=2, y=0 must be {x: 2, y:0}.', () => {
  newJupiter.setGrid(5, 5);
  expect(newJupiter.setPosition(2,0)).toEqual({x: 2, y:0});
});

test('setPosition of x="j" and y=null must be undefined.', () => {
  newJupiter.setGrid(5, 5);
  expect(newJupiter.setPosition('j', null)).toBeUndefined();
});

test('getPosition of x=3, y=2 must be {x: 3, y:2}', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setPosition(3,2);
  expect(newJupiter.getPosition()).toEqual({x: 3, y:2});
});

test('setDirection of null must be undefined.', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection(null);
  expect(newJupiter.getDirection()).toBeUndefined();
});

test('setDirection of "e" must be equal to "E"', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('e');
  expect(newJupiter.getDirection()).toBe('E');
});

test('setDirection of "N" must be equal to "N"', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('N');
  expect(newJupiter.getDirection()).toBe('N');
});

test('getDirection of face="s" must be equal to "S"', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('s');
  expect(newJupiter.getDirection()).toBe('S');
});

test('getDirection of face="W" must be equal to "W"', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('W');
  expect(newJupiter.getDirection()).toBe('W');
});

// Change Direction method
test('changeDirection of undefined must be undefined', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('S');
  expect(newJupiter.changeDirection()).toBeUndefined();
});

test('changeDirection of ("L") must be "E"', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('S');
  expect(newJupiter.changeDirection("L")).toBe("E");
});

test('changeDirection of ("R") must be "N"', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('W');
  expect(newJupiter.changeDirection("R")).toBe("N");
});

test('changeDirection of ("L") must be "W"', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('N');
  expect(newJupiter.changeDirection("L")).toBe("W");
});

// getStatus method
test("getStatus of undefined must be undefined", () => {
  newJupiter.setGrid(5, 5);
  expect(newJupiter.getStatus()).toBeUndefined();
});

test("getStatus of {x:3, y: 5} and 'N' must be:", () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('N');
  newJupiter.setPosition(3,5);
  expect(newJupiter.getStatus()).toEqual("The Jupiter explorer is facing to N on {3,5}");
});

// moveForward method
test("moveForward of undefined must be undefined", () => {
  expect(newJupiter.moveForward()).toBeUndefined();
});

test("moveForward of {x:0, y: 0} and 'W' must be undefined", () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('W');
  newJupiter.setPosition(0,0);
  expect(newJupiter.moveForward()).toBeUndefined();
});

test("moveForward of {x:3, y: 4} and 'N' must be {x:3, y:3}", () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('N');
  newJupiter.setPosition(3,4);
  expect(newJupiter.moveForward()).toEqual({x:3, y:3});
});

// task method
test("task of undefined must be undefined", () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('N');
  newJupiter.setPosition(0,0);
  expect(newJupiter.task()).toBeUndefined();
});

test("task of invalid commands must be undefined", () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('N');
  newJupiter.setPosition(0,0);
  expect(newJupiter.task('HGTF9')).toBeUndefined();
});

test("task of 'rmrmmmr' must be ", () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('N');
  newJupiter.setPosition(0,0);
  expect(newJupiter.task('mrmrmmmr')).toEqual("The Jupiter explorer is facing to W on {1,3}");
});

test("task of 'llmmmmPl' must be ", () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setDirection('N');
  newJupiter.setPosition(0,0);
  expect(newJupiter.task('llmmmmPl')).toEqual("The Jupiter explorer is facing to E on {0,4}");
});