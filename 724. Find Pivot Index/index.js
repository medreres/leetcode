/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let low = 1,
    high = nums.length - 2;
  let sum_left = nums[0],
    sum_right = nums[nums.length - 1];
  let pivot = -1;
  do {
    if (sum_left < sum_right) sum_left += nums[low++];
    else if (sum_left > sum_right) sum_right += nums[high--];

    pivot = (low + high) / 2;
  } while (sum_left !== sum_right && low < high);

  return pivot;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
