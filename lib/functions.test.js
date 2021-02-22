import {
  place,
  report,
  left,
  right,
  move,
  validateBoundary,
} from './functions';

describe('place robot', () => {
  test('success', () => {
    place(0, 3, 'EAST')
    const location = report()
    expect(location).toEqual('Output: 0, 3, EAST');
  });
  test('success - place on the margin', () => {
    place(5, 5, 'EAST')
    const location = report()
    expect(location).toEqual('Output: 5, 5, EAST');
  });
  test('fail - place obeyond the margin', () => {
    place(5, 6, 'EAST')
    const location = report()
    expect(location).not.toEqual('Output: 5, 6, EAST');
  });
});

describe('robot move', () => {
  test('success', () => {
    place(0, 3, 'EAST')
    move()
    const location = report()
    expect(location).toEqual('Output: 1, 3, EAST');
  });
  test('fail - move beyond the margin', () => {
    place(5, 5, 'EAST')
    move()
    const location = report()
    expect(location).toEqual('Output: 5, 5, EAST');
  });
});

describe('robot left', () => {
  test('success', () => {
    place(1, 3, 'EAST')
    left()
    const location = report()
    expect(location).toEqual('Output: 1, 3, NORTH');
  });
});

describe('robot right', () => {
  test('success', () => {
    place(2, 3, 'EAST')
    right()
    const location = report()
    expect(location).toEqual('Output: 2, 3, SOUTH');
  });
});


describe('robot boundary validator', () => {
  test('success - 5,5', () => {
    const validate = validateBoundary(5,5)
    expect(validate).toEqual(true);
  });
  test('success - 0,0', () => {
    const validate = validateBoundary(0,0)
    expect(validate).toEqual(true);
  });
  test('success - 0,0', () => {
    const validate = validateBoundary(0,0)
    expect(validate).toEqual(true);
  });
  test('invalid boundary - 1,6', () => {
    const validate = validateBoundary(0,6)
    expect(validate).toEqual(false);
  });
  test('invalid boundary - 6,5', () => {
    const validate = validateBoundary(6,5)
    expect(validate).toEqual(false);
  });
});