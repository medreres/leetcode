/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    let res = new Array(encoded.length + 1);
    res[0] = first;
    for (let i = 1; i < res.length;i++) {
        res[i] = res[i-1] ^ encoded[i-1]; 
    }
    return res;
};