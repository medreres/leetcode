/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const runningSum = function(nums) {
    nums.reduce((total, element, index, arr) => arr[index] += total);
    return nums;
};

                
               