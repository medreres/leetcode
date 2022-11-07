/**
 * @param {number[]} nums
 * @return {number[]}
 */

// hash map
 var smallerNumbersThanCurrent = function(nums) {
    let map = new Map();
    let copy = Array.from(nums)
    copy.sort((a,b) => (a>b)? 1: -1)
    
    copy.forEach((num,i) => {
        if (map.get(num) === undefined)
            map.set(num,i);
    })
    
    for (let i = 0; i < nums.length; i++) {
        copy[i] = map.get(nums[i]);
    }
    return copy;
    
};


// elegant way
var smallerNumbersThanCurrent = function(nums) {
    let frequency = new Array(101).fill(0);
    let smaller = new Array(101).fill(0);
    
    nums.forEach(num => frequency[num]++);
    
    for (let i = 1; i < 101; i++) {
        smaller[i] = smaller[i-1] + frequency[i-1];
    }
    
    nums.forEach((num, index) => nums[index] = smaller[nums[index]]);
    return nums;
    
};
