function buildContext(input) {
  const speeds = {
    '<': [-1, 0],
    '>': [1, 0],
    '^': [0, -1],
    v: [0, 1],
  };
  const carts = [];
  const track = input.map((line, y) =>
    line.split('').map((char, x) => {
      if (['<', '>', '^', 'v'].indexOf(char) > -1) {
        carts.push({ x, y, speed: speeds[char], crashed: false, cross: 0 });
        return char === '<' || char === '>' ? '-' : '|';
      }
      return char;
    })
  );
  return { track, carts };
}

function move(track, carts, cart) {
  const actions = [s => [s[1], -s[0]], s => s, s => [-s[1], s[0]]];
  cart.x += cart.speed[0];
  cart.y += cart.speed[1];
  switch (track[cart.y][cart.x]) {
    case '+':
      cart.speed = actions[cart.cross || 0](cart.speed);
      cart.cross = ((cart.cross || 0) + 1) % actions.length;
      break;
    case '/':
      cart.speed = [-cart.speed[1], -cart.speed[0]];
      break;
    case '\\':
      cart.speed = [cart.speed[1], cart.speed[0]];
      break;
    default:
      break;
  }
  const samePos = (a, b) => a.x === b.x && a.y === b.y;
  const cols = carts.filter(c => !c.crashed && c !== cart && samePos(c, cart));
  if (cols.length > 0) {
    cart.crashed = true;
    cols.forEach(c => {
      c.crashed = true;
    });
  }
}

function iterate(context) {
  context.carts
    .filter(c => !c.crashed)
    .sort((a, b) => (a.y !== b.y ? a.y - b.y : a.x - b.x))
    .forEach(cart => move(context.track, context.carts, cart));
}

function part1(input) {
  const context = buildContext(input);
  while (context.carts.filter(c => c.crashed).length === 0) {
    iterate(context);
  }
  return context.carts.filter(c => c.crashed)[0];
}

function part2(input) {
  const context = buildContext(input);
  while (context.carts.filter(c => !c.crashed).length > 1) {
    iterate(context);
  }
  return context.carts.filter(c => !c.crashed)[0];
}

module.exports = {
  part1,
  part2,
};
