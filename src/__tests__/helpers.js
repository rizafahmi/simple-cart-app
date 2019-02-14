const {
  incrementQty,
  decrementQty,
  recalculateSubtotal
} = require('../helpers.js');

test('incrementQty should add 1', () => {
  const actual = incrementQty(1);
  const expected = 2;
  expect(actual).toBe(expected);
});

test('make sure incrementQty add things, not concat things', () => {
  const actual = incrementQty('2');
  const expected = 3;
  expect(actual).toBe(expected);
});

test('decrementQty should decrementing', () => {
  const actual = decrementQty(2);
  const expected = 1;
  expect(actual).toBe(expected);
});

test('decrementQty should not decrement when qty is less than 0', () => {
  const actual = decrementQty(1);
  const expected = 1;
  expect(actual).toBe(expected);
});

test('recalculate subtotal', () => {
  const actual = recalculateSubtotal(25000, 3);
  const expected = 75000;
  expect(actual).toBe(expected);
});

test('recalculate subtotal with string input', () => {
  const actual = recalculateSubtotal('25000', 3);
  const expected = 75000;
  expect(actual).toBe(expected);
});

test('recalculate with discount', () => {
  const actual = recalculateSubtotal(25000, 3, 27);
  const expected = 54750;
  expect(actual).toBe(expected);
});
