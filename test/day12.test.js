const { part1, part2 } = require('../src/day12');

const input = [
  'initial state: #..#.#..##......###...###',
  '',
  '...## => #',
  '..#.. => #',
  '.#... => #',
  '.#.#. => #',
  '.#.## => #',
  '.##.. => #',
  '.#### => #',
  '#.#.# => #',
  '#.### => #',
  '##.#. => #',
  '##.## => #',
  '###.. => #',
  '###.# => #',
  '####. => #',
];

describe('Day 12', () => {
  describe('part 1', () => {
    test('Step 20 is .#....##....#####...#######....#.#..##.', () => {
      const expected = 325;
      const actual = part1(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('part 2', () => {
    test('Step 50000000000 is', () => {
      const expected = 999999999374;
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
  });
});
