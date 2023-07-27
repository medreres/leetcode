// * Brute force

function arithmeticTripletsBruteForce(nums: number[], diff: number): number {
  let pairsCount: number = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const leftDiff = nums[j] - nums[i];
        const rightDiff = nums[k] - nums[j];

        if (leftDiff === diff && rightDiff === diff) {
          pairsCount += 1;
        }
      }
    }
  }

  return pairsCount;
}

// * Hash map
function arithmeticTripletsOptimized(arr: number[], targetDiff: number): number {
  let pairsCount = 0;

  const map = new Map<number, boolean>();

  // iterate over each number and check if in hash map exists number + diff and number - diff
  arr.forEach((num) => {
    map.set(num, true);

    const numDiff = num - targetDiff;
    const nummDiffTwice = num - targetDiff * 2;

    if (map.has(numDiff) && map.has(nummDiffTwice)) {
      pairsCount += 1;
    }
  });

  return pairsCount;
}
