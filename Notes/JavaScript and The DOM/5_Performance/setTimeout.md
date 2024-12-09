# Running Code Later

Similar to how `addEventListener()` adds code to be ran later on, `setTimeout()` does something similar. It takes the function to be ran later and the number of milliseconds the code should wait before running the function as arguments.

For example:

```js
setTimeout(function sayHi(){
    console.log('Howdy');
}, 1000);
```

This code prints `howdy` to the console after 1 second (1000 miliseconds).

The `setTimeout()` function is an API provided by the browser. As with `addEventListener()`, it passes the function to the browser where the browser holds onto it and starts the timer. Once the timer ends, it sends the function it has to the event queue, where it passes it to the call stack for execution once the call stack is empty.