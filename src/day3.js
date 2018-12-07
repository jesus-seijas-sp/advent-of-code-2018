function structure(data) {
  return data.map(x => {
    const tokens = x.split(/,|x| |:|#/);
    return {
      tag: tokens[1],
      left: parseInt(tokens[3], 10),
      top: parseInt(tokens[4], 10),
      width: parseInt(tokens[6], 10),
      height: parseInt(tokens[7], 10),
    };
  });
}

function draw(input, fabric) {
  for (let x = input.left, lx = input.left + input.width; x < lx; x += 1) {
    for (let y = input.top, ly = input.top + input.height; y < ly; y += 1) {
      const coord = `${x},${y}`;
      if (!fabric[coord]) {
        fabric[coord] = [];
      }
      fabric[coord].push(input.tag);
    }
  }
}

function process(srcData) {
  const data = structure(srcData);
  const fabric = {};
  data.forEach(item => {
    draw(item, fabric);
  });
  return fabric;
}

function part1(srcData) {
  const fabric = process(srcData);
  let result = 0;
  Object.keys(fabric).forEach(coord => {
    if (fabric[coord].length > 1) {
      result += 1;
    }
  });
  return result;
}

function part2(srcData) {
  const fabric = process(srcData);
  const tags = {};
  Object.keys(fabric).forEach(coord => {
    const overlapped = fabric[coord].length > 1;
    fabric[coord].forEach(tag => {
      if (overlapped && !tags[tag]) {
        tags[tag] = true;
      } else if (tags[tag] === undefined) {
        tags[tag] = false;
      }
    });
  });
  const result = [];
  Object.keys(tags).forEach(tag => {
    if (tags[tag] === false) {
      result.push(tag);
    }
  });
  return result;
}

module.exports = {
  part1,
  part2,
};
