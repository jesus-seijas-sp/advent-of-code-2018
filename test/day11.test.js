const { Grid, part1, part2 } = require('../src/day11');

describe('Day 11', () => {
  describe('Grid', () => {
    test('[8](3, 5) should be 4', () => {
      const grid = new Grid(8);
      const expected = 4;
      const actual = grid.getValue(3, 5);
      expect(actual).toEqual(expected);
    });

    test('[57](122, 79) should be 4', () => {
      const grid = new Grid(57);
      const expected = -5;
      const actual = grid.getValue(122, 79);
      expect(actual).toEqual(expected);
    });

    test('[39](217, 196) should be 0', () => {
      const grid = new Grid(39);
      const expected = 0;
      const actual = grid.getValue(217, 196);
      expect(actual).toEqual(expected);
    });

    test('[39](101, 153) should be 0', () => {
      const grid = new Grid(71);
      const expected = 4;
      const actual = grid.getValue(101, 153);
      expect(actual).toEqual(expected);
    });
  });

  describe('part 1', () => {
    test('18 should be 33, 45 with value 29', () => {
      const expected = { x: 33, y: 45, value: 29 };
      const actual = part1(18);
      expect(actual).toEqual(expected);
    });

    test('42 should be 21, 61 with value 30', () => {
      const expected = { x: 21, y: 61, value: 30 };
      const actual = part1(42);
      expect(actual).toEqual(expected);
    });
  });

  describe('part 2', () => {
    test('18 should be 90, 269, 16 with value 113', () => {
      const expected = { x: 90, y: 269, value: 113, size: 16 };
      const actual = part2(18);
      expect(actual).toEqual(expected);
    });
  });
});
