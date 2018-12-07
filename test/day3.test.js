const { part1, part2 } = require('../src/day3');

describe('Day 3', () => {
  describe('Should calculate part 1', () => {
    test('Small Fabric => 4', () => {
      const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
      const expected = 4;
      const actual = part1(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Should calculate part 2', () => {
    test('Small Fabric => 3', () => {
      const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
      const expected = ['3'];
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
  });
});
