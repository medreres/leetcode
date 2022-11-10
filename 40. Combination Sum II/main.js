/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    let result = new Map();
    let combination = [];
    candidates.sort();
    findCombination(candidates, target, combination, 0, 0, result);
    
    return [...result.values()];
    
};

/**
 * 
 * @param {Array} array of combination
 */

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
