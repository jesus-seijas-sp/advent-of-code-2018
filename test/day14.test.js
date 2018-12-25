const { part1, part2 } = require('../src/day14');

describe('Day 14', () => {
  describe('part 1', () => {
    test('9 => 5158916779', () => {
      const expected = '5158916779';
      const actual = part1(9);
      expect(actual).toEqual(expected);
    });

    test('5 => 0124515891', () => {
      const expected = '0124515891';
      const actual = part1(5);
      expect(actual).toEqual(expected);
    });

    test('18 => 9251071085', () => {
      const expected = '9251071085';
      const actual = part1(18);
      expect(actual).toEqual(expected);
    });

    test('2018 => 5941429882', () => {
      const expected = '5941429882';
      const actual = part1(2018);
      expect(actual).toEqual(expected);
    });
  });

  describe('part 2', () => {
    test('51589 => 9', () => {
      const expected = 9;
      const actual = part2('51589');
      expect(actual).toEqual(expected);
    });

    test('01245 => 5', () => {
      const expected = 5;
      const actual = part2('01245');
      expect(actual).toEqual(expected);
    });

    test('92510 => 18', () => {
      const expected = 18;
      const actual = part2('92510');
      expect(actual).toEqual(expected);
    });

    test('59414 => 2018', () => {
      const expected = 2018;
      const actual = part2('59414');
      expect(actual).toEqual(expected);
    });
  });
});
