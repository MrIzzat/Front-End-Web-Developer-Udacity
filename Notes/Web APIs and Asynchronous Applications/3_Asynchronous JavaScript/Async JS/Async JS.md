# Asynchronous JavaScript

JavaScript is a single threaded language. It will mostly be run as a singe process. Async code is sometimes needed for certain tasks. The most common async function is the `setTimeout()` function.

Synchronous code refers tocode that is run from top to bottom as compared to asynchronous code which does not need to follow this pattern; code can be run out of order.

Examples of async code are the `setTimeout()` function as well as event listener functions.

Async code is useful when code needs to be run in respect to a certain process rather than its order in the code.


For example:

A synchronous JavaScript code would look like this:

```js
function sync(){
    console.log("first");
}

sync();

console.log("second");
```

This would print out:
```
first
second
```

An asynchronous JavaScript code would look like this:

```js
setTimeout(function(){ console.log('third') }, 3000);

function sync(){
console.log('first')
}

sync()
console.log('second')
```

This would output:

```
first
second
third
```

Try these out in `Async.html` and `Sync.html`.


Async promises can be used to run code asynchronously based on a condition rather than time (like `setTimeout()`).