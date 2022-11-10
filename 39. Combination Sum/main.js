/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let result = [];
    let currComb = [];
    findTarget(target, currComb, 0, result, 0, candidates);
    return result;
    
};

const findTarget = (target,currComb, currSum, result, currIndex, candidates) => {
    
    if (currSum > target)
        return;
    
    if (currSum === target) {
        result.push(Array.from(currComb));
        return;
    }
    
    for (let i = currIndex; i < candidates.length; i++) {
        
        currComb.push(candidates[i]);
        currSum += candidates[i];
        findTarget(target, currComb, currSum, result, i, candidates);
        currSum -= candidates[i];
        currComb.pop();
        
    }
    
    
    
    
};


console.log(combinationSum([2,3,6,7], 7))