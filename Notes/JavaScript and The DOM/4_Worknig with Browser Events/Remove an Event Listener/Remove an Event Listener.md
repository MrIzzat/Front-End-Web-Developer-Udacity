# Using `.removeEventListener()` to remove a listener

The basic syntax for `.removeEventListener()` is:


```js
eventTarget.removeEventListener(eventToListenFor, functionToRemove);
```

As with `.addEventListener()`, `.removeEventListener()` requires three things:

* An event target, also called a **target**.
* The type of event to listen for, also called the **type**.
* The function to remove, also known as the **listener**.

The **listener** function must be the exact same function as the added using the `addEventListener()` function, not a replica of the original.

For example:

```js

function eventFunction(){
    console.log('howdy');
}

document.addEventListener('click', eventFunction);

document.removeEventListener('click', eventFunction);
```

This successfully adds and removes the `eventFunction` function from the `document` object.

The reason why the function as able to be remove successfully because the exact same **listener** with the exact same **type** and from the exact same **target** was removed, if any of these three conditions were different then the function would not have been removed.


Another example:


```js
document.addEventListener('click', function eventFunction(){
    console.log('howdy');
});

document.removeEventListener('click', function eventFunction(){
    console.log('howdy');
});
```

This won't work, the event listener won't be removed from the `document` object.

Despite the event **type** and **target** being the same, the **listener** function is different in the `addEventListener()` and the `removeEventListener()` functions. The two `eventFunction()` functions have two different memory addresses, therefore they are not the same function.

![](./Different%20Functions.png)

