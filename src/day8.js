function buildNode(input, position) {
  const node = {
    start: position,
    numNodes: input[position],
    numMetadata: input[position + 1],
    startNodes: position + 2,
    startMetadata: -1,
    end: -1,
    childs: [],
  };
  let cursor = position + 2;
  for (let i = 0; i < node.numNodes; i += 1) {
    const child = buildNode(input, cursor);
    cursor = child.end + 1;
    node.childs.push(child);
  }
  node.startMetadata = cursor;
  node.end = node.startMetadata + node.numMetadata - 1;
  return node;
}

function sumMetadata(input, node) {
  let result = 0;
  for (let i = node.startMetadata; i <= node.end; i += 1) {
    result += input[i];
  }
  for (let i = 0; i < node.numNodes; i += 1) {
    result += sumMetadata(input, node.childs[i]);
  }
  return result;
}

function sumMetadata2(input, node) {
  let result = 0;
  if (node.numNodes === 0) {
    for (let i = node.startMetadata; i <= node.end; i += 1) {
      result += input[i];
    }
    return result;
  }
  for (let i = node.startMetadata; i <= node.end; i += 1) {
    const index = input[i] - 1;
    if (index >= 0 && index < node.numNodes) {
      result += sumMetadata2(input, node.childs[index]);
    }
  }
  return result;
}

function buildTree(input) {
  return buildNode(input, 0);
}

function part1(raw) {
  const input = raw.split(' ').map(x => parseInt(x, 10));
  const tree = buildTree(input);
  return sumMetadata(input, tree);
}

function part2(raw) {
  const input = raw.split(' ').map(x => parseInt(x, 10));
  const tree = buildTree(input);
  return sumMetadata2(input, tree);
}

module.exports = {
  part1,
  part2,
};
