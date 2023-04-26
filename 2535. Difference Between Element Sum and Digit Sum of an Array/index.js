/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    return nums.reduce((acc, curr) => {
        if (curr < 10) {
            return acc
        }

        let digitSum = 0;
        let copyCurr = curr;

        if (curr > 9) {

            while (copyCurr) {
                digitSum += copyCurr % 10;
                copyCurr = parseInt(copyCurr / 10)
            }
        } else {
            digitSum = curr;
        }

        return (acc += curr - digitSum);
    }, 0);
};