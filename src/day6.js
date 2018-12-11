function inputToWorld(input) {
  const world = {
    coordinates: [],
    left: Infinity,
    right: -Infinity,
    top: -Infinity,
    bottom: Infinity,
  };
  input.forEach(str => {
    const tokens = str.split(',');
    const coord = {
      id: str,
      x: parseInt(tokens[0], 10),
      y: parseInt(tokens[1], 10),
      times: 0,
      outside: false,
    };
    world.coordinates.push(coord);
    world.left = Math.min(coord.x, world.left);
    world.right = Math.max(coord.x, world.right);
    world.top = Math.max(coord.y, world.top);
    world.bottom = Math.min(coord.y, world.bottom);
  });
  return world;
}

function manhattanDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function getBest(world, x, y) {
  let bestDistance = Infinity;
  let bestCoordinate;
  let total = 0;
  for (let i = 0; i < world.coordinates.length; i += 1) {
    const coordinate = world.coordinates[i];
    const distance = manhattanDistance(coordinate.x, coordinate.y, x, y);
    total += distance;
    if (distance < bestDistance) {
      bestDistance = distance;
      bestCoordinate = coordinate;
    } else if (distance === bestDistance && bestCoordinate) {
      bestCoordinate = undefined;
    }
  }
  return { total, coordinate: bestCoordinate };
}

function process(world) {
  const map = [];
  for (let x = world.left; x <= world.right; x += 1) {
    const row = [];
    map.push(row);
    for (let y = world.bottom; y <= world.top; y += 1) {
      const result = getBest(world, x, y);
      if (result.coordinate) {
        result.coordinate.times += 1;
        if (
          x === world.left ||
          x === world.right ||
          y === world.bottom ||
          y === world.top
        ) {
          result.coordinate.outside = true;
        }
      }
    }
  }
  let best = 0;
  for (let i = 0; i < world.coordinates.length; i += 1) {
    const coordinate = world.coordinates[i];
    if (!coordinate.outside && coordinate.times > best) {
      best = coordinate.times;
    }
  }
  return best;
}

function part1(input) {
  return process(inputToWorld(input));
}

function part2(input, maxDistance) {
  const world = inputToWorld(input);
  let result = 0;
  for (let x = world.left; x <= world.right; x += 1) {
    for (let y = world.bottom; y <= world.top; y += 1) {
      const best = getBest(world, x, y);
      if (best.total < maxDistance) {
        result += 1;
      }
    }
  }
  return result;
}

module.exports = {
  part1,
  part2,
};
