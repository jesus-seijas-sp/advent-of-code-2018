const { part1, part2 } = require('../src/day1');

describe('Day 1', () => {
  describe('Should calculate part 1', () => {
    test('1, -2, 3, 1 => 3', () => {
      const input = [1, -2, 3, 1];
      const expected = 3;
      const actual = part1(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Should calculate part 2', () => {
    test('1, -2, 3, 1 => 2', () => {
      const input = [1, -2, 3, 1];
      const expected = 2;
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
    test('1, -1 => 0', () => {
      const input = [1, -1];
      const expected = 0;
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
    test('3, 3, 4, -2, -4 => 10', () => {
      const input = [3, 3, 4, -2, -4];
      const expected = 10;
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
    test('7, 7, -2, -7, -4 => 14', () => {
      const input = [7, 7, -2, -7, -4];
      const expected = 14;
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
  });
});
