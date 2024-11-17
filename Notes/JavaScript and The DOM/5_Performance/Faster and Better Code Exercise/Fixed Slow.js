// Import performance from performance hooks module to use performance in the Node environment
const { performance } = require('perf_hooks');
const { arrayBuffer } = require('stream/consumers');

// Create a long starter array
const longStarter = [];
for (let i = 0; i < 1000; i++) {
    longStarter.push(i);
}

// Slow version of the code
const slowArrayMaker = (array) => {
    // Set up empty array
    const slowArray = [];

    // Iterate through an array and update the value of each array element
    for (let j = 0; j < array.length; j++) {
        slowArray[j] = 0;
        for (let k = 0; k < j; k++) {
            slowArray[j] += array.length;
        }
    }
    return slowArray;
};

// Faster version of the code
const fastArrayMaker = (array) => {
    const fastArray = [];
    for(let i=0; i<array.length; i++){
        fastArray[i] = 0
        fastArray[i] += array.length*i
    }
    return fastArray;
};

// Test code ** DO NOT CHANGE **
function testCode() {
    // Run slow version of code
    const slowStart = performance.now();
    slowArray = slowArrayMaker(longStarter);
    const slowEnd = performance.now();

    // Run faster version of the code
    const fasterStart = performance.now();
    fastArray = fastArrayMaker(longStarter);
    const fasterEnd = performance.now();

    // Check if array lengths are the same
    if (
        fastArray.length === slowArray.length &&
        fastArray.length === longStarter.length
    ) {
        // If lengths are the same, check to see if array values match
        len = fastArray.length
        for (let m = 0; m < len; m++) {
            if (fastArray[m] !== slowArray[m]) {
                // If items donn't match, the array values test fails
                console.log(
                    `Arrays do not match. \nfastArray[${m}]: ${fastArray[m]}\nslowArray[${m}]: ${slowArray[m]}`
                );
                return;
            }
        }
    } else {
        // If array lengths are different array length test fails
        console.log(
            `Array lengths are different. \nlongStarter: ${longStarter.length}\nfastArray: ${fastArray.length}\nslowArray: ${slowArray.length}`
        );
        return;
    }
    // Both tests pass!
    console.log('Slow code: ', slowEnd - slowStart);
    console.log('Fast code: ', fasterEnd - fasterStart);
    return;
}

testCode();

