function part1(data) {
  return data.reduce((previous, current) => previous + current);
}

function part2(data) {
  const visited = { 0: true };
  let currentIndex = 0;
  let currentValue = 0;
  while (true) {
    currentValue += data[currentIndex];
    if (visited[currentValue]) {
      return currentValue;
    }
    visited[currentValue] = true;
    currentIndex = (currentIndex + 1) % data.length;
  }
}

module.exports = {
  part1,
  part2,
};
