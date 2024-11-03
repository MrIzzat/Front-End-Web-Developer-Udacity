When elements are created with `createElement()`, they can't be found on the page straight away. This is because it wasn't added to the DOM, which is responsible for what appears on the page. In order for the element to appear on the page, it must be added to the DOM.


The `appendChild()` function can be used to add the newly created element to the page.


The `appendChild()` needs to be called from another element, it can't be called from the document object; it would raise an error.

For example:

```js
const newSpan = document.createElement('span');

const mainHeading = document.querySelector("h1");

mainHeading.appendChild(newSpan);
```

The first line creates a new `span` element. The second line gets the main heading. the third line calles `appendChild()` from the main heading variable to add the new `span` element to the page as the last child element of the main heading.