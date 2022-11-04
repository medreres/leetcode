/**
 * @param {number[]} nums
 * @return {number[]}
 */
// hash map
 var smallerNumbersThanCurrent = function(nums) {
    let map = {};
    let copy = [...nums];
    copy.sort()
    
    copy.forEach((num,i) => {
        if (!map[num])
            map[num] = i;
    })
    
    for (let i = 0; i < nums.length; i++) {
        copy[i] = map[nums[i]];
    }
    return copy;
    
};