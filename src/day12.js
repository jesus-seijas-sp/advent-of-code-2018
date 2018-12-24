function nextGeneration(state, rules) {
  const keys = Object.keys(state);
  const result = [];
  for (let i = Math.min(...keys) - 2; i <= Math.max(...keys) + 2; i += 1) {
    const group = [-2, -1, 0, 1, 2].map(x => state[i + x] || '.').join('');
    if (rules[group] === '#') {
      result[i] = '#';
    }
  }
  return result;
}

function iterate(context, times) {
  let { state } = context;
  for (let i = 0; i < times; i += 1) {
    state = nextGeneration(state, context.rules);
  }
  context.state = state;
  return Object.keys(state).reduce((a, b) => a + parseInt(b, 10), 0);
}

function getContext(input) {
  const context = { state: input[0].match(/[#.]/g) };
  context.rules = input.slice(2).reduce((prev, current) => {
    const [key, value] = current.split(' => ');
    prev[key] = value;
    return prev;
  }, {});
  return context;
}

function part2(input, n = 50000000000) {
  const context = getContext(input);
  const firstGen = 1000;
  const secondGen = 5000;
  const firstValue = iterate(context, firstGen);
  const secondValue = iterate(context, secondGen - firstGen);
  return (
    firstValue +
    ((secondValue - firstValue) / (secondGen - firstGen)) * (n - firstGen)
  );
}

module.exports = {
  part1: input => iterate(getContext(input), 20),
  part2,
};
