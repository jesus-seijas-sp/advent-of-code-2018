const getSequenceLength = (input, skip = []) =>
  [...input]
    .map(x => x.charCodeAt())
    .reduce((prev, c) => {
      if (!skip.includes(c)) {
        prev[Math.abs(c - prev[prev.length - 1]) === 32 ? 'pop' : 'push'](c);
      }
      return prev;
    }, []).length;

module.exports = {
  part1: input => getSequenceLength(input),
  part2: input =>
    [...Array(25).keys()].reduce(
      (prev, i) => Math.min(prev, getSequenceLength(input, [i + 65, i + 97])),
      input.length
    ),
};
