/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    let arrConcat = [];
    
    for (let i = 0; 2 * i + 1 < nums.length; i++) {
        let newArr = new Array(nums[2*i]).fill(nums[2*i+1]);
        arrConcat = arrConcat.concat(newArr);
    }
    
    return arrConcat;
};