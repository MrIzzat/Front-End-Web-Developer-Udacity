# Why doesn't this code work?

```js
const numbers = [5,1,4,3,2];
for ( var i = 0; i < numbers.length; i++) {
    setTimeout(()=>  console.log(`This is message ${numbers[i]}`), numbers[i] * 100);
} 

```

The reason this does not work is because `setTimeout()` uses The current value of any variable rather than the value at  The time of the `setTimeout()` call.

for loops in JavaScript run fast, faster than the setTimeout() call has time to execute the passed function's code. This means that when it's time to run the function within the `setTimeout()` function, it is using the current `i` value. Since the for loop finished running before the `setTimeout()`'s function is ran, that means the `i` has reached a value of `5` and exited the loop. The funciton is trying to access the element at index 5 but there are isn't one, so it returns `undefined`

This can be fixed by using `let` or `const` instead of `var`, since it creates a new lexical scope for each `setTimeout` call. This makes sure the value of `i` in thta call is fixed for the value of `i` when the call was made.

Try out hte code in `ExtraCredit.js`.