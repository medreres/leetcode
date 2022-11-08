/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function (nums, target) {
    let pivot = -1;
    let right = nums.length - 1;
    let left = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > target)
            right = mid - 1;
        else if (nums[mid] < target)
            left = mid + 1;
        else {
            pivot = mid;
            break;
        }
    }

    if (pivot === -1)
        return [-1, -1]

    left = right = pivot;
    while (true) {
        if (nums[left - 1] === target)
            left -= 1;
        else break;
    }

    while (true) {
        if (nums[right + 1] === target)
            right += 1;
        else break;
    }

    return [left, right];

};
