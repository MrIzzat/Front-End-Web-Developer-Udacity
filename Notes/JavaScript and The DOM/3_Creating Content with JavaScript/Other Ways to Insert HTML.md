Instead of always inserting HTML at the end of an element as its last child with `appendChild()`, other methods can be used to place the element into different locations.


The `.insertAdjacentHTML()` function can be used to do this. It takes two arguments, the location of the HTML and the HTML text that is going to be inserted. It must be called on a parent element. HTML code can be passed in HTML text argument and will be rendered as HTML.

The first argument can be one of four locations:

* `beforebegin` inserts the HTML text as a previous sibling
* `afterbegin` inserts the HTML text as the first child
* `beforeend` inserts the HTML text as the last child
* `afterend` inserts the HTML text as a following sibling

More information can be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML).

The visualization of the locations is as follows:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```