const { part1 } = require('../src/day9');

describe('Day 9', () => {
  describe('Should calculate part 1', () => {
    test('9 players 25 marbles', () => {
      const expected = 32;
      const actual = part1(9, 25);
      expect(actual).toEqual(expected);
    });

    test('10 players 1618 marbles', () => {
      const expected = 8317;
      const actual = part1(10, 1618);
      expect(actual).toEqual(expected);
    });

    test('13 players 7999 marbles', () => {
      const expected = 146373;
      const actual = part1(13, 7999);
      expect(actual).toEqual(expected);
    });

    test('17 players 1104 marbles', () => {
      const expected = 2764;
      const actual = part1(17, 1104);
      expect(actual).toEqual(expected);
    });

    test('21 players 6111 marbles', () => {
      const expected = 54718;
      const actual = part1(21, 6111);
      expect(actual).toEqual(expected);
    });

    test('30 players 5807 marbles', () => {
      const expected = 37305;
      const actual = part1(30, 5807);
      expect(actual).toEqual(expected);
    });
  });
});
