# The Event Object

When an event happens, the browser includes an **event object**. An event object is a regular JavaScript object that includes information about the event itself.


The `addEventListener()`'s listener function receives a notifcation when an event of the specified type occurs, the notfication being an object that implements the event interface. In other words, it can take an `event` object as an argument to store information about the event in it.

For example:

```js
document.addEventListener('click', function(event){
    console.log('The document was clicked');
});
```

In this example, the `event` argument was passed to the listener function, but this argument can be named anything, not necessarily `event`.

The content of an `event` object can be viewed in the console, for example:


```js
document.addEventListener('click', function(event){
    console.log(event);
});
```