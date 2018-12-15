const { part1, part2 } = require('../src/day7');

const input = [
  'Step C must be finished before step A can begin.',
  'Step C must be finished before step F can begin.',
  'Step A must be finished before step B can begin.',
  'Step A must be finished before step D can begin.',
  'Step B must be finished before step E can begin.',
  'Step D must be finished before step E can begin.',
  'Step F must be finished before step E can begin.',
];

describe('Day 7', () => {
  describe('Should calculate part 1', () => {
    test('Short output should be CABDFE', () => {
      const expected = 'CABDFE';
      const actual = part1(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Should calculate part 2', () => {
    test('Time should be 15', () => {
      const expected = 15;
      const numElfs = 2;
      const extraTime = 0;
      const actual = part2(input, numElfs, extraTime);
      expect(actual).toEqual(expected);
    });
  });
});
