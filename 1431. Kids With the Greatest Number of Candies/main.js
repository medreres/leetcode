/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let maxValue = Math.max(...candies);
    let res = candies.map(x => (x + extraCandies >= maxValue) ? true : false);
    return res;
    
};

// litle optimization, now not adding extra candies n times
 var kidsWithCandies = function(candies, extraCandies) {
    let maxValue = Math.max(...candies) - extraCandies;
    let res = candies.map(x => (x  >= maxValue) ? true : false);
    return res;
    
};