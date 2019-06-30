const Jupiter = require ('./jupiter');

let newJupiter = null;
beforeEach(() => {
  newJupiter = new Jupiter();
});

// Check Jupiter initialization
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
  expect(newJupiter.setPosition(2,0)).toEqual({x: 2, y:0});
});

test('setPosition of x="j" and y=null must be undefined.', () => {
  expect(newJupiter.setPosition('j', null)).toBeUndefined();
});

test('getPosition of x=3, y=2 must be {x: 3, y:2}', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setPosition(3,2);
  expect(newJupiter.getPosition()).toEqual({x: 3, y:2});
});

test('Check setMovement.', () => {});

test('Check getMovement.', () => {});