The `.createElement()` function is part of the Document object. It's called directly from the document object. It takes a string that should contain the tag of the element that should be created.

For example:

```js
document.createElement('span');

document.createElement('h3');
```

The first line creates `<span>` element while the second line creates `<h3>` element.


After an element has been created, content can be added to it using the `textContent` and `innerHTML` properties.


An example:

```js
const container = document.createElement('span');

container.textContent = ", right now!";
```

 The element can be positioned in the webpage with the `appendChild()` function.