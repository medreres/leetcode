/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    let target = [];
    nums.forEach((num, i) => target.splice(index[i],0, nums[i]));
    return target;
};