
const startTime = performance.now();

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endTime = performance.now();

const totalTime = endTime-startTime;

console.log(`The total time it took to execute this code is: ${totalTime} milliseconds`);