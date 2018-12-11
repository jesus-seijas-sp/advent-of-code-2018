const { part1, part2 } = require('../src/day6');

const input = ['1, 1', '1, 6', '8, 3', '3, 4', '5, 5', '8, 9'];

describe('Day 6', () => {
  describe('Should calculate part 1', () => {
    test('Short output should be 17', () => {
      const expected = 17;
      const actual = part1(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Should calculate part 2', () => {
    test('Short output should be 16 if max is 32', () => {
      const expected = 16;
      const actual = part2(input, 32);
      expect(actual).toEqual(expected);
    });
  });
});
