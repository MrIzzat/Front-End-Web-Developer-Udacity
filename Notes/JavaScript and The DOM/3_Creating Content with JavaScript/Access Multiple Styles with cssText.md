The `.style` property only allows for the changing of one styling of an element, if multiple styles is needed to be changed, then multiple lines would need to be added with multiple calls to the `.style` property.

For example:

```js
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'blue';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';
```

Having to set each style manually requires a lot of work when there are a large number of styles that need to be changed.

The `.style.cssText` can be used to set multiple CSS styles at once.

For example:

```js
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
```

The color, background color and font size were all set with a single line of code.

`cssText` uses the exact same syntax as CSS (rules).


`cssText` overwrites anything that is contained within the `style=` attribute of that element.