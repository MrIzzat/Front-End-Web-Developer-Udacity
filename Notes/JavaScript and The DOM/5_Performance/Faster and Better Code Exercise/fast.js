// Faster version of the code
const fastArrayMaker = (array) => {
    const fastArray = [];
    const len = array.length;
    for (let l = 0; l < len; l++) {
        fastArray[l] = len * l;
    }
    return fastArray;
};