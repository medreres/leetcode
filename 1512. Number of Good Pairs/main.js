/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force
 var numIdenticalPairs = function(nums) {
    let goodPairs = 0;
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++)
            if (nums[i] === nums[j] && i < j)
                goodPairs++;
    return goodPairs;
};

// hash map
var numIdenticalPairs = function(nums) {
    let map = {};
    let count = 0;
    for (const num of nums)
        if (map[num]) {
            count += map[num]++;
        }
        else
            map[num] = 1;
    return count;
};