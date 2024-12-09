The `.classList` property is newer than the `.className` property. It's a lot more direct than using `.className` with its need for conversions. The `.classList` property returns a DOMTokenList, which comes with some functions of its own:


* `.add()` adds a class to the list
* `.remove()` removes a class from the list
* `.toggle()` adds a class if it doesn't exist or removes it if it does
* `.contains()` returns true or false, checks if the class is in the list


For example:

```html
<h1 id="main-heading" class="ank-student">Learn Web Development at Udacity</h1>
```

```js
const mainHeading = document.querySelector('#main-heading');
mainHeading.classList.toggle('richard');
```

The JavaScript will add the class `richard` to the main heading.