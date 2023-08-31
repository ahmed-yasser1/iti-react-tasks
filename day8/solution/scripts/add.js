function add() {
  let nums = add.arguments;
  let len = nums.length;

  if (len === 0) {
    throw new Error(`No Paramaters Passed...`);
  }
  let sum = 0;

  for (let i = 0; i < len; i++) {
    if (typeof nums[i] !== `number`) {
      throw new Error(`Input must be of type number...`);
    }
    sum += nums[i];
  }

  return sum;
}

// console.log(add(1, 2, 3, 4)); // test case 1

// console.log(add()) // test case 2

console.log(add(1, 2, 3, 4, "ahmed", true)); // test case 3
