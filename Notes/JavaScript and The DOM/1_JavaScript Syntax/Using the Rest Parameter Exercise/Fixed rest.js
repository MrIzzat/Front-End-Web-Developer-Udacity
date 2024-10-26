// Your code goes here
function average(...nums) {

  if (nums.length > 0) {
    
    let sum = 0;
    let count = 0;
    
    for (const num of nums) {
      sum += num;
      count++;
    }

    let average = sum / count;

    return average;
  }

  return 0;
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
      return "Your code fails. Try again!";
    }
  }
  return "Your code passes!";
}

console.log(codeTest(testSets));
