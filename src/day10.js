class StarSystem {
  constructor(input) {
    this.stars = [];
    this.currentSecond = 0;
    this.build(input);
  }

  findBoundaries() {
    this.left = Infinity;
    this.right = -Infinity;
    this.top = Infinity;
    this.bottom = -Infinity;
    this.stars.forEach(star => {
      this.left = Math.min(this.left, star.x);
      this.right = Math.max(this.right, star.x);
      this.top = Math.min(this.top, star.y);
      this.bottom = Math.max(this.bottom, star.y);
    });
  }

  addPoint(x, y, speedX, speedY) {
    this.stars.push({
      x: parseInt(x, 10),
      y: parseInt(y, 10),
      speedX: parseInt(speedX, 10),
      speedY: parseInt(speedY, 10),
    });
  }

  build(input) {
    input.forEach(line => {
      const tokens = line.split(/ |<|>|,/).filter(x => x !== '');
      this.addPoint(tokens[1], tokens[2], tokens[4], tokens[5]);
    });
  }

  step(n = 1) {
    this.currentSecond += n;
    this.stars.forEach(star => {
      star.x += star.speedX * n;
      star.y += star.speedY * n;
    });
  }

  findBest() {
    let lastWidth = Infinity;
    let currentWidth = Infinity;
    while (currentWidth <= lastWidth) {
      lastWidth = currentWidth;
      this.step();
      this.findBoundaries();
      currentWidth = this.right - this.left;
    }
    this.step(-1);
    return this.draw();
  }

  draw() {
    this.findBoundaries();
    const result = [];
    for (let y = this.top; y <= this.bottom; y += 1) {
      const row = [];
      result.push(row);
      for (let x = this.left; x <= this.right; x += 1) {
        row.push('.');
      }
    }
    this.stars.forEach(star => {
      result[star.y - this.top][star.x - this.left] = '#';
    });
    return result.map(x => x.join('')).join('\n');
  }
}

function part1(input) {
  return new StarSystem(input).findBest();
}

function part2(input) {
  const starSystem = new StarSystem(input);
  starSystem.findBest();
  return starSystem.currentSecond;
}

module.exports = {
  part1,
  part2,
};
