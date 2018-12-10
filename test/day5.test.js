const { part1, part2 } = require('../src/day5');

describe('Day 5', () => {
  describe('Should calculate part 1', () => {
    test('dabAcCaCBAcCcaDA', () => {
      const input = 'dabAcCaCBAcCcaDA';
      const expected = 10;
      const actual = part1(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Should calculate part 2', () => {
    test('dabAcCaCBAcCcaDA', () => {
      const input = 'dabAcCaCBAcCcaDA';
      const expected = 4;
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
  });
});
