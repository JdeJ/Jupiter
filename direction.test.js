const Direction = require ('./direction.js');

// Check Direction initialization
test('Check Direction initialization.', () => {
  expect(Direction).toEqual({
    vectors: ['N','E','S','W'],
  });
});

// Check methods definition
test('getVector must be a function', () => {
  expect(Direction.getVectors).toBeInstanceOf(Function);
});

test('changeVector must be a function', () => {
  expect(Direction.changeVector).toBeInstanceOf(Function);
});

// Check Direction getter
test("getVectors must be ['N','E','S','W']", () => {
  expect(Direction.getVectors()).toEqual(['N','E','S','W']);
})

// Check changeVector
test("changeVector ('N', undefined) must be undefined", () => {
  expect(Direction.changeVector('N', undefined)).toBeUndefined();
})

test("changeVector ('S','L') must be 'E'", () => {
  expect(Direction.changeVector('S','L')).toBe('E');
})

test("changeVector ('W','R')must be 'N'", () => {
  expect(Direction.changeVector('W','R')).toBe('N');
})

test("changeVector ('N','L')must be 'W'", () => {
  expect(Direction.changeVector('N','L')).toBe('W');
})
