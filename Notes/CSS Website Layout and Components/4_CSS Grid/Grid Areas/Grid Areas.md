The `grid-area` property specifies an area for the grid (?)



no idea what this means.

`grid-area` is shorthand for `grid-row-start`,`grid-row-end`, `grid-row-end` abd `grid-column-end`.


The `grid-area` property defines the space ana element takes up by setting the values for the row it starts in and the row it ends in, and the column it starts in and teh column it ends in.

An example:

```
grid-area: 1/2/3/3;
```

The syntax is `row start/column start/row end/column end`

instead of using `row end`, `span numberOfRows` can be used to specify how many rows the element should cover. The same can be done for `column end` with `span numberOfColumns`.

`row-end` stands for the end of the element should be at the beginning of the row number. The same thing is for `column-end` (like saying [1,3) (don't enter the third row)).

The grid area for that element will take up the first row to the start of the third row and the second column to the start of the third column.


`grid-template-areas` can be used to specify the locations of an area within a grid.

An example:

```
grid-template-areas:
"top top"
"bottomLeft bottomRight"
```
Based on the names given in `grid-template-areas`, these areas can be passed by name onto the `grid-area` property of the element that should take up that area. *Make sure not to include the quotaions when passing it to `grid-area`*

Check out the examples in `index.html` and in `index2.html`

The chrome inspect element can help with viewing the grids.