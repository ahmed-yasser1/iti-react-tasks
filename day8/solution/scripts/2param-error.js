function param2(p1, p2) {
  let nArgs = param2.arguments.length;
  if (nArgs < 2 || nArgs > 2) {
    throw new RangeError(`Invalid number of arguments...`);
  }
}

param2(3, 4, 93); // test case 1

// param2(93); // test case 2

// param2(93, 4); // test case 3
