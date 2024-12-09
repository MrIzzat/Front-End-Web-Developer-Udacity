`document` is just a normal JavaScript object, it has properties with key/value pairs. It also contains functions. The `getElementById()` method to get an element using it's ID.

Syntax:

```js
document.getElementById();
```

Example usage:

```js
document.getElementByID('footer');
```

The string passed to the function does not need to include the ID selector `#`, the function already assumes it's searching for an ID.

The element can be stored into a variable after it has been found. For example:

```js
const footer = document.getElementByID('footer');
```