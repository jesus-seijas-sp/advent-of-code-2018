class Graph {
  constructor(input, numElfs = 5, extraTime = 60) {
    this.nodes = {};
    this.numElfs = numElfs;
    this.extraTime = extraTime;
    this.pipeline = new Array(this.numElfs);
    this.build(input);
  }

  getNode(name) {
    if (!this.nodes[name]) {
      this.nodes[name] = {
        name,
        parents: [],
        childs: [],
        visited: false,
        time: this.extraTime + name.charCodeAt() - 64,
      };
    }
    return this.nodes[name];
  }

  static connect(nodeSrc, nodeTgt) {
    nodeSrc.childs.push(nodeTgt);
    nodeTgt.parents.push(nodeSrc);
  }

  build(input) {
    input.forEach(line => {
      const tokens = line.split(' ');
      Graph.connect(
        this.getNode(tokens[1]),
        this.getNode(tokens[7])
      );
    });
  }

  static allParentsVisited(node) {
    for (let i = 0; i < node.parents.length; i += 1) {
      if (!node.parents[i].visited) {
        return false;
      }
    }
    return true;
  }

  getPossibleHeads() {
    const result = [];
    Object.keys(this.nodes).forEach(key => {
      const node = this.nodes[key];
      if (!node.visited && Graph.allParentsVisited(node)) {
        result.push(node);
      }
    });
    return result.sort((a, b) => a.name > b.name);
  }

  getHead() {
    return this.getPossibleHeads()[0];
  }

  getTaskList() {
    const result = [];
    let head = this.getHead();
    while (head) {
      head.visited = true;
      result.push(head.name);
      head = this.getHead();
    }
    return result;
  }

  stepPipeline() {
    const result = [];
    for (let i = 0; i < this.pipeline.length; i += 1) {
      if (!this.pipeline[i]) {
        result.push(i);
      } else {
        this.pipeline[i].time -= 1;
        if (this.pipeline[i].time === 0) {
          this.pipeline[i].node.visited = true;
          result.push(i);
          this.pipeline[i] = undefined;
        }
      }
    }
    return result;
  }

  getTime() {
    this.pipeline = new Array(this.numElfs);
    let heads = this.getPossibleHeads();
    let result = 0;
    let slots = this.stepPipeline();
    while (heads.length > 0) {
      let cursor = 0;
      for (let i = 0; i < this.pipeline.length; i += 1) {
        if (this.pipeline[i]) {
          const pos = heads.indexOf(this.pipeline[i].node);
          if (pos >= 0) {
            heads.splice(pos, 1);
          }
        }
      }
      for (let i = 0; i < slots.length; i += 1) {
        if (heads[cursor]) {
          this.pipeline[slots[i]] = {
            node: heads[cursor],
            time: heads[cursor].time,
          };
          cursor += 1;
        }
      }
      slots = this.stepPipeline();
      result += 1;
      heads = this.getPossibleHeads();
    }
    return result;
  }
}

function part1(input) {
  return new Graph(input, 10000, -1000).getTaskList().join('');
}

function part2(input, numElfs = 5, extraTime = 60) {
  return new Graph(input, numElfs, extraTime).getTime();
}

module.exports = {
  part1,
  part2,
};
