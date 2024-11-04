Another way to avoide using the `.style` property and set multiple stylings is with the `.setAttribute()` function. `.setAttribute()` can be used to change more than just the styling, it can be used to set any attribute to any value in JavaScript.


Example usage of `setAttribute()` to change the styling:


```js

const mainHeading = document.querySelector('h1');

mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');

```

Example usage of `setAttributes()` to change other attributes:

```js
const mainHeading = document.querySelector('h1');

mainHeading.nextElmentSibling.setAttribute('id','heading-sibling');

document.querySelector('#heading-sibling').style.backgroundColor ='red';
```

The first line gets the first `<h1>` element. The second line sets the `id` attribute to the element directly after it  (sibling) to `heading-sibling`. The third line confirms the attribute modification by querying it and setting it's background color to red.