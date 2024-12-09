# Event Delegation

**Event delegation** an be accessed through the `event` object. The event object contains a `.target` property that references the target of the event.

Based on the previous example (`The Problem of Too Many Events), the events that happen when a paragraph element is clicked are roughly what follows:

1. The paragraph element is clicked
2. The event goes through the capturing phase
3. The target is reached
4. The event goes through the bubbling phase and starts going up the DOM tree
5. The `<div>` element is reached and the listener function is ran
6. Inside the listener funciton, the `event.target` property can be accessed, which is the element that triggered the event (the click).

By using the `event.target` property, the `.textContent` of the element that triggered the event can be reached, as well as every other property.


The code in the previous example can be modified to be as follows to make use of the `.target` property:


```js

const myCustomDiv = document.createElement('div');

function respondToClick(event){
    console.log('A paragraph was Clicked: '+ event.target.textContent);
}

for (let i=0; i<200; i++){
    const newParagraph = document.createElement('p');

    newParagraph.textContent = 'This is Pragraph number '+i;

    myCustomDiv.appendChild(newParagraph);
}

myCustomDiv.addEventListener('click', respondToClick);

document.body.appendChild(myCustomDiv);
```


Check out the application of this code in `index.html`.


# Checking the Node Type in Event Delegation

Checking the node type of the event target during event delegation is important for validation, to know if the element that triggered the event is the right element.

For example:

```html
<article id="content">
    <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

  <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
</article>>
```

```js
document.querySelector('#content').addEventListener('click', function (evt) {
    console.log('A span was clicked with text ' + evt.target.textContent);
});
```

If the event listener is to only listen to `<span>` events but the event listener is set to the `<aricle>` element, the events delegation would respond to events fired from the `<p>` element as well.


Before doing a certain action, the node type of the event target can be validated to be a `<span>` by using the `nodeName` property:


```js

document.querySelector('#content').addEventListener('click', function(event){
    if (event.target.nodeName === 'SPAN'){
        console.log('A span was clicked with text ' + event.target.textContent);
    }
});
```

A `<span>` element's `nodeName` property will be set to `"SPAN"`, checking for this in the `nodeName` property of the event target will show if the element is a span or not and therefore if an action should be taken.


The `nodeName` of a `<p>` element is `"P"`.


`nodeName` will always return the name of the element in uppercase, it can be converted to lower case with the `toLowerCase()` function to make it a bit more readable, for example:

```js
// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

// convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}
```




