The `addEventListener()` function contains a third argument, the `useCapture` argument. The function does not default to use the **capturing phase** despite the name of the argument. When the function is called using only two arguments, it defaults to using the **bubbling phase**.

For example:

```js
document.addEventListener('click', function(){
    console.log('The document was clicked');
});
```
This code uses the **bubbling phase**


```js
document.addEventListener('click', function(){
    console.log('The document was clicked');
},true);
```

The last argument given was `true`, this means the `useCapture` argument will be set to `true`. This code makes the listener be invoked earlier, during the capturing phase.


If an event listener is set to fire during the capture phase, it will be invoked during the capture phase, meaning it will be invoked before any event in the bubbling phase, the phase event listeners use by default.

For example, in the following codes:

```js
// runs first in capturing phase
document.querySelector('p').addEventListener('click', function () {
  console.log('<p> - capture phase');
}, true);

// runs last after event bubbles back to the top
document.querySelector('body').addEventListener('click', function () {
  console.log('<body> - bubbling phase');
});

// runs second after target phase is completed and bubbling phase starts
document.querySelector('button').addEventListener('click', function () {
  console.log('<button> - bubbling phase');
});
```


The first event listener will run first, since its set to fire in the capturing phase. The second event listner will be invoked last, since it's closest to the top and its set ot be invoked in the bubbling phase. The final event listener is invoked second since it is also set to be invoked in the bubbling phase but it is closed to the element responsible for the event.