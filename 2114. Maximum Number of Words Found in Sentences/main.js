/**
 * @param {string[]} sentences
 * @return {number}
 */

// brute method
// space complexity O(n * m), where n - number of items in list,
// m - number of words in each sentence

 var mostWordsFound = function(sentences) {
    return Math.max(...sentences.map(sntc => sntc.split(' ').length))
};

// smart method

 var mostWordsFound = function(sentences) {
    let count = 0;
    for (const str of sentences) {
        let numSpaces = 1;
        for (let i = 0; i < str.length; i++){
            if (str[i] === ' ')
                numSpaces++;
        }
        if (numSpaces > count)
            count = numSpaces;
    }
    return count;
};