function iterate(context) {
  const { recipes, elf1, elf2 } = context;
  const sum = recipes[elf1] + recipes[elf2];
  recipes.push(...`${sum}`.split('').map(Number));
  return {
    recipes,
    elf1: (elf1 + recipes[elf1] + 1) % recipes.length,
    elf2: (elf2 + recipes[elf2] + 1) % recipes.length,
  };
}

function part1(input) {
  let context = { recipes: [3, 7], elf1: 0, elf2: 1 };
  while (context.recipes.length < input + 10) {
    context = iterate(context);
  }
  return context.recipes.slice(input, input + 10).join('');
}

function part2(input) {
  let context = { recipes: [3, 7], elf1: 0, elf2: 1 };
  while (true) {
    context = iterate(context);
    const index = context.recipes
      .slice(-input.length - 1)
      .join('')
      .indexOf(input);
    if (index > -1) {
      return context.recipes.length - input.length - 1 + index;
    }
  }
}

module.exports = {
  part1,
  part2,
};
