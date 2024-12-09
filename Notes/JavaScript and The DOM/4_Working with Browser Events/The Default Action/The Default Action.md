# The Default Action

The `event` object is manually used by professionals to prevent the default action from happening.

Sometimes, extra steps need to be done before going through with the default action of an element. For example, displaying an output message after clicking on an anchor tag hyper link. Another example is when validating data in a form before submitting it to the location in the `action` attribute.


The event object has a `preventDefault()` function that allows deviations from the default actions.

For example:

```js

const link = document.querySelector('my-classroom');//an anchor tag hyper link

link.addEventListner('click', function(event){
    event.preventDefault();
    console.log('Did not navigate to new page!');
})
```

Instead of traversing to the webpage specified by this anchor tag's location stored in its `href` attribute, it printed out a message to the console.


Check out the example in `index.html`.


`preventDefault()` stops events that are cancelable. The list of cancelable events ca be viewed [here](https://w3c.github.io/uievents/#event-types-list)