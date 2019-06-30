const Jupiter = require ('./jupiter');

// Check Jupiter initialization
test('Check Jupiter initialization.', () => {
  let newJupiter = new Jupiter;
  expect(newJupiter).toEqual({
    grid: null,
    initialPosition: null,
    movement: null,
  });
});