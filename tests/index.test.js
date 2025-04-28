const { add, divide } = require('../src/index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('divides 6 by 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
}   );

test('divides by zero throws error', () => {
  expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
}   );
