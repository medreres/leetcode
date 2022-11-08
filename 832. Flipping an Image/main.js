/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    image.forEach(list => list.reverse())
    image.forEach(list => list.forEach((el,i) => list[i] = (el)? 0 : 1))
    return image;
    
};