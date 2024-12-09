**Display Block** elements are elements that take up the space in the entire row. Other elements cannot be placed next to them. An element is set to be display block with:

```css
 display: block;
```

**Display Inline** elements are elements that only take up the space they need. Other elements can be placed next to them if there is enough space.

```css
display: inline-block;
```

Setting `display` to just `inline` will make the element have no width nor height. It will just take up the space that the text property takes up, like `<span>`.

Setting `display` to `none` makes the element invisible.


An example can be seen in `index.html`