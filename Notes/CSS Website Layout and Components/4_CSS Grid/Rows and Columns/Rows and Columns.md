After setting the `display` property to `grid`, the rows and columns of the grid need to be set. This can be done through the `grid-template-columns` and `grid-template-rows` properties. The space between rows and columns can be set with `grid-gap`.


`grid-template-columns` defines the column layout in a grid, how many sections the page should be divided into vertically. The values for the size of the columns is explicitly given, the number of columns is determined implicitly based on the size given.

An example:

```
grid-template-columns: 60px 60px;
```

This creates two columns of 60px each. If there were two items and their sizes weren't stated explicitly, the first item would be placed in the first column and the second item would be placed in the second.


`grid-template-rows` follows the same logic,

An example:

```
grid-template-rows: 160px 60px;
```

`grid-gap` is also known as the gutter.

Tracks are what set up the rows and columns and gutters are the space in between.


The number of rows and columns is specified by a number of values in  `grid-template-rows` or `grid-template-columns` corresponding to the number of rows or columns needed.


Checkout the example in `index.html`