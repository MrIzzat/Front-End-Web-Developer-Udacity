While the `querySelector()` function returns only one element from the DOM, if it exists, the `querySelectorAll()` method returns a list of all elements that match the query.

For example:

```js
document.querySelectorAll('.header');

document.querySelectorAll('header');
```

The first line returns every element with the `header` class while the second line returns every element with the `header` tag.

The list that is returned is not an array, it's special list called a `NodeList`. This means the `.map()` method from the array prototype cannot be used. Instead, a `forEach()` method is an alternative to it. It's similar to the `forEach()` method for the array. Its support does not cover all browsers, such as edge. A for loop can be used to loop over the list.


The for of loop does not work with Node Lists yet a work around would be to add this line:

```js
NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]
```

*A safer option for this would be:*
```js
for (let element of [...document.querySelectorAll('selector')]) {...}
```

Or to use the classic for loop.


It's not implemented with for of loops because it is not yet a standard.