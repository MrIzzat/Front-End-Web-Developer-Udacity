While `.innerHTML` can be used to get or modify an element's HTML, `.textContent` can be used to get or modify the element's content as well as its descendant's contents.

`.childNodes[i].innerText` can be used to modify only text of only certain children specified by `i`.


The text can be changed just by doing an assignment.

For example:

```js
const card = document.querySelector('.card');

card.innerText = "HI"
```

Changing the inner text to an HTML element will show the HTML text rather than the HTML element, `innerHTML` is supposed to be changed to achieve this.

So doing:

```js
card.innerText = "<h1>HI</h1>"
```

Would set the text to be `<h1>HI</h1>` rather than just `HI` with a heading 1.

# `textContent` vs `innerText`

The same usage can be applied for `.textContent` for retrieving and setting the text in the previous examples. *As well as the information included about using `innerHTML` instead of `textContent`*

The difference between `.textContent` and `.innerText` is that `.textContent` will display the non-visible characters such as `\n` for new line and text set to be hidden (`display: none`)  and others, while `.innerText` will only show the visible characters.

`innerText` is only defined for `HTMLElements` while `textContent` is defined for all `Node` objects.

`innerText` turns `<br>` elements into `\n` while `textContent` ignores them.


It's recommended to use `textContent` when altering text and `innerText` when trying to grab information for a user.

But for all around use, `textContent` is the better choice.

*`textContent` ignores any CSS styling*