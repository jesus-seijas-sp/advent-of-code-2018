function frequencyCount(str) {
  const count = {};
  [...str].forEach(char => {
    count[char] = (count[char] || 0) + 1;
  });
  const result = {};
  Object.keys(count).forEach(key => {
    result[count[key]] = (result[count[key]] || 0) + 1;
  });
  return result;
}

function part1(data) {
  let amount2 = 0;
  let amount3 = 0;
  data.forEach(item => {
    const frequency = frequencyCount(item);
    if (frequency[2] > 0) {
      amount2 += 1;
    }
    if (frequency[3] > 0) {
      amount3 += 1;
    }
  });
  return amount2 * amount3;
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
