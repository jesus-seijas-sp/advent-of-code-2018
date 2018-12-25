const { part1, part2 } = require('../src/day13');

const input = [
  '/->-\\        ',
  '|   |  /----\\',
  '| /-+--+-\\  |',
  '| | |  | v  |',
  '\\-+-/  \\-+--/',
  '  \\------/   ',
];

const input2 = [
  '/>-<\\  ',
  '|   |  ',
  '| /<+-\\',
  '| | | v',
  '\\>+</ |',
  '  |   ^',
  '  \\<->/',
];

describe('Day 13', () => {
  describe('part 1', () => {
    test('Simple circuit (7, 3)', () => {
      const expected = { x: 7, y: 3 };
      const actual = part1(input);
      expect(actual.x).toEqual(expected.x);
      expect(actual.y).toEqual(expected.y);
    });
  });

  describe('part 2', () => {
    test('Simple circuit (6, 4)', () => {
      const expected = { x: 6, y: 4 };
      const actual = part2(input2);
      expect(actual.x).toEqual(expected.x);
      expect(actual.y).toEqual(expected.y);
    });
  });
});
