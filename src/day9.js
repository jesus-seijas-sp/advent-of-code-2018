class Marble {
  constructor(value) {
    this.value = value;
    this.next = this;
    this.prev = this;
  }

  clockwise(numMoves) {
    let result = this;
    for (let i = 0; i < numMoves; i += 1) {
      result = result.next;
    }
    return result;
  }

  counterClockwise(numMoves) {
    let result = this;
    for (let i = 0; i < numMoves; i += 1) {
      result = result.prev;
    }
    return result;
  }

  insert(node) {
    node.next = this.next;
    node.prev = this;
    this.next.prev = node;
    this.next = node;
    return node;
  }

  remove() {
    this.prev.next = this.next;
    this.next.prev = this.prev;
    return this.next;
  }
}

function part1(numPlayers, numMarbles) {
  let currentMarble = new Marble(0);
  currentMarble.next = currentMarble;
  currentMarble.prev = currentMarble;
  const players = {};
  let currentPlayer = 0;
  for (let i = 1; i <= numMarbles; i += 1) {
    if (i % 23 === 0) {
      if (!players[currentPlayer]) {
        players[currentPlayer] = 0;
      }
      players[currentPlayer] += i;
      currentMarble = currentMarble.counterClockwise(7);
      players[currentPlayer] += currentMarble.value;
      currentMarble = currentMarble.remove();
    } else {
      currentMarble = currentMarble.clockwise(1);
      currentMarble = currentMarble.insert(new Marble(i));
    }
    currentPlayer = (currentPlayer + 1) % numPlayers;
  }
  let result = 0;
  Object.keys(players).forEach(key => {
    if (players[key] > result) {
      result = players[key];
    }
  });
  return result;
}

module.exports = {
  part1,
};
