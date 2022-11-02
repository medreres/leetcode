/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let arr = new Array(nums.length);
    for (let i = 0, j = 0; i < nums.length; i+=2, j++)
        {
            arr[i] = nums[j];
            arr[i+1] = nums[j+n];
        }
    return arr;
};