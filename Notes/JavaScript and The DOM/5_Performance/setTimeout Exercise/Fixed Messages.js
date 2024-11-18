/* TODO: Wrap the console.log statements in setTimeout statements
   so the statements run in numerical order */

const numbers = [5,1,4,3,2];

for (const number in numbers) {
    setTimeout(() =>console.log(`This is message ${numbers[number]}`)
    ,numbers[number]*1000);
} 


