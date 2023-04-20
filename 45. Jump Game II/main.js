/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    
    let result = new Map();
    let combination = [];
    nums.sort();
    findCombination(nums, nums[nums.length - 1], combination, 0, 0, result);
    
    return Math.min([...result.values()].map(el => el.length));
    
};

const getHash = arr => {

    const key = arr.join('');
    return parseInt(key);

}

const findCombination = (candidates, target,combination, currentIndex, currentSum, result) => {
    
    if (currentSum > target)
        return;
    
    if (currentSum == target) {
        const key = getHash(combination);
        if (!result.has(key)) 
            result.set(key, Array.from(combination));
        return;
    }
    
    for (let i = currentIndex; i < candidates.length; i++) {

        if (i > currentIndex && candidates[i] === candidates[i-1])
            continue;
        
        currentSum += candidates[i];
        combination.push(candidates[i]);
        findCombination(candidates, target, combination, i + 1, currentSum, result);
        
        currentSum -= candidates[i];
        combination.pop();
    }
    
};


console.log(jump([2,3,1,1,4]))