/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let result = operations.reduce((total, element) => {
        if (element.includes('-'))
            return total - 1;
        else
            return total + 1;
    }, 0)
    return result;
};