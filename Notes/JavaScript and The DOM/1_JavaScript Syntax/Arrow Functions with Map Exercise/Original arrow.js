/* Create an arrow function named doubleOdd that takes in an array of numbers 
   and uses map to return an array where all of the odd numbers are doubled */

// Your code goes here
const doubleOdd = ?

// TEST CODE: Code below tests your doubleOdd function
testSets = [
    [
        [2, 6],
        [2, 6],
    ],
    [
        [2, 3, 3, 5, 7, 10],
        [2, 6, 6, 10, 14, 10],
    ],
    [
        [7, 1432, 12, 13, 107],
        [14, 1432, 12, 26, 214],
        [[], []],
    ],
];

function codeTest(testSets) {
    for (const test of testSets) {
        const doubleArr = doubleOdd(test[0]);
        for (let i = 0; i <= doubleArr.length; i++)
            if (doubleArr[i] != test[1][i]) {
                return 'Your code fails. Try again!';
            }
    }
    return 'Your code passes!';
}

console.log(codeTest(testSets));