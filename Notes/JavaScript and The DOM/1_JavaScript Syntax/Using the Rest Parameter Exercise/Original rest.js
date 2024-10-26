// Your code goes here
function average(...nums) {
  
}

// TEST CODE: Code below tests your average function
testSets = [
    [[2, 6], 4],
    [[2, 3, 3, 5, 7, 10], 5],
    [[7, 1432, 12, 13, 100], 312.8],
    [[], 0],
];

function codeTest(testSets) {
    for (test of testSets) {
        if (average(...test[0]) !== test[1]) {
            return 'Your code fails. Try again!';
        }
    }
    return 'Your code passes!';
}

console.log(codeTest(testSets));

