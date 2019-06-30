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
    movement: undefined,
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

test('setPosition of [2,0,"N"] must be [2,0,"N"].', () => {
  expect(newJupiter.setPosition(2,0,'N')).toEqual([2,0,"N"]);
});

test('setPosition of ["j", null, "P"] must be undefined.', () => {
  expect(newJupiter.setPosition('j', null, 'P')).toBeUndefined();
});

test('getPosition of x=3, y=2, face = "E" must be [3,2,"E"]', () => {
  newJupiter.setGrid(5, 5);
  newJupiter.setPosition(3,2,'E');
  expect(newJupiter.getPosition()).toEqual([3,2,'E']);
});

test('Check setMovement.', () => {});

test('Check getMovement.', () => {});