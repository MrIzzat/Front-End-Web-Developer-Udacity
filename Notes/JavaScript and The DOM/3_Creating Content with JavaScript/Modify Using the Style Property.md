The most specific (most prioritised) CSS rule set are those contained within the `style=` attribute within the HTML.

The `style` attribute of an element can be accessed directly in JavaSCript.

An example:

```js

const mainHeading = document.querySelector("h1");

mainHeading.style.color = 'red';
```


When using the `.style` property in JavaScript, only one CSS style (rule) can be modified at a time. That's why the `.color` needed to be specified with `.style` in `.style.color = 'red'`.

The CSS set with the `.style` property will appear in the HTML of the element in the `style=` attribute.

To change multiple styles (rules), the `cssText` property is needed.