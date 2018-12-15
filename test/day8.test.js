const { part1, part2 } = require('../src/day8');

const input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2';

describe('Day 8', () => {
  describe('Should calculate part 1', () => {
    test('Short output should be 138', () => {
      const expected = 138;
      const actual = part1(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Should calculate part 2', () => {
    test('Short output should be 66', () => {
      const expected = 66;
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
  });
});
