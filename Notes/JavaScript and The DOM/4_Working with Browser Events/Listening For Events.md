# Adding an Event Listener

The `.addEventListener()` function allows for listening into events and responding to them.

The phrases:

* listen for an event
* listen to an event
* hook into an event
* respond to an event 

all refer to the same idea.


Basic syntax of `addEventListener()`:


```js
eventTarget.addEventListener(eventToListenFor, functionToActivate);
```

An event listener needs three things:

* An event target, also known as the **target**
* The type of event to listen to, also known as the **type**
* A function to run when the event occurs, also known as the **listener**


In the basic syntax, the `eventTarget` variable is the **target**. Everything on the webpage is a event target, such as the `document` object or any element (`<p>` etc.).

The `eventToListenFor` variable represetns an event that should be listened for and responded to. There is a long list of things included, a few examples of which can be a click, double click, pressing key on keyboard, mouse wheel, submitting a form etc.

The `functionToActivate` function is the function that runs when the event occurs.


An example of using `addEventListener()`:

```js

const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function (){
    console.log('The heading was clicked!');
});
```
When the `h1` element is clicked, the console will print out `The heading was clicked!`.


The first line gets the element that will have the event added on to. The second line grabs that element, adds the `addEventListener()` function with the first argument being `'click'`, which means the event is a click, and the second argument being a function that prints to the screen the message `The heading was clicked!`.

