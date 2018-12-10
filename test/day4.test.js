const { part1, part2 } = require('../src/day4');

const input = [
  '[1518-11-01 00:00] Guard #10 begins shift',
  '[1518-11-01 00:05] falls asleep',
  '[1518-11-01 00:25] wakes up',
  '[1518-11-01 00:30] falls asleep',
  '[1518-11-01 00:55] wakes up',
  '[1518-11-01 23:58] Guard #99 begins shift',
  '[1518-11-02 00:40] falls asleep',
  '[1518-11-02 00:50] wakes up',
  '[1518-11-03 00:05] Guard #10 begins shift',
  '[1518-11-03 00:24] falls asleep',
  '[1518-11-03 00:29] wakes up',
  '[1518-11-04 00:02] Guard #99 begins shift',
  '[1518-11-04 00:36] falls asleep',
  '[1518-11-04 00:46] wakes up',
  '[1518-11-05 00:03] Guard #99 begins shift',
  '[1518-11-05 00:45] falls asleep',
  '[1518-11-05 00:55] wakes up',
];

describe('Day 4', () => {
  describe('Should calculate part 1', () => {
    test('Small Fabric => 4', () => {
      const expected = 240;
      const actual = part1(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Should calculate part 2', () => {
    test('Small Fabric => 3', () => {
      const expected = 4455;
      const actual = part2(input);
      expect(actual).toEqual(expected);
    });
  });
});
