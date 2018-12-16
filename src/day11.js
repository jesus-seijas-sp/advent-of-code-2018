class Grid {
  constructor(serialNumber) {
    this.serialNumber = serialNumber;
    this.build();
  }

  calculate(x, y) {
    const rackId = x + 10;
    const powerLevel = (rackId * y + this.serialNumber) * rackId;
    return (Math.floor(powerLevel / 100) % 10) - 5;
  }

  build() {
    this.map = [];
    for (let y = 1; y <= 300; y += 1) {
      const row = [];
      this.map.push(row);
      for (let x = 1; x <= 300; x += 1) {
        row.push(this.calculate(x, y));
      }
    }
  }

  getValue(x, y) {
    return this.map[y - 1][x - 1];
  }

  bestSquare(size = 3) {
    const result = {
      x: undefined,
      y: undefined,
      value: -Infinity,
    };
    for (let y = 1; y <= 300 - size; y += 1) {
      let currentValue = 0;
      for (let x = 1; x <= 300 - size; x += 1) {
        if (x === 1) {
          for (let i = 0; i < size; i += 1) {
            for (let j = 0; j < size; j += 1) {
              currentValue += this.getValue(x + i, y + j);
            }
          }
        } else {
          for (let j = 0; j < size; j += 1) {
            currentValue -= this.getValue(x - 1, y + j);
            currentValue += this.getValue(x + size - 1, y + j);
          }
        }
        if (currentValue > result.value) {
          result.value = currentValue;
          result.x = x;
          result.y = y;
        }
      }
    }
    return result;
  }

  bestSquareAnySize() {
    let result;
    for (let size = 1; size <= 300; size += 1) {
      const current = this.bestSquare(size);
      if (!result || current.value > result.value) {
        result = current;
        result.size = size;
      }
    }
    return result;
  }
}

function part1(serialNumber) {
  return new Grid(serialNumber).bestSquare();
}

function part2(serialNumber) {
  return new Grid(serialNumber).bestSquareAnySize();
}

module.exports = {
  Grid,
  part1,
  part2,
};
