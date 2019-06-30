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

// Check getters and setters
test('setGrid of 5x5 must be equal [5,5].', () => {
  expect(newJupiter.setGrid(5, 5)).toEqual([5, 5]);
});

test('setGrid of NaN must be undefined.', () => {
  expect(newJupiter.setGrid('j', null)).toBeUndefined();
});

test('getGrid of 5x5 must be', () => {
  newJupiter.setGrid(5, 5);
  expect(Array.isArray(newJupiter.getGrid())).toBeTruthy();
});

test('Check setPosition.', () => {});

test('Check getPosition.', () => {});

test('Check setMovement.', () => {});

test('Check getMovement.', () => {});