const Direction = require ('./direction.js');

let newDirection;
beforeEach(() => {
  newDirection = new Direction();
});

// Check Direction initialization
test('newDirection must be an instance of Direction', () => {
  expect(newDirection).toBeInstanceOf(Direction);
});

test('Check Direction initialization.', () => {
  expect(newDirection).toEqual({
    vectors: ['N','S','E','W'],
  });
});

// Check methods definition
test('getVector must be a function', () => {
  expect(newDirection.getVectors).toBeInstanceOf(Function);
});

// Check Direction getter
test("getVectors must be ['N','S','E','W']", () => {
  expect(newDirection.getVectors()).toEqual(['N','S','E','W']);
})
