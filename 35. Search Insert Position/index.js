/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let middle = parseInt((high + low) / 2);

  if (target > nums[high]) {
    return high + 1;
  }

  while (low <= high) {
    const number = nums[middle];

    if (number > target) {
      high = middle - 1;
    } else if (number < target) {
      low = middle + 1;
    } else {
      return middle;
    }

    middle = parseInt((high + low) / 2);
  }

  return low;
};
