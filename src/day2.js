const frequencyCount = str =>
  [...str].reduce((result, char) => {
    result[result[char]] -= 1;
    result[char] = (result[char] || 0) + 1;
    result[result[char]] = (result[result[char]] || 0) + 1;
    return result;
  }, []);

function part1(data) {
  const amount = { 2: 0, 3: 0 };
  data.forEach(item => {
    const [, , a, b] = frequencyCount(item);
    amount[2] += a > 0 ? 1 : 0;
    amount[3] += b > 0 ? 1 : 0;
  });
  return amount[2] * amount[3];
}

function indexDifferent(str1, str2) {
  let differs = 0;
  let index = -1;
  for (let i = 0, l = str1.length; i < l; i += 1) {
    if (str1[i] !== str2[i]) {
      differs += 1;
      index = i;
      if (differs > 1) {
        return -1;
      }
    }
  }
  return differs === 1 ? index : -1;
}

function part2(data) {
  for (let i = 0; i < data.length; i += 1) {
    for (let j = i + 1; j < data.length; j += 1) {
      const str1 = data[i];
      const str2 = data[j];
      const index = indexDifferent(str1, str2);
      if (index > -1) {
        return str1.slice(0, index) + str1.slice(index + 1);
      }
    }
  }
  return undefined;
}

module.exports = {
  part1,
  part2,
};
