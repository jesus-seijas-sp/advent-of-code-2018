const { part1, part2 } = require('../src/day2');

describe('Day 2', () => {
  describe('Should calculate part 1', () => {
    test('abcdef, bababc, abbcde, abcccd, aabcdd, abcdee, ababab => 12', () => {
      const input = [
        'abcdef',
        'bababc',
        'abbcde',
        'abcccd',
        'aabcdd',
        'abcdee',
        'ababab',
      ];
      const expected = 12;
      const actual = part1(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Should calculate part 2', () => {
    test('abcde, fghij, klmno, pqrst, fguij, axcye, wvxyz => fgij', () => {
      const input = [
        'abcde',
        'fghij',
        'klmno',
        'pqrst',
        'fguij',
        'axcye',
        'wvxyz',
      ];
      const expected = 'fgij';
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
    test('abcde, fahij, klmno, pqrst, fguij, axcye, wvxyz => undefined', () => {
      const input = [
        'abcde',
        'fahij',
        'klmno',
        'pqrst',
        'fguij',
        'axcye',
        'wvxyz',
      ];
      const expected = undefined;
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
  });
});
