/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let mixed = new Array(s.length);
    Array.from(s).forEach((ch,i) => mixed[indices[i]] = ch);
    return mixed.join('');
};