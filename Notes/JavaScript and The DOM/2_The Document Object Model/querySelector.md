The `querySelector()` function can be used to find and select certain HTML elements the same way CSS does. For example:


```js
document.querySelector("#header");

document.querySelector(".header");

document.querySelector("header");
```

Like with CSS, the first line selects the element with the `header` id. The second line selects the first element with the `header` class. The third line selects the first element with the `header` tag.