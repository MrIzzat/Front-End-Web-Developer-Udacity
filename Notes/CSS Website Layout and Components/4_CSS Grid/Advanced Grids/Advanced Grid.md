`fr` unit is used to specify the remaining space. 1fr refers to all of the remaining space (in the grid container). It cannot be used more than once, if used back to back, it will split the remaining space evenly depending on how many elements are left. Using a 1fr for each element will split the elements evenly along the grid.

Instead of having to manually creating multiple columns of the same size, `repeat()` can be used to create columns of the same size by passing the number of columns followed by the size.

An example:

```
grid-template-columns: repeat(6,1fr);
```

The `minmax()` function is used for track sizing by setting ranges of rows and columns so they don't have to be set manually.

Sometimes, manually defining the rows is not possible due to not knowing how many rows there will be. The `grid-auto-rows` solves this issue. `grid-auto-rows` replaces `grid-template-rows`.

`min-max()` and `grid-auto-rows` work great together. `min-max()` will repeat values. The first value it takes is a minimum size for that value, the second value is at most how big that value can be. The `auto` keyword allows an element to be as big as the content within the element.

Checkout the example in `index.html`