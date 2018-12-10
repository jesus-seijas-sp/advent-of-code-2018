class Guard {
  constructor(id) {
    this.id = id;
    this.asleepMinutes = 0;
    this.lastAction = undefined;
    this.hourMap = [];
    this.minuteMoreSleeped = undefined;
  }

  sleep(info) {
    this.lastAction = info;
  }

  awake(info) {
    for (let i = this.lastAction.minute; i < info.minute; i += 1) {
      this.asleepMinutes += 1;
      this.hourMap[i] = (this.hourMap[i] || 0) + 1;
      if (
        this.minuteMoreSleeped === undefined ||
        this.hourMap[this.minuteMoreSleeped] < this.hourMap[i]
      ) {
        this.minuteMoreSleeped = i;
      }
    }
  }
}

function getInfoFromLine(line) {
  const words = line.slice(19).split(' ');
  return {
    minute: parseInt(line.slice(15, 17), 10),
    action: { Guard: 'start', wakes: 'awake', falls: 'sleep' }[words[0]],
    guardId: words[0] === 'Guard' ? parseInt(words[1].slice(1), 10) : undefined,
  };
}

function processGuards(input) {
  let currentGuard;
  const guards = {};
  input.sort().forEach(line => {
    const info = getInfoFromLine(line);
    if (info.guardId) {
      if (!guards[info.guardId]) {
        guards[info.guardId] = new Guard(info.guardId);
      }
      currentGuard = guards[info.guardId];
    } else {
      currentGuard[info.action](info);
    }
  });
  return guards;
}

function part1(input) {
  const guards = processGuards(input);
  const worstGuardId = Object.keys(guards).reduce((prev, key) =>
    guards[prev].asleepMinutes < guards[key].asleepMinutes ? key : prev
  );
  return guards[worstGuardId].minuteMoreSleeped * worstGuardId;
}

function part2(input) {
  const guards = processGuards(input);
  let worstGuard;
  Object.keys(guards).forEach(guardId => {
    const guard = guards[guardId];
    if (
      guard.minuteMoreSleeped !== undefined &&
      (worstGuard === undefined ||
        worstGuard.hourMap[worstGuard.minuteMoreSleeped] <
          guard.hourMap[guard.minuteMoreSleeped])
    ) {
      worstGuard = guard;
    }
  });
  return worstGuard.id * worstGuard.minuteMoreSleeped;
}

module.exports = {
  part1,
  part2,
};
