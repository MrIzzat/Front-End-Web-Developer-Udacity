The `removeChild()` and `remove()` functions can be used to remove content fromt a page.


# Removing a Child Element

`removeChild()` can be used to re move a child element. It's the opposite of `appendChild()`. Just like `appendChild()`, `removeChild()` needs a parent element and the child element that will be removed.

Syntax:

```js
parentElement.removeChild(childElement);
```


The `firstChild` property can be used to get the first content that comes directly after the start tag. If the content is text or newlines or even spaces, that content will appear as the output of `firstChild`. To get the first child that is an element, the `firstElementChild` should be used.

Removing an element removes it from the page and the DOM.

For example:

```js
const card = document.querySelector(".card");

const toRemove = card.firstElementChild;

card.removeChild(toRemove);
```

The first line gets the parent element. THe second card gets the element to be removed, in this case it was the first child element. The last line removes the element from the DOM.


# Workaround with the `removeChild()` function

In order for the `removeChild()` function to work, it needs to be accessed from the parent element, so the parent element must be found before calling the function.

A workaround to this would be to call the `parentElement` property from the element that is to be deleted, which retrieved the parent element of that element. Then, the `removeChild()` function can be called as normal.

An example:

```js
const mainHeading = document.querySelector('h1');

mainHeading.parentElement.removeChild(mainHead);
```

The first element gets the element to be removed. The second line calls the parent element of the element to be deleted then the `removeChild()` function with the element to be deleted as the first argument.

# Better and Optimal Workaround to remove an element

The `remove()` function can be called on an element to remove it from the DOM, its simpler and direct.

An example:

```js
const mainHeading = document.querySelector('h1');

mainHeading.remove();
```

