var removeDuplicates = function(nums) {
    let k = nums.length
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i-1]) {
            nums[i-1] = nums[i]
            k--;
        }
    }
    return k;
};

let arr = [1,1,2]
let k = removeDuplicates(arr)
console.log(arr,k)