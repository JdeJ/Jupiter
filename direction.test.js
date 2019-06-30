const Direction = require ('./direction.js');

let newDirection;
beforeEach(() => {
  newDirection = new Direction();
});

// Check Direction getter
test('getVectors must be ['N','S','E','W']', () => {
  expect(newDirection.getVectors()).toEqual(['N','S','E','W']);
})
