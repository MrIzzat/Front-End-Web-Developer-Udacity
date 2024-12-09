const numbers = [5,1,4,3,2];
for ( var i = 0; i < numbers.length; i++) {
    setTimeout(()=>  console.log(`This is message ${numbers[i]}`), numbers[i] * 100);
} 

