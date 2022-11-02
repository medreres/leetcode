/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(client => client.reduce((a,e) => a+e)));
};